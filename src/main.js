import './assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyload)


app.mount('#app')
