<template>
  <div class="page-background">
    <div class="page-container">
      <div class="welcome">
        <h1>Bienvenidos a TELCOM</h1>
        
        <img src="@/assets/telcom-logo.webp" alt="Logo de TELCOM" class="logo" />
        
        <p class="description">
          En TELCOM, ofrecemos una amplia variedad de telas de alta calidad para satisfacer todas tus necesidades. 
          Encuentra colores, texturas y estilos únicos para cualquier proyecto.
        </p>
        
        <div class="images">
          <img src="@/assets/IMAGENUNO.jpg" alt="Imagen Tela 1" class="fabric-image" />
          <img src="@/assets/IMAGENDOS.jpg" alt="Imagen Tela 2" class="fabric-image" />
          <img src="@/assets/IMAGENTRES.jpg" alt="Imagen Tela 3" class="fabric-image" />
        </div>

        <button @click="exploreCatalog" class="primary-btn">Explorar Telas</button>
        
        <div class="info-section">
          <p><strong>Teléfono:</strong> +591 60371640</p>
          <p><strong>Correo:</strong> info@telcomfabricstore.com</p>
          <div class="social-media">
            <p><strong>Síguenos:</strong></p>
            <div class="social-icons">
              <a href="https://facebook.com/telcomfabricstore" target="_blank" class="social-link">Facebook</a>
              <a href="https://instagram.com/telcomfabricstore" target="_blank" class="social-link">Instagram</a>
            </div>
          </div>
        </div>
        
        <div class="contact-button">
          <button @click="contactUs" class="secondary-btn">Contáctanos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  methods: {
    exploreCatalog() {
      // Redirige a la página de Telas
      this.$router.push("/telas");
    },
    contactUs() {
      // Abre un enlace de WhatsApp al número de contacto
      window.open("https://wa.me/59160371640", "_blank");
    },
  },
};
</script>

<style scoped>
/* Fondo oscuro para toda la página */
.page-background {
  background-color: #333; /* Color oscuro para el fondo */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0; /* Eliminamos cualquier espacio en los bordes */
  margin: 0; /* Eliminamos cualquier espacio en los bordes */
}

/* Contenedor principal con borde negro */
.page-container {
  background-color: #f5f5f5; /* Fondo crema para el cuadro central */
  border: 5px solid #000; /* Borde negro */
  border-radius: 10px; /* Esquinas redondeadas */
  padding: 20px;
  max-width: 900px;
  width: 100%;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Logo de TELCOM */
.logo {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #555;
}

.images {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.fabric-image {
  width: 200px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-section {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.info-section p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
}

.social-media {
  margin-top: 1rem;
  text-align: center;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #555;
}

/* Botón de "Explorar Telas" */
.primary-btn {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
}

.primary-btn:hover {
  background-color: #555;
}

/* Contenedor para el botón "Contáctanos" */
.contact-button {
  display: flex;
  justify-content: center;
}

.secondary-btn {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ddd;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

.secondary-btn:hover {
  background-color: #bbb;
}
</style>
