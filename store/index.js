import Vue from "vue";
import Vuex from "vuex";

import auth from "./moduls/auth";
import buyer from "./moduls/buyer";
import cinemaAgent from "./moduls/cinemaAgent";

import movie from "./moduls/movie";
import cinema from "./moduls/cinema";

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    user_id: 1
  },
  modules: {
    'auth': auth,
    'buyer': buyer,
    'cinemaAgent': cinemaAgent,
    'movie': movie,
    'cinema': cinema
  }
})
