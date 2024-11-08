<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-container">
        <button @click="goToHome" class="nav-button">Inicio</button>
        <button @click="goToProducts" class="nav-button">Productos</button>
        <button @click="goToCatalog" class="nav-button">Catálogo</button>
        <button v-if="!isAuthenticated" @click="goToRegister" class="nav-button">Registro</button>
        <button v-if="!isAuthenticated" @click="goToLogin" class="nav-button">Iniciar sesión</button>
        <button v-else @click="handleLogout" class="nav-button logout-button">Cerrar sesión</button>
      </div>
    </nav>
    <router-view @authenticated="handleAuthenticated" />
  </div>
</template>

<script>
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebaseAuthService';

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isAuthenticated = !!user;
      localStorage.setItem("isAuthenticated", this.isAuthenticated);
    });
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToProducts() {
      this.$router.push("/productos");
    },
    goToCatalog() {
      this.$router.push("/catalogo");
    },
    goToRegister() {
      this.$router.push("/register");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    async handleLogout() {
      await signOut(auth);
      this.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.navbar-container {
  display: flex;
  gap: 15px;
}
.nav-button {
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.logout-button:hover {
  color: red;
}
</style>
