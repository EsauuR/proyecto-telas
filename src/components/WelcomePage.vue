<template>
  <div class="page-container">
    <div class="welcome-container">
      <!-- Título con efecto Gradient Shift -->
      <h1 class="main-title gradient-shift">BIENVENIDOS A TELCOM</h1>
      <h2 class="subtitle">Telas al mayor y por menor, tu mejor opción</h2>

      <!-- Logo con animación de pulso constante -->
      <img :src="require('@/assets/telcom-logo.webp')" alt="Logo Telcom" class="logo pulse-logo" />

      <!-- Texto centrado -->
      <p class="intro-text centered-text">
        En TELCOM, ofrecemos una amplia variedad de telas de alta calidad para satisfacer todas tus necesidades. Encuentra colores, texturas y estilos únicos para cualquier proyecto.
      </p>

      <div class="image-gallery">
        <img :src="require('@/assets/IMAGENUNO.jpg')" alt="Imagen 1" />
        <img :src="require('@/assets/IMAGENDOS.jpg')" alt="Imagen 2" />
        <img :src="require('@/assets/IMAGENTRES.jpg')" alt="Imagen 3" />
      </div>

      <!-- Botón para explorar productos -->
      <button @click="$router.push('/productos')" class="explore-button animated-button">Explorar Telas</button>

      <!-- Sección de información de la empresa -->
      <section class="company-details">
        <div class="company-info">
          <h3 class="centered-title">Historia de la Empresa</h3>
          <p>
            TELCOM fue fundada en 1985 con la visión de convertirse en el proveedor líder de telas de calidad en el mercado nacional. A lo largo de los años, hemos ampliado nuestra oferta y nos hemos adaptado a las tendencias, proporcionando a nuestros clientes telas innovadoras y de alta calidad. Desde nuestros inicios en una pequeña tienda, hoy TELCOM cuenta con una red de distribución en toda la región y es reconocida por su compromiso con la calidad y la satisfacción del cliente.
          </p>
        </div>
        <div class="company-info">
          <h3 class="centered-title">Misión y Visión</h3>
          <p>
            Proveer telas de la más alta calidad que satisfagan las necesidades y expectativas de nuestros clientes, ofreciendo variedad, innovación y un servicio excepcional. Nos esforzamos por ser un referente de confianza en la industria textil.
          </p>
          <p>
            Visión: Consolidarnos como la empresa líder en la distribución de telas en América Latina, promoviendo el crecimiento sostenible y expandiendo nuestra presencia en el mercado internacional, mientras seguimos comprometidos con la calidad y la satisfacción de nuestros clientes.
          </p>
        </div>
      </section>

      <!-- Información de contacto, redes sociales, y mapa -->
      <section class="contact-info">
        <h3>Información de Contacto</h3>
        <p>Dirección: La Paz, en la Av. 14 de Septiembre Nº 4807, esquina Calle 2, Obrajes</p>
        <p>Teléfono: +591 60371640</p>
        <p>Correo: info@telcomfabricstore.com</p>
        <h3>Formulario de Contacto</h3>
        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo Electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <p v-if="formSubmitted" class="confirmation-message">¡Mensaje enviado con éxito!</p>
        <h3>Síguenos:</h3>
        <div class="social-links centered-social-links">
          <a href="https://www.facebook.com/" target="_blank" class="facebook animated-button">
            <img :src="require('@/assets/face.webp')" alt="Facebook Logo" class="social-icon" /> Facebook
          </a>
          <a href="https://www.instagram.com/" target="_blank" class="instagram animated-button">
            <img :src="require('@/assets/insta.webp')" alt="Instagram Logo" class="social-icon" /> Instagram
          </a>
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071.296967320787!2d-68.11304831596813!3d-16.522250818931095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1730320450851!5m2!1ses-419!2sbo"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <a href="https://wa.me/59160371640" class="whatsapp-button animated-button">
          <img :src="require('@/assets/wapplogo.webp')" alt="WhatsApp" /> Contáctanos por WhatsApp
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth, logoutUser } from "@/firebase/firebaseAuthService";

export default {
  name: "WelcomePage",
  data() {
    return {
      formSubmitted: false,
      isAuthenticated: false,
    };
  },
  methods: {
    async handleLogout() {
      try {
        await logoutUser();
        this.isAuthenticated = false;
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    },
    submitForm() {
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000); // Oculta el mensaje después de 3 segundos
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isAuthenticated = !!user;
    });
  },
};
</script>

<style scoped>
/* Fondo en los laterales con animación */
.page-container {
  background: url('@/assets/texture.jpg') repeat-y center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  animation: moveBackground 15s linear infinite;
}

@keyframes moveBackground {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 100%;
  }
}

.welcome-container {
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  margin: 20px;
  text-align: center;
  position: relative;
}

/* Efecto Gradient Shift para el título */
.gradient-shift {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7e5f, #feb47b, #ff7e5f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Estilo para centrar títulos */
.centered-title {
  text-align: center;
}

/* Estilos para las secciones de Historia y Misión & Visión */
.company-details {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.company-info {
  width: 45%;
}

/* Tamaño más grande para el logo */
.pulse-logo {
  width: 220px;
  margin: 20px auto;
  animation: pulse 2s infinite;
}

/* Tamaño más grande para el botón Explorar Telas */
.explore-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Animación de zoom para las imágenes en la galería */
.image-gallery {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
}
.image-gallery img {
  width: 150px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.image-gallery img:hover {
  transform: scale(1.1);
}

/* Animación para botones al pasar el mouse */
.animated-button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.animated-button:hover {
  background-color: #555;
  transform: scale(1.05);
}

/* Centrado del texto de introducción */
.centered-text {
  text-align: center;
  margin: 0 auto;
}

/* Íconos en botones de redes sociales */
.social-links.centered-social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
.social-links .animated-button {
  display: flex;
  align-items: center;
  gap: 8px;
}
.social-icon {
  width: 20px;
  height: 20px;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 5px;
}

.company-info,
.contact-info {
  text-align: center;
  margin: 20px auto;
}

.contact-info form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px auto;
}

.confirmation-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.map-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  text-decoration: none;
  font-size: 1rem;
}

.whatsapp-button img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
