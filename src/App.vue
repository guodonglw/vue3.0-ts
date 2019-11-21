<template>
  <div id="app">
    <router-view />
    <bottom-tab></bottom-tab>
  </div>
</template> 

<script>
import BottomTab from '@/components/BottomTab'
export default {
  components: {
    BottomTab
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
