// Import default styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import Site from './Site'
import store from './store'
import {initAnalytics} from './utils/analytics'
import router from './router'
import logger from './utils/logger'

logger.init()

initAnalytics('UA-79904458-1')

logger.log('GA script loaded')

var app = Vue.extend({store, components: {Site}})

logger.log('Main component started')

router.start(app, 'body')

logger.log('Booted router and nested components. Enjoy ;)')
