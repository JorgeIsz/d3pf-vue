import store from '../store'

export const setApiErr = params => {
  store.commit('error/SET_ERROR', params)
}
