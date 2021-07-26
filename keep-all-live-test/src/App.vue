<template>
  <div id="app">
    <h1>LOGIN: {{ `${auth}` }}</h1>
    <button @click="onClick">LOGIN</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <keep-alive> -->
    <router-view :is-login="auth" />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      console.log(this.$router);
    }
  },
  created() {
    console.log(this.temp);
  },
  data: () => ({
    auth: false,
    temp: {}
  }),
  methods: {
    onClick() {
      this.auth = !this.auth;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
