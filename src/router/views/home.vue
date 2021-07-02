<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
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
        <div :class="$style.links">
          <a
            href="https://github.com/bencodezen/vue-enterprise-boilerplate"
            target="_blank"
            >Documentation</a
          >
        </div>
        <div :class="$style.vueLogoWrapper">
          <p>Powered by:</p>
          <img
            :class="$style.vueLogo"
            src="@assets/images/logo.png"
            alt="Vue Logo"
          />
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
  justify-content: center;
  height: 100vh;
}

.responsiveImage {
  max-width: 55%;
  height: auto;
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

.vueLogoWrapper {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  p {
    margin-right: 1.25em;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .vueLogo {
    max-width: 25%;
    height: auto;
  }
}
</style>
