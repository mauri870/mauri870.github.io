import { createApp } from 'vue';
import Site from '@/site';
import store from '@/store';
import router from '@/router';
import utils from '@/utils';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

(() => {
  utils.initAnalytics('UA-79904458-1');

  if (window.location.href === 'https://mauri870.github.io') {
    window.location.href = 'https:/mauri870.com';
    return;
  }

  const site = createApp(Site);
  site.use(store);
  site.use(router);
  site.mount('site');
})();
