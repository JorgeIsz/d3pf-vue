import { createApp } from 'vue'
import { VuesticPlugin } from 'vuestic-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuestic-ui/dist/vuestic-ui.css'
import './assets/css/main.styl'

import { library } from '@fortawesome/fontawesome-svg-core'
// Iconos de tipo "Solid"
import {
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem
} from '@fortawesome/free-solid-svg-icons'
// Iconos de tipo "Brand" (marcas o logos de empresas)
import {
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
} from '@fortawesome/free-brands-svg-icons'
// El componente que vamos a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

const vuesticConfig = {
  colors: {
    primary: '#23e066',
    secondary: '#002c85',
    success: '#40e583',
    info: '#2c82e0',
    danger: '#e34b4a',
    warning: '#ffc200',
    gray: '#babfc2',
    dark: '#34495e',
    darkGray: '#373737',
    light: '#fff'
  }
}

createApp(App)
  .use(store)
  .use(VuesticPlugin, vuesticConfig)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
