import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import VistaTelas from '@/components/VistaTelas.vue';
import ProductosPage from '@/components/ProductosPage.vue'; // Importa el componente de ProductosPage

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
  {
    path: '/productos',
    name: 'ProductosPage',
    component: ProductosPage, // Configura la ruta para el componente ProductosPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
