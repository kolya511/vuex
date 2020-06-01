<template>
  <div>
    <div class="sort-menu">
      <span class="header-text">Sort by population</span>
      <img
        @click="sortByDescendingPeople()"
        class="sort-arrow"
        src="./icons/down-arrow.svg"
        alt="up-arrow"
        title="sort descending people"
      />

      <img
        @click="sortBypopulationGrowth()"
        class="sort-arrow"
        src="./icons/arrow-up.svg"
        alt="down-arrow"
        title="sort by population growth"
      />
    </div>

    <div v-for="(country, index) in getCountriesFromList" :key="index">
      <div>
        <div>
          <img :src="country.flag" alt="falg" class="flag-img" />
        </div>
        <div>Name: {{ country.name }}</div>
        <div>Capital: {{ country.capital }}</div>
        <div>Population: {{ country.population }}</div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CountriesList",

  data() {
    return {
      order: null
    };
  },

  computed: {
    ...mapGetters(["getCountriesFromList"])
  },

  methods: {
    ...mapActions(["getCountriesFromServer"]),

    sortBypopulationGrowth() {
      this.order = -1;
      this.getCountriesFromServer(this.order);
    },
    sortByDescendingPeople() {
      this.order = 1;
      this.getCountriesFromServer(this.order);
    }
  },

  mounted() {
    this.getCountriesFromServer(this.order);
  }
};
</script>

<style scoped>
.sort-menu {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
}
.header-text {
  font-size: 22px;
}
.flag-img {
  height: 30px;
  width: 60px;
}
.sort-arrow {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
  border: 1px solid rgb(66, 98, 243);
  border-radius: 10%;
  text-align: center;
}
</style>