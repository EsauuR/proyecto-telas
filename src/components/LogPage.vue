<template>
  <div class="login-page">
    <div class="login-container">
      <div class="header">
        <img :src="require('@/assets/telcom-logo.webp')" alt="Logo Telcom" class="logo" />
        <h1 class="system-name">Telcom</h1>
      </div>
      <h2 class="login-title">Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Ingresa tu correo electrónico" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" required />
        </div>
        <button type="submit" class="login-button" :disabled="isBlocked">Ingresar</button>
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
      return timeLeft > 0 ? timeLeft : 0;
    },
  },
  methods: {
    async handleLogin() {
      if (this.isBlocked) return;

      try {
        await loginUser(this.email, this.password);

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
      this.blockEndTime = Date.now() + 60000;
      localStorage.setItem("blockEndTime", this.blockEndTime);
      this.startTimer();
    },
    startTimer() {
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.remainingTime <= 0) {
          this.unblockUser();
        }
      }, 1000);
    },
    unblockUser() {
      clearInterval(this.timer);
      this.isBlocked = false;
      this.blockEndTime = null;
      this.failedAttempts = 0;
      this.errorMessage = "";
      localStorage.removeItem("blockEndTime");
      localStorage.removeItem("failedAttempts");
    },
  },
  mounted() {
    const storedBlockEndTime = localStorage.getItem("blockEndTime");
    const storedFailedAttempts = localStorage.getItem("failedAttempts");

    if (storedBlockEndTime && Date.now() < storedBlockEndTime) {
      this.blockEndTime = parseInt(storedBlockEndTime, 10);
      this.isBlocked = true;
      this.startTimer();
    }

    if (storedFailedAttempts) {
      this.failedAttempts = parseInt(storedFailedAttempts, 10);
    }
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: black; /* Fondo negro */
  padding-top: 50px;
}

.login-container {
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
  margin-bottom: 0; /* Elimina espacio inferior */
}

.logo {
  width: 70px;
  margin: 0; /* Elimina márgenes */
  padding: 0; /* Elimina cualquier relleno */
}

.system-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-top: -5px; /* Ajusta la separación entre logo y texto */
}

.login-title {
  font-size: 1.4rem;
  color: #374151;
  margin-bottom: 15px; /* Reducido */
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

.login-button {
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

.login-button:hover {
  background-color: #333;
}

.login-button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 8px;
  font-size: 0.85rem;
}

.block-message {
  color: #555;
  margin-top: 8px;
  font-size: 0.85rem;
}
</style>
