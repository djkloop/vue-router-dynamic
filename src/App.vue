<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this.$router)
    if (localStorage.getItem('user')) {
      this.$router.push({
        name: 'index'
      })
      return
    }
    if (this.$router.currentRoute.fullPath !== '/login') {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
