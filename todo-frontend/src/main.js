import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import axios from  'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {store} from './store/store'

Vue.prototype.$http = axios

Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.filter('snippet', function (value) {
  return value.slice(0,100) + '...';
})

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})