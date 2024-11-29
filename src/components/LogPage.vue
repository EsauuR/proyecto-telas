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
        <button type="submit" class="login-button" :disabled="isBlocked">Ingresar</button>
        <!-- Mensajes de error y bloqueo -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="isBlocked" class="block-message">
          Has alcanzado el límite de intentos. Intenta nuevamente en {{ remainingTime }} segundos.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from "@/firebase/firebaseAuthService";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      isBlocked: false,
      blockEndTime: null,
      failedAttempts: 0,
      timer: null,
    };
  },
  computed: {
    remainingTime() {
      if (!this.blockEndTime) return 0;
      const now = Date.now();
      const timeLeft = Math.ceil((this.blockEndTime - now) / 1000);
      return timeLeft > 0 ? timeLeft : 0; // Asegurar que el tiempo restante no sea negativo
    },
  },
  methods: {
    async handleLogin() {
      if (this.isBlocked) return;

      try {
        await loginUser(this.email, this.password);

        // Restablecer intentos fallidos al iniciar sesión con éxito
        this.failedAttempts = 0;
        localStorage.removeItem("failedAttempts");
        localStorage.removeItem("blockEndTime");

        this.$emit("authenticated");
        this.$router.push("/");
      } catch (error) {
        this.failedAttempts += 1;
        localStorage.setItem("failedAttempts", this.failedAttempts);

        if (this.failedAttempts >= 3) {
          this.blockUser();
        } else {
          this.errorMessage =
            "Credenciales incorrectas. Por favor, verifica tu correo y contraseña.";
        }
      }
    },
    blockUser() {
      this.isBlocked = true;
      this.blockEndTime = Date.now() + 60000; // Bloqueo por 60 segundos
      localStorage.setItem("blockEndTime", this.blockEndTime);

      // Configurar temporizador para actualizar la cuenta regresiva cada segundo
      this.startTimer();
    },
    startTimer() {
      if (this.timer) clearInterval(this.timer); // Limpiar cualquier temporizador previo
      this.timer = setInterval(() => {
        if (this.remainingTime <= 0) {
          this.unblockUser();
        }
      }, 1000); // Actualizar cada segundo
    },
    unblockUser() {
      clearInterval(this.timer); // Limpiar el temporizador
      this.isBlocked = false;
      this.blockEndTime = null;
      this.failedAttempts = 0;
      this.errorMessage = ""; // Limpiar mensajes de error
      localStorage.removeItem("blockEndTime");
      localStorage.removeItem("failedAttempts");
    },
  },
  mounted() {
    // Restaurar estado desde localStorage
    const storedBlockEndTime = localStorage.getItem("blockEndTime");
    const storedFailedAttempts = localStorage.getItem("failedAttempts");

    if (storedBlockEndTime && Date.now() < storedBlockEndTime) {
      this.blockEndTime = parseInt(storedBlockEndTime, 10);
      this.isBlocked = true;

      // Configurar el temporizador si está bloqueado
      this.startTimer();
    }

    if (storedFailedAttempts) {
      this.failedAttempts = parseInt(storedFailedAttempts, 10);
    }
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer); // Limpieza al desmontar el componente
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
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.login-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
.block-message {
  color: #555;
  font-size: 14px;
  margin-top: 10px;
}
</style>
