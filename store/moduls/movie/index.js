const state = () => {
  return {
    listTop12Movie: null,
    listMovie: null,
    apiKey: 'k_xwo69vyq'
    // apiKey: 'k_3971y80e'
  }
}

const mutations = {
  setListMovie(state, value) {
    state.authStatus = value;
  },
  setListTop10Movie(state, value) {
    state.listTop12Movie = value;
  }
}

const actions = {
  async updateMovieList({ state, commit }, data) {
    try {
      // const res = await this.$axios.$get(`https://imdb-api.com/ru/API/Top250Movies/${state.apiKey}`);

      commit('setListMovie', res.items);
      commit('setListTop10Movie', res.items.slice(0, 12));
    } catch (err) {
      throw err;
    }
  },
  async getMovieById({ state }, id) {
    try {
      return await this.$axios.$get(`https://imdb-api.com/ru/API/Title/${state.apiKey}/${id}`);
    } catch (err) {
      throw err
    }
  },
  async getPersonById({ state }, id) {
    try {
      return await this.$axios.$get(`https://imdb-api.com/en/API/Name/${state.apiKey}/${id}`);
    } catch (err) {
      throw err
    }
  }
}

const getters = {
  getListTop12Movie(state, count) {
    return state.listTop12Movie;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
