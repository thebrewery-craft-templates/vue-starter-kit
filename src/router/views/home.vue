<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import PersonComponent from '@components/person-component.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PersonComponent },
}
</script>

<template>
  <Layout>
    <div :class="$style.centered">
      <div :class="$style.content">
        <img
          :id="maltLogo"
          src="@assets/images/malt.png"
          alt="Malt Logo"
          :class="$style.responsiveImage"
        />
        <div>
          <h1>Welcome to your Craft React App!</h1>
          <p>
            To get started, edit <code>./app.js</code> and paste the
            <code>App ID</code>, <code>JavaScript Key</code> and
            <code>API URL</code> from your
            <a href="https://craft.thebrewery.app/apps" target="_blank">
              &nbsp;App&apos;s Settings Page
            </a>
          </p>
          <p>
            Once you are done configuring your React App, you can try our simple
            script below that save and retrieve data from your Craft database,
            using our built-in Parse Server &amp; Parse SDK. Go ahead and click
            the <code>Add Person</code> and <code>Fetch Person</code> button
            below. Then, go to your
            <a href="https://craft.thebrewery.app/apps" target="_blank">
              App&apos;s Dashboard
            </a>
            to check the changes in Person class
          </p>
        </div>

        <PersonComponent></PersonComponent>
        <div>
          <p>
            To learn more about Parse SDK, the
            <a
              href="https://parseplatform.org/Parse-SDK-JS/api/master/Parse.html"
              target="_blank"
            >
              Parse SDK for JS guide
            </a>
            is the good place to start.
            <br />
            And if you want to use &amp; learn more about the built-in APIs
            using REST, the
            <a
              href="https://docs.parseplatform.org/rest/guide/"
              target="_blank"
            >
              Parse REST API Guide
            </a>
            is also available.
          </p>
        </div>
        <div :class="$style.footer">
          <p>Powered by:</p>
          <div :class="$style.logoWrapper">
            <img
              :class="$style.breweryLogo"
              src="@assets/images/the_brewery_white.png"
              alt="The Brewery Logo"
            />

            <img
              :class="$style.vueLogo"
              src="@assets/images/logo.png"
              alt="Vue Logo"
            />
          </div>
        </div>
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
  height: 100vh;
  margin-top: 30px;
  line-height: 1.5;

  h1 {
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 500;
    color: #636b6f;
    text-align: center;
  }

  p {
    margin-right: 100px;
    margin-bottom: 0;
    margin-left: 100px;
    font-size: 20px;
    text-align: center;
  }

  a {
    color: #f9cc41;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    transition: color 0.3s;
  }
}

.responsiveImage {
  max-width: 30%;
  margin-bottom: 30px;
}

.links {
  a {
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
}

.footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;

  p {
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .logoWrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 20px;

    .breweryLogo {
      width: 200px;
      max-height: 70px;
      margin-right: 10px;
    }

    .vueLogo {
      max-height: 60px;
      margin-right: 20px;
    }
  }
}
</style>
