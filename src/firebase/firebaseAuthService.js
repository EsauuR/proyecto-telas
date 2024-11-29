  // Importar las funciones necesarias de Firebase
  import { initializeApp } from "firebase/app";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

  // Configuración de Firebase (utilizando los datos que proporcionaste)
  const firebaseConfig = {
    apiKey: "AIzaSyC7d0Tb1RqLOGowlWR3VLuE8Vr-V51xjFc",
    authDomain: "telcom-9f5fa.firebaseapp.com",
    projectId: "telcom-9f5fa",
    storageBucket: "telcom-9f5fa.firebasestorage.app",
    messagingSenderId: "437153411584",
    appId: "1:437153411584:web:d12b629ba853b912d91ee5",
    measurementId: "G-5DW5KB9KPZ"
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);

  // Obtener la instancia de autenticación
  const auth = getAuth(app);

  // Función para iniciar sesión
  export const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Función para registrar un nuevo usuario
  export const registerUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Función para cerrar sesión
  export const logoutUser = async () => {
    return signOut(auth);
  };

  export { auth }; // Exportar auth si necesitas usarlo en otros archivos
