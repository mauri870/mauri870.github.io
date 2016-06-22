// Import default styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import Site from './Site'

/* eslint-disable no-new */
var app = new Vue({components: { Site }})

app.$mount('body')
