<template>
  <div class="page-container">
    <div class="welcome-container">
      <!-- Barra de navegación en la parte superior derecha -->
      <div class="nav-bar">
        <button @click="goToHome" class="nav-button animated-button">Inicio</button>
        <button @click="goToRegister" class="nav-button animated-button">Registro</button>
        <button @click="goToLogin" class="nav-button animated-button">Log in</button>
      </div>

      <!-- Título con cambio de color y desenfoque -->
      <h1 class="main-title animated-title">BIENVENIDOS A TELCOM</h1>
      <h2 class="subtitle">Telas al mayor y por menor, tu mejor opción</h2>

      <!-- Logo con animación de pulso constante -->
      <img :src="require('@/assets/telcom-logo.webp')" alt="Logo Telcom" class="logo pulse-logo" />

      <!-- Texto centrado -->
      <p class="intro-text centered-text">
        En TELCOM, ofrecemos una amplia variedad de telas de alta calidad para
        satisfacer todas tus necesidades. Encuentra colores, texturas y estilos
        únicos para cualquier proyecto.
      </p>

      <div class="image-gallery">
        <img :src="require('@/assets/IMAGENUNO.jpg')" alt="Imagen 1" />
        <img :src="require('@/assets/IMAGENDOS.jpg')" alt="Imagen 2" />
        <img :src="require('@/assets/IMAGENTRES.jpg')" alt="Imagen 3" />
      </div>

      <button @click="exploreCatalog" class="explore-button animated-button">Explorar Telas</button>

      <!-- Sección de información de la empresa -->
      <section class="company-info">
        <h3>Historia de la Empresa</h3>
        <p>
          TELCOM fue fundada en 1985 con la visión de convertirse en el proveedor
          líder de telas de calidad en el mercado nacional. A lo largo de los
          años, hemos ampliado nuestra oferta y nos hemos adaptado a las
          tendencias, proporcionando a nuestros clientes telas innovadoras y de
          alta calidad. Desde nuestros inicios en una pequeña tienda, hoy TELCOM
          cuenta con una red de distribución en toda la región y es reconocida por
          su compromiso con la calidad y la satisfacción del cliente.
        </p>
        <h3>Misión y Visión</h3>
        <p>
          Proveer telas de la más alta calidad que satisfagan las necesidades y
          expectativas de nuestros clientes, ofreciendo variedad, innovación y un
          servicio excepcional. Nos esforzamos por ser un referente de confianza
          en la industria textil.
        </p>
        <p>
          Visión: Consolidarnos como la empresa líder en la distribución de telas
          en América Latina, promoviendo el crecimiento sostenible y expandiendo
          nuestra presencia en el mercado internacional, mientras seguimos
          comprometidos con la calidad y la satisfacción de nuestros clientes.
        </p>
      </section>

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
        <div class="social-links">
          <button class="facebook">Facebook</button>
          <button class="instagram">Instagram</button>
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
        <a href="https://wa.me/59160371640" class="whatsapp-button">
          <img :src="require('@/assets/wapplogo.webp')" alt="WhatsApp" /> Contáctanos por WhatsApp
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      formSubmitted: false,
    };
  },
  methods: {
    exploreCatalog() {
      this.$router.push("/telas");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToRegister() {
      this.$router.push("/register");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    submitForm() {
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000); // Oculta el mensaje después de 3 segundos
    },
  },
};
</script>

<style scoped>
/* Fondo en los laterales */
.page-container {
  background: url('@/assets/texture.jpg') repeat-y center center;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.welcome-container {
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
}

/* Animación de cambio de color con desenfoque para el título */
.animated-title {
  font-size: 2rem;
  font-weight: bold;
  transition: color 0.3s ease, filter 0.3s ease;
}
.animated-title:hover {
  color: #555;
  filter: blur(1px);
}

/* Logo con animación de pulso constante */
.pulse-logo {
  width: 180px;
  margin: 20px auto;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Centrado del texto de introducción */
.centered-text {
  text-align: center;
  margin: 0 auto;
}

/* Animación para botones al pasar el mouse */
.animated-button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.animated-button:hover {
  background-color: #555;
  transform: scale(1.05);
}

/* Barra de navegación */
.nav-bar {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.nav-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

/* Resto de los estilos */
.subtitle {
  font-size: 1.5rem;
  margin-top: 5px;
}

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
}

.explore-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
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

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
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
