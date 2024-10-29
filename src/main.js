import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router) // Asegúrate de que se use el router aquí
  .mount('#app');
