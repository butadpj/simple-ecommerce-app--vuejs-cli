<template>
  <div class="navbar">
    <h2 class="title">Simple Ecommerce App</h2>
    <div class="cart-info">
      <span class="material-icons-outlined"> shopping_cart </span>
      <div class="cart-count">{{ cartCount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    cartCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped src="../assets/styles/components/Navbar.css"></style>
