<template>
    <div class="productos-container">
      <!-- Barra de navegación con botones animados -->
      <div class="nav-bar">
        <button @click="goToHome" class="nav-button animated-button">Inicio</button>
        <button @click="goToCatalog" class="nav-button animated-button">Catálogo</button>
        <button @click="goToContacto" class="nav-button animated-button">Contacto</button>
      </div>
  
      <!-- Título principal con efecto de gradiente -->
      <h1 class="main-title gradient-shift">Productos de Telcom</h1>
      <p class="intro-text centered-text">
        Explora nuestra amplia variedad de telas de alta calidad. Encuentra colores, texturas y estilos únicos para cualquier proyecto.
      </p>
  
      <!-- Galería de productos -->
      <div class="product-gallery">
        <img :src="require('@/assets/producto1.png')" alt="Producto 1" />
        <img :src="require('@/assets/producto2.avif')" alt="Producto 2" />
        <img :src="require('@/assets/producto3.webp')" alt="Producto 3" />
      </div>
  
      <!-- Sección de Descripción -->
      <section class="section-container">
        <h2 class="section-title">Descripción</h2>
        <p class="section-text">
          Telcom ofrece una amplia variedad de telas, desde sedas suaves y ligeras hasta algodones resistentes y duraderos. Nuestra selección incluye diferentes colores, texturas y estilos que se adaptan a cualquier proyecto creativo. Disponemos de telas para decoración, moda, y uso industrial.
        </p>
      </section>
  
      <!-- Sección de Ventajas Competitivas -->
      <section class="section-container">
        <h2 class="section-title">Ventajas Competitivas</h2>
        <ul class="advantages-list">
          <li>Calidad superior en todos nuestros productos</li>
          <li>Amplia variedad de estilos y texturas</li>
          <li>Disponibilidad de telas exclusivas y únicas</li>
          <li>Atención personalizada y asesoría en selección de telas</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductosPage",
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToCatalog() {
        // Lógica para ir a una sección específica de catálogo
      },
      goToContacto() {
        // Lógica para ir a la página de contacto
      },
    },
  };
  </script>
  
  <style scoped>
  .productos-container {
    text-align: center;
    padding: 20px;
  }
  
  /* Estilo y animación para la barra de navegación */
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
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .nav-button:hover {
    background-color: #555;
    transform: scale(1.05);
  }
  
  /* Efecto de gradiente para el título principal */
  .main-title {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7e5f, #feb47b, #ff7e5f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 3s infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  /* Galería de productos */
  .product-gallery {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px auto;
  }
  
  .product-gallery img {
    width: 200px;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .product-gallery img:hover {
    transform: scale(1.1);
  }
  
  /* Sección de Descripción y Ventajas Competitivas */
  .section-container {
    margin-top: 30px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .section-text {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
  }
  
  .advantages-list {
    text-align: left;
    list-style-type: disc;
    margin: 0;
    padding: 0;
    padding-left: 20px;
    font-size: 1rem;
    color: #333;
  }
  
  .advantages-list li {
    margin-bottom: 8px;
  }
  </style>
  