// Vue
import { createApp, defineAsyncComponent } from 'vue'

// Create the app
import MCFriends from '@/views/MCFriends.vue'
const app = createApp(MCFriends)

//Global Dev Variable
app.config.globalProperties.app_url = import.meta.env.DEV
    ? 'http://localhost:5173'
    : 'https://mcfriends.net'
app.config.globalProperties.api_url = import.meta.env.DEV
    ? 'http://localhost:3000'
    : 'https://api.mcfriends.net'

// Axios
import axios from 'axios'
axios.defaults.baseURL = app.config.globalProperties.api_url
axios.defaults.withCredentials = true
app.config.globalProperties.axios = axios

// Themes & Bootstrap
import './sass/app.scss'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'

// VueX
import Store from './store'
app.use(Store)

//Router
import Router from './router'
app.use(Router)

// Font Awesome
import { FontAwesomeIcon, FontAwesomeLayers } from './fontawesome'
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('FontAwesomeLayers', FontAwesomeLayers)

/**
 * Common Components
 */

// Player Model
app.component(
    'PlayerModel',
    defineAsyncComponent(() => import('@/views/partials/PlayerModel.vue'))
)

// Error
import ErrorMessage from '@/views/partials/ErrorMessage.vue'
app.component('ErrorMessage', ErrorMessage)

// Loader
import LoadingIcon from '@/views/partials/LoadingIcon.vue'
app.component('LoadingIcon', LoadingIcon)

// Mount the app
app.mount('#app')
