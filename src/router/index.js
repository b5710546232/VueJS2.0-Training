import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Maps from '../components/Maps.vue'
Vue.use(Router)

export const routes = [
  {path: '/', component: Home},
  {path: '/map', component: Maps},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
