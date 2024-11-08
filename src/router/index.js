import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import ProductosPage from '@/components/ProductosPage.vue';
import CatalogoPage from '@/components/CatalogoPage.vue';
import LogPage from '@/components/LogPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import { auth } from '@/firebase/firebaseAuthService';

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
    meta: { requiresAuth: true },
  },
  {
    path: '/catalogo',
    name: 'CatalogoPage',
    component: CatalogoPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'LogPage',
    component: LogPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Espera el estado de autenticación antes de redirigir
  auth.onAuthStateChanged((user) => {
    if (requiresAuth && !user) {
      next('/login');
    } else {
      next();
    }
  });
});

export default router;
