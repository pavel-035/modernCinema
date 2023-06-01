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
  async signup({ commit, dispatch }, { login, password, userType }) {
    try {
      const jsonData = JSON.stringify({
        loginBuyer: login,
        passwordBuyer: password
      });

      await this.$axios.$post(`/buyer/register`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      await this.dispatch('auth/login', { login, password, userType });
    } catch (err) {
      console.log(err);
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
