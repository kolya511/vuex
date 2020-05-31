<template>
  <div>
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    NavBar,
  },
    data() {
      return {
        clientid: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
      }
    },
};
</script>

<style scoped>

</style>
