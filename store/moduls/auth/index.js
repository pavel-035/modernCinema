const state = () => {
  return {
    authStatus: false,
    userRole: false
  }
}

const mutations = {
  setAuthStatus(state, value) {
    state.authStatus = value;
  },
  setCinemaAgent(state, value) {
    state.userRole = value;
  }
}

const actions = {
  async login({ state, dispatch, commit }, data) {
    try {
      const jsonData = JSON.stringify(data);

      await this.$axios.$post(`/login`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      commit('setCinemaAgent', data.userType);
      dispatch('authStatus', true);

      return true;
    } catch (err) {
      throw err;
    }
  },
  async logout({ dispatch }) {
    await this.$axios.$post(`/logout`);
    dispatch('authStatus', false);
  },
  async authStatus({ commit }, value) {
    const { authenticated } = await this.$axios.$get(`/auth_status`);

    commit('setAuthStatus', value);
  }
}

const getters = {
  getUserEnteredStatus(state) {
    return state.authStatus;
  },
  getUserRole(state) {
    return state.userRole;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
