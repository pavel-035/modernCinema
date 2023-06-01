const state = () => {
  return {
    authStatus: false
  }
}

const mutations = {
  setAuthStatus(state, value) {
    state.authStatus = value;
  }
}

const actions = {
  async login({ state, dispatch }, { login, password, userType }) {
    try {
      const jsonData = JSON.stringify({
        loginBuyer: login,
        passwordBuyer: password,
        userType: userType
      });

      await this.$axios.$post(`/login`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      dispatch('authStatus');
    } catch (err) {
      console.log(err);
    }
  },
  async logout({ dispatch }) {
    await this.$axios.$post(`/logout`);
    dispatch('authStatus');
  },
  async authStatus({ commit }) {
    const { authenticated } = await this.$axios.$get(`/auth_status`);

    commit('setAuthStatus', authenticated);
  }
}

const getters = {
  getUserEnteredStatus(state) {
    return state.authStatus;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
