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
  async addCinema({ commit, dispatch }, data) {
    try {
      const jsonData = JSON.stringify(data);

      await this.$axios.$post(`/cinema/add`, jsonData, {
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
  async updateCinema({ commit, dispatch }, data) {
    try {
      const jsonData = JSON.stringify(data);

      await this.$axios.$post(`/cinema/add/${data.id}`, jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return true;
    } catch (err) {
      throw err;
    }
  },
  async deleteCinema({ commit, dispatch }, id) {
    try {
      await this.$axios.$post(`/cinema/delete/${id}`);

      return true;
    } catch (err) {
      throw err;
    }
  },
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
