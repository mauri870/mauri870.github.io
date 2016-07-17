// Import default styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import Site from './Site'
import store from './store'
import './filters'

import {initAnalytics} from './utils/analytics'

initAnalytics('UA-79904458-1')

var site = new Vue({ store, render: h => h(Site) })

site.$mount('site')
