const state = () => {
  return {
    data: {
      cinemaList: null
    }
  }
}

const mutations = {
  setListCinema(state, data) {
    state.cinemaList = data
  }
}

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
  },
  async loadCinemaList({ commit }) {
    try {
      // запрос на получения спика кинотеатров агента
      const data = await this.$axios.$get(`/cinemaAgent/cinema/${this.store.state.user_id}`);
      // записать в state вернувшиеся данные
      commit('setListCinema', data);

      return true;
    } catch (err) {
      // вызвать ошибку если вернулась ошибка
      throw err;
    }
  },
}

const getters = {
  getCinemaList(state) {
    return state.cinemaList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
