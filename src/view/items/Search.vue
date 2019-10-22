<template>
  <div class="search">
    <img src="../../assets/img/logo@2x.png">
    <div class="searchInput dib">
      <input type="text" class="keyword">
    </div>
    <div class="box dib">
      <a class="dib scan" href="#">
        <img src="../../assets/img/scan@2x.png" class="dib vam">
      </a>
      <a class="dib msg" href="#">
        <img src="../../assets/img/msg@2x.png" class="dib vam">
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "searcher"
    }
</script>

<style scoped lang="less">
  .search {
    margin: .15rem 0.3rem;
    overflow: hidden;
    height: .58rem;
    display: flex;
    img {
      width: 1.2rem;
    }
    .searchInput {
      flex: 1 1 auto;
      box-sizing: border-box;
      border-radius: 0.3rem;
      margin-left: 0.2rem;
      background-color: #FFFFFF;
      display: flex;
      .keyword {
        margin: 0 .3rem;
        border: none;
        outline: none;
        height: 0.58rem;
        flex: 1 1 auto;
      }
    }
    .box {
      height: .58rem;
      .scan {
        width: 0.4rem;
        margin: .09rem 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .msg {
        width: 0.4rem;
        margin: .09rem 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }


</style>
