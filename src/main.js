import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import './style.css'

const router = createRouter({
  routes: [],
  history: createWebHistory()
})

const app = createApp(App)
app.use(ui)
app.use(router)
app.mount('#app')
