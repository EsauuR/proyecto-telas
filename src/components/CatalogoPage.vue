<template>
  <div class="catalogo-container">
    <!-- Barra de navegación -->
    <nav class="nav-bar">
      <ul class="nav-list">
        <li class="nav-item" @click="goToHome">Inicio</li>
        <li class="nav-item" @click="goToProductos">Productos</li>
        <li class="nav-item" @click="goToContacto">Contacto</li>
      </ul>
    </nav>

    <!-- Título principal -->
    <h1 class="main-title gradient-shift">Catálogo de Telcom</h1>
    <p class="intro-text centered-text">
      Explora nuestro catálogo de telas de alta calidad. Encuentra colores, texturas y estilos únicos para cualquier proyecto.
    </p>

    <!-- Galería de productos -->
    <div class="product-gallery">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <img :src="require(`@/assets/${product.image}`)" :alt="`Producto ${index + 1}`" />
        <p class="product-price">Bs {{ product.price }}</p>
        <button
          class="add-to-cart-button"
          :class="{ 'in-cart': isInCart(index) }"
          @click="toggleCart(index)"
        >
          {{ isInCart(index) ? "Quitar del carrito" : "Agregar al carrito" }}
        </button>
      </div>
    </div>

    <!-- Carrito y formulario -->
    <section class="cart-section">
      <h2 class="section-title">Carrito</h2>
      <div v-if="cart.length === 0" class="empty-cart">
        <p>No hay productos en el carrito.</p>
      </div>
      <div v-else>
        <ul class="cart-list">
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <img :src="require(`@/assets/${item.image}`)" alt="Imagen del producto" class="cart-item-img" />
            <span class="cart-item-info">{{ item.image }} - Bs {{ item.price }}</span>
            <button @click="removeFromCart(index)" class="remove-item-button">Eliminar</button>
          </li>
        </ul>
        <div class="summary">
          <h3>Total: Bs {{ total }}</h3>
          <form @submit.prevent="completePurchase" class="purchase-form">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                v-model="customerName"
                required
                placeholder="Nombre completo"
              />
            </div>
            <div class="form-group">
              <label for="nit">NIT</label>
              <input type="text" id="nit" v-model="customerNIT" required placeholder="NIT" />
            </div>
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                v-model="customerPhone"
                required
                placeholder="Número de teléfono"
              />
            </div>
            <button type="submit" class="purchase-button">Confirmar Compra</button>
          </form>
        </div>
      </div>
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
      cart: [],
      customerName: "",
      customerNIT: "",
      customerPhone: "",
    };
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },
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
    isInCart(index) {
      return this.cart.some((item) => item.image === this.products[index].image);
    },
    toggleCart(index) {
      const product = this.products[index];
      if (this.isInCart(index)) {
        this.cart = this.cart.filter((item) => item.image !== product.image);
      } else {
        this.cart.push(product);
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    completePurchase() {
      const invoice = {
        name: this.customerName,
        nit: this.customerNIT,
        phone: this.customerPhone,
        total: this.total,
        items: this.cart,
      };
      console.log("Factura generada:", invoice);
      alert(`Compra realizada con éxito. Total: Bs ${this.total}`);
      this.cart = [];
      this.customerName = "";
      this.customerNIT = "";
      this.customerPhone = "";
    },
  },
};
</script>

<style scoped>
/* Barra de navegación */
.nav-bar {
  background-color: #333;
  padding: 10px 0;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: white;
  background-color: #444;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-item:hover {
  background-color: #555;
  transform: scale(1.05);
}

/* Productos */
.product-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

.product-item img {
  max-width: 100%;
  border-radius: 8px;
}

/* Carrito */
.cart-section {
  margin-top: 30px;
  text-align: left;
}

.cart-item-img {
  width: 50px;
}

.purchase-form input {
  width: 100%;
}
</style>
