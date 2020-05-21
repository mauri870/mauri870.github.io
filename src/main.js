import Vue from 'vue';
import Site from '@/site';
import store from '@/store';
import router from '@/router';
import { initAnalytics } from './utils/analytics';
import './filters';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

initAnalytics('UA-79904458-1');

Vue.config.productionTip = false;

const site = new Vue({ store, router, render: (h) => h(Site) });
site.$mount('site');
