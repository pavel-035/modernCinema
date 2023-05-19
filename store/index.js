import Vue from "vue";
import Vuex from "vuex";

import empty from "./models/user/empty";

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: { empty }
})
