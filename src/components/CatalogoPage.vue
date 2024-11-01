<template>
    <div class="catalogo-container">
      <!-- Barra de navegación con botones animados -->
      <div class="nav-bar">
        <button @click="goToHome" class="nav-button animated-button">Inicio</button>
        <button @click="goToProductos" class="nav-button animated-button">Productos</button>
        <button @click="goToContacto" class="nav-button animated-button">Contacto</button>
      </div>
  
      <!-- Título principal con efecto de gradiente -->
      <h1 class="main-title gradient-shift">Catálogo de Telcom</h1>
      <p class="intro-text centered-text">
        Explora nuestro catálogo de telas de alta calidad. Encuentra colores, texturas y estilos únicos para cualquier proyecto.
      </p>
  
      <!-- Galería de productos en cuadrícula de 3 columnas con imágenes de tamaño uniforme -->
      <div class="product-gallery">
        <div class="product-item" v-for="(product, index) in products" :key="index">
          <img :src="require(`@/assets/${product.image}`)" :alt="`Producto ${index + 1}`" />
          <p class="product-price">Bs {{ product.price }}</p>
          <button class="add-to-cart-button">Agregar al carrito</button>
        </div>
      </div>
  
      <!-- Sección de Descripción -->
      <section class="section-container">
        <h2 class="section-title">Descripción</h2>
        <p class="section-text">
          Este catálogo muestra nuestra variedad de telas disponibles para diversos proyectos creativos. Desde telas suaves y ligeras hasta opciones resistentes y duraderas.
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
    name: "CatalogoPage",
    data() {
      return {
        products: [
          { image: "producto1.png", price: 85 },
          { image: "producto2.avif", price: 70 },
          { image: "producto3.webp", price: 95 },
          { image: "producto4.avif", price: 80 },
          { image: "producto5.png", price: 100 },
          { image: "producto6.jpg", price: 75 },
          { image: "producto7.webp", price: 90 },
          { image: "producto8.jpg", price: 88 },
          { image: "producto9.webp", price: 93 },
        ],
      };
    },
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToProductos() {
        this.$router.push("/productos");
      },
      goToContacto() {
        window.open("https://wa.me/59160371640", "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .catalogo-container {
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
  
  /* Galería de productos en cuadrícula de 3 columnas */
  .product-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 20px auto;
    max-width: 800px;
  }
  
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-gallery img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .product-gallery img:hover {
    transform: scale(1.1);
  }
  
  /* Precio del producto */
  .product-price {
    font-size: 1.2rem;
    color: #333;
    margin: 10px 0;
    font-weight: bold;
  }
  
  /* Botón de agregar al carrito */
  .add-to-cart-button {
    background-color: #ff7e5f;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .add-to-cart-button:hover {
    background-color: #feb47b;
    transform: scale(1.05);
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
  