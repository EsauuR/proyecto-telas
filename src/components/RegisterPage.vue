<template>
  <div class="register-page">
    <div class="register-container">
      <div class="header">
        <img :src="require('@/assets/telcom-logo.webp')" alt="Logo Telcom" class="logo" />
        <h1 class="system-name">Telcom</h1>
      </div>
      <h2 class="register-title">Crear Cuenta</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required />
        </div>
        <button type="submit" class="register-button">Registrarse</button>
      </form>
      <p v-if="registerError" class="error-message">{{ registerError }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from "@/firebase/firebaseAuthService";

export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      registerError: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        await registerUser(this.email, this.password);
        alert("Cuenta creada exitosamente");
        this.$router.push("/login");
      } catch (error) {
        this.registerError = error.message;
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: black;
  padding-top: 50px;
}

.register-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px; /* Reducido para acercar logo y título */
}

.logo {
  width: 70px;
  margin-bottom: 5px; /* Reducido para menor espacio */
}

.system-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
}

.register-title {
  font-size: 1.4rem;
  color: #374151;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 8px;
  text-align: left;
}

.input-group label {
  font-weight: bold;
  color: #374151;
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

.register-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #333;
}

.error-message {
  color: red;
  margin-top: 8px;
  font-size: 0.85rem;
}
</style>
