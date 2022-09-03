<template>
    <van-tabbar v-model="active" route active-color="rgb(207, 10, 44)" inactive-color="#000" class="tabbar">
      <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="apps-o" dot>分类</van-tabbar-item>
      <van-tabbar-item to="/find" icon="eye">发现</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" :badge="$store.getters.productNum">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
      data(){
        return {
          active:0,
        }
      },
      methods: {
      }
    };
</script>

<style lang="scss" scoped>
.tabbar{
  z-index: 100;
}
</style>