<template>
    <div class="login-container">
      <h1 class="login-title">Iniciar Sesión</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required />
        </div>
        <button type="submit" class="login-button">Ingresar</button>
      </form>
      <p v-if="loginError" class="error-message">Correo o contraseña incorrectos</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "LogPage",
    data() {
      return {
        email: "",
        password: "",
        loginError: false,
      };
    },
    methods: {
      login() {
        // Lógica de autenticación
        if (this.email === "admin@example.com" && this.password === "password") {
          alert("Inicio de sesión exitoso");
          this.$router.push("/"); // Redirigir a la página principal después de iniciar sesión
        } else {
          this.loginError = true;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .login-title {
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
  
  .login-button {
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
  
  .login-button:hover {
    background-color: #555;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  