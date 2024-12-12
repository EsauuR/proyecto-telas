// Importa solo las funciones necesarias de Firebase
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7d0Tb1RqLOGowlWR3VLuE8Vr-V51xjFc",
  authDomain: "telcom-9f5fa.firebaseapp.com",
  projectId: "telcom-9f5fa",
  storageBucket: "telcom-9f5fa.appspot.com",
  messagingSenderId: "437153411584",
  appId: "1:437153411584:web:d12b629ba853b912d91ee5",
  measurementId: "G-5DW5KB9KPZ",
};

// Evita inicializaciones duplicadas
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializa servicios necesarios
export const auth = getAuth(app); // Autenticación
export const db = getFirestore(app); // Firestore
export const analytics = getAnalytics(app); // Analytics (opcional)

// Exporta la app inicializada
export default app;
