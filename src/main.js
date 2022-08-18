import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';
import axios from 'axios'
import {appAxios} from "./utils/appAxios"
import { library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import store from './store';
import appHeader from './components/Common/appHeader'

library.add(fas)

const app = createApp(App);
app.component("appHeader",appHeader)
app.use(router)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;
app.use(store)
app.mount('#app')
app.component("fa",FontAwesomeIcon)
