<template>
    <div>
        <Tabbar></Tabbar>
        <router-view/>
    </div>
</template>

<script>
    import Tabbar from '@/components/Tabbar.vue'
    export default {
      components:{
        Tabbar
      }
    }
</script>

<style lang="scss" scoped>

</style>