<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="mt-4">
      <router-view class="first-level mx-auto" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navigation.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.first-level {
  max-width: 1140px;
}
</style>
