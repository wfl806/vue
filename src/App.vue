<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import Tabbar from '@/components/Tabbar.vue'
  import ContainerView from "@/views/ContainerView.vue"
  export default {
    components:{
      ContainerView
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom:1.2rem;
}
</style>
