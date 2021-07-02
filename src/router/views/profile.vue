<script>
import Layout from '@layouts/main.vue'

export default {
  page() {
    return {
      title: this.user.name,
      meta: [
        {
          name: 'description',
          content: `The user profile for ${this.user.name}.`,
        },
      ],
    }
  },
  components: { Layout },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <Layout>
    <div :class="$style.centered">
      <div :class="$style.content">
        <h1>
          <BaseIcon name="user" />
          {{ user.name }}
          Profile
        </h1>
        <pre>{{ user }}</pre>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.centered {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
