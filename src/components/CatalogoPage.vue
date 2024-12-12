<template> 
  <div class="catalogo-container">
    <!-- Título principal -->
    <h1 class="main-title gradient-shift centered-text">Catálogo de Telcom</h1>
    <p class="intro-text centered-text styled-intro">
      Explora nuestro catálogo de telas de alta calidad. Encuentra colores, texturas y estilos únicos para cualquier proyecto.
    </p>

    <!-- Galería de productos -->
    <div class="product-gallery">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <img :src="require(`@/assets/${product.image}`)" :alt="`Producto ${index + 1}`" class="product-image" />
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Bs {{ product.price }} por {{ product.meters }} metros</p>

        <!-- Selector de color -->
        <div class="color-selection">
          <label for="color">Selecciona un color:</label>
          <select v-model="product.selectedColor">
            <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
          </select>
        </div>

        <div class="quantity-control">
          <button class="quantity-button" @click="updateQuantity(index, -1)" :disabled="!isInCart(index)">-</button>
          <span class="quantity">{{ getQuantity(index) }}</span>
          <button class="quantity-button" @click="updateQuantity(index, 1)">+</button>
        </div>
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
            <img :src="require(`@/assets/${item.image}`)" alt="Imagen del producto" class="cart-item-thumbnail" />
            <span class="cart-item-info">{{ item.description }} - {{ item.selectedColor }} - Bs {{ item.price }} por {{ item.meters }} metros (x{{ item.quantity }})</span>
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
          <p v-if="purchaseConfirmed" class="purchase-confirmation">Compra realizada con éxito.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import { db } from "@/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "CatalogoPage",
  data() {
    return {
      products: [
        { image: "producto1.png", price: 85, meters: 3, description: "Tela de algodón, suave al tacto, ideal para prendas casuales.", selectedColor: "" },
        { image: "producto2.avif", price: 70, meters: 2, description: "Lana pura, cálida y confortable, perfecta para abrigos.", selectedColor: "" },
        { image: "producto3.webp", price: 95, meters: 5, description: "Seda natural, elegante y ligera, adecuada para vestidos de noche.", selectedColor: "" },
        { image: "producto4.avif", price: 80, meters: 4, description: "Poliéster resistente, versátil para uso industrial y decorativo.", selectedColor: "" },
        { image: "producto5.png", price: 100, meters: 6, description: "Lino fresco y ligero, excelente para ropa de verano.", selectedColor: "" },
        { image: "producto6.jpg", price: 75, meters: 3, description: "Franela acogedora, ideal para mantas y ropa de invierno.", selectedColor: "" },
        { image: "producto7.webp", price: 90, meters: 2, description: "Tul delicado, utilizado en decoraciones y confecciones creativas.", selectedColor: "" },
        { image: "producto8.jpg", price: 88, meters: 4, description: "Gamuza resistente, perfecta para tapicería y bolsos.", selectedColor: "" },
        { image: "producto9.webp", price: 93, meters: 5, description: "Terciopelo lujoso, recomendado para proyectos de alta gama.", selectedColor: "" },
      ],
      colors: ["Rojo", "Amarillo", "Verde", "Azul", "Morado", "Café", "Negro", "Blanco", "Naranja"],
      cart: [],
      customerName: "",
      customerNIT: "",
      customerPhone: "",
      purchaseConfirmed: false,
    };
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    isInCart(index) {
      return this.cart.some((item) => item.image === this.products[index].image);
    },
    getQuantity(index) {
      const productInCart = this.cart.find((item) => item.image === this.products[index].image);
      return productInCart ? productInCart.quantity : 0;
    },
    updateQuantity(index, amount) {
      const product = this.products[index];
      const productInCart = this.cart.find((item) => item.image === product.image);
      if (productInCart) {
        productInCart.quantity += amount;
        if (productInCart.quantity <= 0) {
          this.cart = this.cart.filter((item) => item.image !== product.image);
        }
      } else if (amount > 0) {
        this.cart.push({ ...product, quantity: 1, selectedColor: product.selectedColor });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    async savePurchaseToFirestore() {
      try {
        const purchaseData = {
          customerName: this.customerName,
          customerNIT: this.customerNIT,
          customerPhone: this.customerPhone,
          cart: this.cart,
          total: this.total,
          timestamp: new Date(),
        };
        await addDoc(collection(db, "purchases"), purchaseData);
        console.log("Datos guardados en Firestore");
      } catch (error) {
        console.error("Error al guardar los datos en Firestore: ", error);
      }
    },
    generateInvoice() {
      const doc = new jsPDF();
      const logo = new Image();
      logo.src = require('@/assets/telcom-logo.webp');
      doc.addImage(logo, "WEBP", 20, 10, 40, 40);

      doc.setFontSize(16);
      doc.text("Factura - Telcom Fabric Store", 70, 20);
      doc.setFontSize(12);
      doc.text("Dirección: La Paz, Av. 14 de Septiembre N° 4807", 70, 30);
      doc.text("Teléfono: +591 60371640", 70, 40);
      doc.text("Correo: info@telcomfabricstore.com", 70, 50);

      doc.text(`Nombre: ${this.customerName}`, 20, 70);
      doc.text(`NIT: ${this.customerNIT}`, 20, 80);
      doc.text(`Teléfono: ${this.customerPhone}`, 20, 90);

      let startY = 110;
      doc.text("Productos adquiridos:", 20, startY);
      startY += 10;

      this.cart.forEach((item, index) => {
        doc.text(
          `${index + 1}. ${item.description} - ${item.selectedColor} - Bs ${item.price} x ${item.quantity} = Bs ${item.price * item.quantity}`,
          20,
          startY
        );
        startY += 10;
      });

      doc.text(`Total: Bs ${this.total}`, 20, startY + 10);
      doc.save(`Factura_${this.customerName || "Cliente"}.pdf`);
    },
    async completePurchase() {
      await this.savePurchaseToFirestore();
      this.generateInvoice();
      this.purchaseConfirmed = true;
      setTimeout(() => {
        this.purchaseConfirmed = false;
      }, 5000);
      this.cart = [];
      this.customerName = "";
      this.customerNIT = "";
      this.customerPhone = "";
    },
  },
};
</script>

<style scoped>
.centered-text {
  text-align: center;
}

.styled-intro {
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
}

.main-title {
  font-size: 2.5rem;
  color: #333;
  font-weight: bold;
  margin: 20px 0;
  text-transform: uppercase;
  font-family: 'Georgia', serif;
}

.product-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-top: 5px;
}

.color-selection {
  margin-top: 10px;
  font-size: 0.9rem;
}

.color-selection select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.quantity {
  font-size: 1rem;
  font-weight: bold;
}

.quantity-button {
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
}

.quantity-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.cart-item-thumbnail {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.purchase-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.purchase-button {
  padding: 10px;
  font-size: 1.2rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.purchase-button:hover {
  background-color: #555;
}

.invoice-button {
  margin-top: 20px;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.invoice-button:hover {
  background-color: #0056b3;
}

.purchase-confirmation {
  margin-top: 15px;
  color: green;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
}
</style>
