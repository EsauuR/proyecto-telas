<template>
    <div class="register-container">
      <h1 class="register-title">Crear Cuenta</h1>
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
  </template>
  
  <script>
  import { registerUser } from "@/firebase/firebaseAuthService";
  
  export default {
    name: "RegisterPage",
    data() {
      return {
        email: "",
        password: "",
        registerError: ""
      };
    },
    methods: {
      async handleRegister() {
        try {
          await registerUser(this.email, this.password);
          alert("Cuenta creada exitosamente");
          this.$router.push("/login"); // Redirige al usuario a la página de inicio de sesión
        } catch (error) {
          this.registerError = error.message; // Muestra el mensaje de error
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .register-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .input-group label {
    font-weight: bold;
    color: #333;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
  }
  
  .register-button {
    width: 100%;
    padding: 12px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .register-button:hover {
    background-color: #555;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  