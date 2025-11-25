import './assets/styles/main.css'
import './assets/styles/variables.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)   // ❗ Viktigt
  .mount('#app')
