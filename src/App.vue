<template>
  <div id="app">
    <Header />
    <Menu v-if="this.$store.state.checkMenu" />
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Menu from './components/Menu'

  export default {
    el: 'app',
    components : {
      Header,
      Menu
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
