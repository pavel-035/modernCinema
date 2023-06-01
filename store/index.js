import Vue from "vue";
import Vuex from "vuex";

import buyer from "./models/buyer";

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: { buyer }
})
