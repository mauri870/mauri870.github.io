// Import default styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import Site from './Site'
import store from './store'

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
var app = new Vue({
  store,
  components: { Site }
})

app.$mount('body')
