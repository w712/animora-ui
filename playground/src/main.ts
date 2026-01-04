import { createApp } from 'vue'
import App from './App.vue'
import { AnimoraUI } from 'animora-ui'

const app = createApp(App)
app.use(AnimoraUI)
app.mount('#app')
