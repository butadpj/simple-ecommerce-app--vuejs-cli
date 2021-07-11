<template>
  <div id="app">
    <Navbar :cartCount="cart.length"></Navbar>
    <main>
      <hr />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },
  data() {
    return {
      cart: this.$root.cart,
    };
  },
};
</script>

<style>
@import "./assets/styles/_globals.css";
</style>
