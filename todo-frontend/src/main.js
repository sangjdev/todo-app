import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})