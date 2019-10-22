<template>
  <div id="app">
    <Search></Search>
    <router-view to=""/>
    <NavBar></NavBar>
  </div>
</template>

<script>
  import Search from '@/components/Search'
  import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    Search,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
