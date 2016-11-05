import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export const routes = [
  {path: '/', component: Home},
  {path: '/foo', component: Foo},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
