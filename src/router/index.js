import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import VistaTelas from '@/components/VistaTelas.vue';

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage,
  },
  {
    path: '/telas',
    name: 'VistaTelas',
    component: VistaTelas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
