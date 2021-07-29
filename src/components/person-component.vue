<script>
import Parse from 'parse'

export default {
  data: function() {
    return {
      person: null,
      names: ['Juan', 'Dory', 'Chris'],
      emails: [
        'uno@thebrewery.app',
        'dos@thebrewery.app',
        'tres@thebrewery.app',
      ],
    }
  },
  methods: {
    fetchPerson: async function() {
      // create your Parse Query using the Person Class you've created
      try {
        const randomName = Math.floor(Math.random() * this.names.length)
        const query = new Parse.Query('Person')
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('name', this.names[randomName])
        // run the query
        const Person = await query.first()

        this.person = {
          name: Person.get('name'),
          email: Person.get('email'),
        }
      } catch (error) {
        alert(
          `Error fetching person object: ${error}. Check browser console for more details.`
        )
      }
    },
    addPerson: async function() {
      try {
        const randomName = Math.floor(Math.random() * this.names.length)
        const randomEmail = Math.floor(Math.random() * this.emails.length)
        // create a new Parse Object instance
        const Person = new Parse.Object('Person')
        // define the attributes you want for your Object
        Person.set('name', this.names[randomName])
        Person.set('email', this.emails[randomEmail])
        // save it on Craft Data Store (check your Dashboard)
        await Person.save()
        alert(`Person [${Person.get('name')}, ${Person.get('email')}] saved!`)
      } catch (error) {
        alert(
          `Error saving new person: ${error}. Check browser console for more details.`
        )
      }
    },
  },
}
</script>

<template>
  <div :class="$style.content">
    <div>
      <button @click="addPerson">Add Person</button>
      <button @click="fetchPerson">Fetch Person</button>
    </div>
    <div v-if="person"> {{ person }}</div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  div {
    margin: 5px 0;
  }

  button {
    margin: 0;
    font-family: inherit;
    font-size: 14px;
    line-height: inherit;
    color: inherit;
  }
}
</style>
