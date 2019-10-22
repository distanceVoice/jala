<template>
  <div class="fixed">
    <router-link  to="/home" @click="handleSkipEvent" class="item dib tc">
      <img src="../assets/img/home@2x.png" alt="">
      <p class="contene">首页</p>
    </router-link >
    <router-link to="/sort" @click="handleSkipEvent" class="item dib tc">
      <img src="../assets/img/sort@2x.png" alt="">
      <p class="contene">分类</p>
    </router-link>
    <router-link to="/cart" @click="handleSkipEvent" class="item dib tc">
      <img src="../assets/img/cart@2x.png" alt="">
      <p class="contene">购物车</p>
    </router-link>
    <router-link to="/mine" @click="handleSkipEvent" class="item dib tc">
      <img src="../assets/img/mine@2x.png" alt="">
      <p class="contene">我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "nav-bar",
    methods: {
      handleSkipEvent(e) {
        this.$router.push({ name: 'cart', params: { userId: 'wise' }})
      }
    }
  }
</script>

<style scoped lang="less">
  .fixed {
    width: 100%;
    position: fixed;
    display: flex;
    bottom: 0;
    .item {
      flex:  1 1 auto;
      /*display: flex;*/
      /*flex-direction: column;*/
    }
  }
</style>
