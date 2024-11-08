<template>
  <div class="login-page">
    <div class="header">
      <h1 class="system-name">Telcom</h1>
      <img :src="require('@/assets/logo.png')" alt="Logo Telcom" class="logo" />
    </div>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Ingresar</button>
        <!-- Mensaje de error en rojo debajo del formulario -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from "@/firebase/firebaseAuthService"; // Importa la función de inicio de sesión de Firebase

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // Estado para el mensaje de error
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Intenta iniciar sesión con Firebase
        await loginUser(this.email, this.password);
        
        // Autenticación exitosa: emitir evento y redirigir
        this.$emit("authenticated");
        this.$router.push("/");
      } catch (error) {
        // Mostrar mensaje de error en rojo
        this.errorMessage = "Credenciales incorrectas. Por favor, verifica tu correo y contraseña.";
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para la página de inicio de sesión */
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  justify-content: center;
  background-color: #f8f9fa;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}
.system-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}
.logo {
  width: 40px;
  height: auto;
}
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.input-group {
  margin-bottom: 15px;
  text-align: left;
}
.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
.input-group input {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.login-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login-button:hover {
  background-color: #555;
}
/* Estilos para el mensaje de error */
.error-message {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
