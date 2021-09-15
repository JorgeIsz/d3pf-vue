import { createApp } from 'vue'
import { VuesticPlugin } from 'vuestic-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuestic-ui/dist/vuestic-ui.css'

createApp(App)
  .use(store)
  .use(VuesticPlugin)
  .use(router)
  .mount('#app')
