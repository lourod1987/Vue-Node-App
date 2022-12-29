import Vue from 'vue'
// import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
// createApp(App).use(store).mount('#app')
