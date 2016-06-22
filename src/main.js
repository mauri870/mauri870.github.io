// Import default styles
import '../bower_components/fakeLoader/fakeLoader.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import $ from 'jquery'
import Vue from 'vue'
import Site from './Site'

import '../bower_components/fakeLoader/fakeLoader.min'

/* eslint-disable no-new */
var app = new Vue({
  init () {
    // Init Fakeloader
    $('#fakeLoader').fakeLoader({spinner: 'spinner1', bgColor: '#1ABC9C'})
     // Init tooltips
    $(document).ready(() => { $('[data-toggle="tooltip"]').tooltip() })
  },
  components: { Site }
})

app.$mount('body')
