import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './pages/index'
import NotFound from './pages/404'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      { path: '/', component: Index },
      { path: '*', component: NotFound }
  ]
})

export default router
