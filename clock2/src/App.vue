<template>
  <div id="app">
    <h1>시계</h1>
    <MyClock></MyClock>
  </div>
</template>

<script>
import MyClock from './MyClock.vue'

export default {
  name: "App",
  components: { MyClock }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

