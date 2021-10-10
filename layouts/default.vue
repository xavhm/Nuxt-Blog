<template>
<div>
  <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"></TheHeader>
  <TheSidenav :show="displaySidenav" @close="displaySidenav = false"></TheSidenav>
  <nuxt/>
</div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  components: { TheHeader, TheSidenav },
  data() { 
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>