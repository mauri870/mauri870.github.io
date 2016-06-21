import $ from 'jquery'
import Vue from 'vue'
import Site from './Site'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

// Init tooltips
$(document).ready(() => { $('[data-toggle="tooltip"]').tooltip() })

/* eslint-disable no-new */
var app = new Vue({components: { Site }})

app.$mount('body')
