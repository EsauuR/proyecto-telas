<template>
  <div class="carousel-container">
    <div class="carousel-image" :style="{ backgroundImage: `url(${images[currentIndex]})` }"></div>
    <button @click="prevImage" class="carousel-btn prev-btn">‹</button>
    <button @click="nextImage" class="carousel-btn next-btn">›</button>
  </div>
</template>

<script>
export default {
  name: "ImageCarousel",
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/IMAGENUNO.jpg'),
        require('@/assets/IMAGENDOS.jpg'),
        require('@/assets/IMAGENTRES.jpg')
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startCarousel() {
      this.interval = setInterval(this.nextImage, 3000); // Cambia de imagen cada 3 segundos
    },
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() { // Cambiado de beforeDestroy a beforeUnmount
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 50%;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
