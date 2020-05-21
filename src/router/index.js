import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/pages/index.vue';
import NotFound from '@/pages/404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '*', name: 'notfound', component: NotFound },
  ],
});

export default router;
