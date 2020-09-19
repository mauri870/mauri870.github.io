import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import NotFound from '@/pages/404.vue';

const router = createRouter({
  base: __dirname,
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/*', name: 'notfound', component: NotFound },
  ],
});

export default router;
