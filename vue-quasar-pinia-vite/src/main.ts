import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Dialog, Quasar } from 'quasar'

import App from './App.vue'
import router from './router'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import '@/assets/index.scss'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)
app.use(Quasar, {
  plugins: {
    Dialog
  } // import Quasar plugins and add here
})
app.use(createPinia())
app.use(router)

app.mount('#app')
