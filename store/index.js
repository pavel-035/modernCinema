import Vue from "vue";
import Vuex from "vuex";

import auth from "./moduls/auth";
import buyer from "./moduls/buyer";
import cinemaAgent from "./moduls/cinemaAgent";

import movie from "./moduls/movie"

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    'auth': auth,
    'buyer': buyer,
    'cinemaAgent': cinemaAgent,
    'movie': movie
  }
})
