<template>
  <div class="page-container">
    <div class="welcome-container">
      <!-- Barra de navegación en la parte superior derecha -->
      <div class="nav-bar">
        <button @click="goToHome" class="nav-button">Inicio</button>
        <button @click="goToRegister" class="nav-button">Registro</button>
        <button @click="goToLogin" class="nav-button">Log in</button>
      </div>

      <h1 class="main-title">BIENVENIDOS A TELCOM</h1>
      <h2 class="subtitle">Telas al mayor y por menor, tu mejor opción</h2>
      <img :src="require('@/assets/telcom-logo.webp')" alt="Logo Telcom" class="logo" />

      <p class="intro-text">
        En TELCOM, ofrecemos una amplia variedad de telas de alta calidad para
        satisfacer todas tus necesidades. Encuentra colores, texturas y estilos
        únicos para cualquier proyecto.
      </p>

      <div class="image-gallery">
        <img :src="require('@/assets/IMAGENUNO.jpg')" alt="Imagen 1" />
        <img :src="require('@/assets/IMAGENDOS.jpg')" alt="Imagen 2" />
        <img :src="require('@/assets/IMAGENTRES.jpg')" alt="Imagen 3" />
      </div>

      <button @click="exploreCatalog" class="explore-button">Explorar Telas</button>

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
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo Electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
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
  text-align: center; /* Centrado general */
}

/* Barra de navegación */
.nav-bar {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.nav-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #555;
}

/* Títulos y logo */
.main-title,
.subtitle,
.logo,
.intro-text {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 5px;
}

.logo {
  width: 180px;
  margin: 20px auto;
}

.intro-text {
  font-size: 1.1rem;
  margin-top: 15px;
  max-width: 600px; /* Ancho máximo para centrar y mejorar la legibilidad */
}

/* Galería de imágenes */
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

/* Botón de exploración */
.explore-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.explore-button:hover {
  background-color: #555;
}

/* Información de la empresa y contacto */
.company-info, .contact-info {
  text-align: center;
  margin: 20px auto;
}

.contact-info form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px auto;
}

.contact-info form input, .contact-info form textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.contact-info form button {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.social-links button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
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
