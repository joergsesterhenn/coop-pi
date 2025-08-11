import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'

import { firebaseApp } from './firebase'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { mdi } from 'vuetify/iconsets/mdi-svg'

import {
  VCard,
  VRow,
  VCol,
  VApp,
  VContainer,
  VBtn,
  VIcon,
  VImg,
  VSwitch,
  VProgressCircular,
  VCardText,
  VProgressLinear,
} from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  components: {
    VCard,
    VRow,
    VCol,
    VApp,
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
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.mount('#app')
