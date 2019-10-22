<template>
  <div>
    <!--<Ads :imgsrc="imgsrc"></Ads>-->
    <a href="#" class="ads" target="_self">
      <img src="../../src/assets/img/home/guanggao-01@2x.png" alt="">
    </a>
    <BuyLimit></BuyLimit>
    <Recommend></Recommend>
    <GlobalBrand></GlobalBrand>
    <GlobalBestSell></GlobalBestSell>
    <HotSort></HotSort>
  </div>
</template>

<script>
import  Ads from './items/Ads'
import  BuyLimit from './items/BuyLimit'
import  Recommend from './items/Recommend'
import  GlobalBrand from './items/GlobalBrand'
import  GlobalBestSell from './items/GlobalBestSell'
import  HotSort from './items/HotSort'
export default {
  name: 'home',
  components: {
    Ads,
    BuyLimit,
    Recommend,
    GlobalBrand,
    GlobalBestSell,
    HotSort,
  },
  data () {
    return {
      imgsrc: 'src/assets/img/home/guanggao-01@2x.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ads {
  display: inline-block;
  width: 100%;
  height: 3.2rem;
  flex: 1 1 auto;
}
img {
  width: 100%;
  height: 100%;
}

</style>
