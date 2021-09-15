import { createStore } from 'vuex'

import oauth from './modules/oauth'
import loading from './modules/loading'

export default createStore({
  modules: {
    oauth,
    loading
  }
})
