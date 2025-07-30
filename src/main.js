import { createApp } from 'vue'
import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'

// modules
import pinia from './modules/pinia'
import router from './modules/router'

// styles
import './style.css'

const app = createApp(App)
app.use(ui)
app.use(router)
app.use(pinia)
app.mount('#app')
