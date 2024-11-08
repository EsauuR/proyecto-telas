// Importa solo las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7d0Tb1RqLOGowlWR3VLuE8Vr-V51xjFc",
  authDomain: "telcom-9f5fa.firebaseapp.com",
  projectId: "telcom-9f5fa",
  storageBucket: "telcom-9f5fa.appspot.com",  // Asegúrate de usar el dominio de storage correcto
  messagingSenderId: "437153411584",
  appId: "1:437153411584:web:d12b629ba853b912d91ee5",
  measurementId: "G-5DW5KB9KPZ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de autenticación
export const auth = getAuth(app);
export default app;
