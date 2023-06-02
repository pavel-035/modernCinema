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

      // запрос на фзод в аккаунт
      await this.$axios.$post(`/login`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // если вход выполнен
      // записать роль рользователя(cinemaAgent или buyer)
      commit('setCinemaAgent', data.userType);
      // изменить статус входа
      dispatch('authStatus', true);
      // вернуть true
      return true;
    } catch (err) {
      // если вход не выполнен вернуть ошибку
      throw err;
    }
  },
  async logout({ dispatch }) {
    // выполнить запрос на выход из аккаунта
    await this.$axios.$post(`/logout`);
    // изменить статус входа
    dispatch('authStatus');
  },
  async authStatus({ commit }, value) {
    // проверить статус входа в аккаунт
    const { authenticated } = await this.$axios.$get(`/auth_status`);

    // записать в state результат
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
