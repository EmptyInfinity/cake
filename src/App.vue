<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Creation</router-link> |
      <router-link to="/order">Order</router-link> | 
      <router-link to="/pizza">Pizza</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  // background: url("./assets/bg.png");
  background-size: contain;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
