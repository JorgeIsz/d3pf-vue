import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      oauth
        .getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(err => {
          commit('SET_ACCESS_TOKEN', null)
          console.error('Error OAuth', err)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, {
            root: true
          })
        })
    }
  }
}
