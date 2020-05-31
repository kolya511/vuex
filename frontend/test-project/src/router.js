import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "./components/HomePage";
import CountriesList from "./components/CountriesList";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/countries', component: CountriesList },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router