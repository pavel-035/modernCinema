import Vue from "vue";
import Vuex from "vuex";

import auth from "./moduls/auth";
import buyer from "./moduls/buyer";

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    'auth': auth,
    'buyer': buyer
  }
})
