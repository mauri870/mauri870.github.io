// Import default styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import Site from './Site'
import store from './store'
import router from './router'
import './filters'

Vue.config.productionTip = false

import {initAnalytics} from './utils/analytics'

initAnalytics('UA-79904458-1')

/* eslint-disable no-new */
var site = new Vue({ store, router, render: h => h(Site) })

site.$mount('site')

