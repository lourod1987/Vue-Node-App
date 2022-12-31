import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'

import UserMessages from './components/UserMessages'
import NewMessage from './components/NewMessage'
import UserMessage from './components/UserMessage'
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: UserMessages },
  { path: "/NewMessage", component: NewMessage },
  { path: "/Message/:id", component: UserMessage },
  { path: "/Register", component: RegisterUser },
  { path: "/Login", component: LoginUser },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
