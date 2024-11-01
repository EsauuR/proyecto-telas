import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import ProductosPage from '@/components/ProductosPage.vue';
import CatalogoPage from '@/components/CatalogoPage.vue';
import LogPage from '@/components/LogPage.vue'; // Asegúrate de que esta línea esté presente

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage,
  },
  {
    path: '/productos',
    name: 'ProductosPage',
    component: ProductosPage,
  },
  {
    path: '/catalogo',
    name: 'CatalogoPage',
    component: CatalogoPage,
  },
  {
    path: '/login',
    name: 'LogPage',
    component: LogPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
