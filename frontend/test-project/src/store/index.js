import Vue from "vue"
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: [],
        searchedcountries: []
    },

    mutations: {
        saveCountries(state, countriesArr) {
            state.countries = countriesArr
        },

        saveSearchedCountries(state, countriesArr){
            state.searchedcountries = countriesArr
        }
    },

    actions: {
        getCountriesFromServer({ commit }, order) {
            axios.get(`http://localhost:3000/countries?order=${order}`)
                .then(res => res.data)
                .then(resData => {
                    if (resData) {
                        commit("saveCountries", resData)
                    }
                    else throw new Error("Fatch faild")
                })
        },

        getSearchedCountriesFromServer({ commit }, name) {
            axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
                .then(res => res.data)
                .then(resData => {
                    if (resData) {
                        commit("saveSearchedCountries", resData)
                    }
                    else throw new Error("Fatch faild")
                })
        }
    },

    getters: {
        getCountriesFromList: state => state.countries,

        getSearchedCountriesFromList: state => state.searchedcountries
    }

})