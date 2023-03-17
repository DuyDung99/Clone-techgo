import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/index'
import store from '../store'

import './assets/Styles.css'

loadFonts()
const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify).mount('#app')
