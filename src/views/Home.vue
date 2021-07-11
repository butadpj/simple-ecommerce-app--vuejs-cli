<template>
  <section class="products">
    <h2 class="title">Products</h2>
    <div v-for="product in products" :key="product.id" class="product-wrapper">
      <Product
        :cart="cart"
        :id="product.id"
        :brand="product.brand"
        :name="product.name"
        :image="product.image"
        :inventory="product.inventory"
        :variants="product.variants"
        :reviews="product.reviews"
        @updateProduct="handleUpdateProduct"
        @updateCart="handleUpdateCart"
      />
    </div>
  </section>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Home",
  components: {
    Product,
  },
  data() {
    return {
      products: this.$root.products,
      cart: this.$root.cart,
    };
  },
  methods: {
    handleUpdateProduct(id, image, inventory) {
      this.updateProduct(id, image, inventory);
    },
    handleUpdateCart(id, action) {
      this.updateCart(id, action);
      console.log(id, action);
    },
    handleStockStatus(id) {
      //   console.log(this.stockStatus(id));
      this.stockStatus(id);
    },
    handleCheckProductInCart(id) {
      console.log(this.checkProductInCart(id));
      this.checkProductInCart(id);
    },
  },
};
</script>

<style scoped src="../assets/styles/views/Home.css"></style>
