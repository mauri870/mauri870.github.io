import Vue from 'vue'
import Site from './Site'
import store from './store'
import router from './router'
import './filters'
import './i18n'

import {initAnalytics} from './utils/analytics'

initAnalytics('UA-79904458-1')

var site = new Vue({ store, router, render: h => h(Site) })

site.$mount('site')
