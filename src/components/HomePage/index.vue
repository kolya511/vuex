<template>
  <div>
    <div class="text-block">
      <p>Search country</p>
    </div>
    <div class="search-block">
      <b-field position="is-centered">
        <b-input placeholder="Search..." type="search" icon="magnify" v-model="inpValue"></b-input>
        <p class="control">
          <button @click="search()" :disabled="isButtonDisabled" class="button is-info">Search</button>
        </p>
      </b-field>
    </div>

    <div class="result">
      <div v-if="sowResult">
        <div v-for="(country, i) in getSearchedCountriesFromList" :key="i">
          <div>
            <img :src="country.flag" alt="falg" class="flag-img" />
          </div>
          <div>Name: {{ country.name }}</div>
          <div>Capital: {{ country.capital }}</div>
          <div>Population: {{ country.population }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",

  data() {
    return {
      inpValue: null,
      sowResult: false
    };
  },

  computed: {
    ...mapGetters(["getSearchedCountriesFromList"]),

    isButtonDisabled() {
      if (this.inpValue) {
        return false;
      } else return true;
    }
  },

  methods: {
    ...mapActions(["getSearchedCountriesFromServer"]),

    search() {
      this.getSearchedCountriesFromServer(this.inpValue);
      this.sowResult = true;
    }
  },
};
</script>

<style  scoped>
.search-block {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.result {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-btn {
  height: 25px;
}
.flag-img {
  height: 30px;
  width: 60px;
}
.text-block {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.text-block p {
  font-size: 24px;
}
</style>