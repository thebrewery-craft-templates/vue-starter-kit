<script>
import NavBar from '@components/nav-bar.vue'

export default {
  components: { NavBar },
}
</script>

<template>
  <div :class="$style.container">
    <NavBar />
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  min-width: $size-content-width-min;
  height: 100vh;
  margin: 0 auto;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  color: #636b6f;
  background: #000;
}
</style>
