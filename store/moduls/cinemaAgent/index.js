const state = () => {
  return {
    data: {
      position: '',
      login: '',
      password: ''
    }
  }
}

const mutations = {}

const actions = {
  async signup({ commit, dispatch }, data) {
    try {
      const jsonData = JSON.stringify(data);

      await this.$axios.$post(`/cinemaAgent/register`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await this.dispatch('auth/login', { login: data.loginCA, password: data.loginCA, userType: 'cinemaAgent' });

      return true;
    } catch (err) {
      throw err;
    }
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
