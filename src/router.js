import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from './pages/index.vue'
import NotFoundPage from './pages/404.vue'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: IndexPage
  },

  // Catch 404
  '*': {
    component: NotFoundPage
  }
})

export default router
