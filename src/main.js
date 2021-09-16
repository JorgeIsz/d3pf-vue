import { createApp } from 'vue'
import { VuesticPlugin } from 'vuestic-ui'
import router from './router'
import store from './store'
import { vuesticConfig } from './plugins/Vuestic'
import { FontAwesomeIcon } from './plugins/fontAwesome'

import App from './App.vue'

import './assets/css/main.styl'

createApp(App)
  .use(store)
  .use(VuesticPlugin, vuesticConfig)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
