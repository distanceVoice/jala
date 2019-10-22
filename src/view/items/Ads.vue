<template>
  <a :href="url" target="_self">
    <img :src="imgsrc" alt="">  <!--/src/assets/img/home/guanggao-01@2x.png-->
  </a>
</template>

<script>
  export default {
    name: "ads",
    props: ['imgsrc'],
    data() {
      return {
        url: '#'
      }
    }
  }
</script>

<style scoped lang="less">
  a {
    display: inline-block;
    width: 9.2rem;
    height: 3rem;
    flex: 1 1 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
