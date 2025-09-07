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
import * as Sentry from '@sentry/vue'

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

Sentry.init({
  app,
  dsn: 'https://98d57d92a60af10500dc2eb21acfea24@o4509977674711040.ingest.de.sentry.io/4509977694502992',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
})

app.mount('#app')
