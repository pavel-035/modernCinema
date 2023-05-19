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
  setUserData(state, { login, password, position }) {
    state.data.login = login;
    state.data.password = password;
    state.data.position = position;
  },
  setUserEnteredStatus(state, value) {
    state.isEntered = value
  },
  setUserSignupStatus(state, value) {
    state.isSignup = value
  }
}

const actions = {
  signup({ commit }, data) {
    commit('setUserData', data);
    commit('setUserSignupStatus', true);
  },
  login({ commit, state }, data) {
    if(state.isSignup && data.login === state.data.login && data.password === state.data.password) {
      commit('setUserEnteredStatus', true);
    } else {
      commit('setUserEnteredStatus', false);
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

