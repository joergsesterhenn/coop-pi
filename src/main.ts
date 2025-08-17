import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VBtn,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VIcon,
  VImg,
  VMain,
  VProgressCircular,
  VProgressLinear,
  VRow,
  VSwitch,
} from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import App from './App.vue'
import './assets/main.css'
import { firebaseApp } from './firebase'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components: {
    VCard,
    VRow,
    VCol,
    VApp,
    VMain,
    VContainer,
    VBtn,
    VIcon,
    VImg,
    VSwitch,
    VProgressCircular,
    VProgressLinear,
    VCardText,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: { mdi },
  },
})

const app = createApp(App).use(vuetify)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.mount('#app')
