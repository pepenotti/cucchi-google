import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '813199741419-hpsotj1pcfnc49e66ieso77u603mmvp8'
})

app.mount('#app')
