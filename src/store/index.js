import { createStore } from 'vuex'

import oauth from './modules/oauth'

export default createStore({
  modules: {
    oauth
  }
})
