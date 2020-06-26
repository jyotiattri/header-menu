<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="header">
    
    <router-link to="/about">About Us</router-link>
    <router-link to="/travel">Travel</router-link>
    <div class="flex-container row2">
      <router-link to="/travel/america">America</router-link>
      <router-link to="/travel/england">England</router-link>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
