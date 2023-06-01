const state = () => {
  return {
    data: {
      position: '',
      login: '',
      password: ''
    },
    isEntered: false,
    isSignup: false
  }
}

const mutations = {
  async signupBuyer(state, { login, password }) {
    const jsonData = JSON.stringify({
      loginBuyer: login,
      passwordBuyer: password
    });

    await this.$axios.$post(`/buyer/register`, jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  async loginBuyer(state, { login, password }) {
    const jsonData = JSON.stringify({
      loginBuyer: login,
      passwordBuyer: password
    });

    await this.$axios.$post(`/buyer/login`, jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  setUserEnteredStatus(state, value) {
    state.isEntered = value
  },
  setUserSignupStatus(state, value) {
    state.isSignup = value
  }
}

const actions = {
  async signup({ commit, dispatch }, data) {
    try {
      await commit('signupBuyer', data);
      dispatch('login', data);
    } catch (err) {
      console.log(err);
    }
  },
  async login({ commit, state }, data) {
    try {
      await commit('loginBuyer', data);
    } catch (err) {
      console.log(err);
    }
  }
}

const getters = {
  getUserEnteredStatus(state) {
    return state.isEntered
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
