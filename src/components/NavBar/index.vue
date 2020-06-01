<template>
  <b-navbar class="navbar">
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>

      <div class="counties-list" v-if="getUserStatus">
        <b-navbar-item tag="router-link" :to="{ path: '/countries' }">Countries List</b-navbar-item>
      </div>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <div v-if="!getUserStatus">
            <a href="http://localhost:3000/login">
              <b-button type="is-success" outlined>Login</b-button>
            </a>
          </div>

          <div v-if="getUserStatus">
            <a href="http://localhost:3000/logout">
              <b-button type="is-danger" outlined>Logout</b-button>
            </a>
          </div>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "nav-bar",

  computed: {
    ...mapGetters(["getUserStatus"])
  },

  methods: {
    ...mapActions(["checkUserLogin"])
  },

  mounted() {
    this.checkUserLogin();
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgb(255, 255, 255);
  border: 1px solid #8bbef8;
}
.navbar a {
  margin-right: 20px;
}
.counties-list{
  margin-top: 5.5px;
}
</style>