<template>
  <b-navbar class="navbar">
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/countries' }">Countries List</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a href="http://localhost:3000/login">
            <b-button type="is-success" outlined>Login</b-button>
          </a>
          <a href="http://localhost:3000/logout">
            <b-button type="is-danger" outlined>Logout</b-button>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>
export default {
  name: "nav-bar"
};
</script>

<style scoped>
.navbar {
  background-color: rgb(255, 255, 255);
  border: 1px solid #8bbef8
}
.navbar a{
    margin-right: 20px;
}
</style>