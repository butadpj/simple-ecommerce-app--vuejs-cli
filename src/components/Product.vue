<template>
  <div class="product">
    <img class="product-img" :src="image" :alt="name" />
    <div class="product-info">
      <h2 class="name">{{ brand }} {{ name }}</h2>
      <div v-if="inventory >= 10" class="stock-status in-stock">
        <p>In Stock</p>
      </div>
      <p
        v-else-if="inventory <= 5 && inventory > 0"
        class="stock-status almost-sold-out"
      >
        Almost Sold Out
      </p>
      <p v-else class="stock-status out-of-stock">Out of Stock</p>

      <ul class="details">
        <li>Original</li>
        <li>Good Quality</li>
        <li>Durable</li>
      </ul>

      <div class="variants">
        <div class="color-variant">
          <h3>Colors:</h3>
          <div class="colors">
            <div
              v-for="color in variants.colors"
              :key="color.id"
              @mouseover="
                emitUpdateProduct(
                  id,
                  color.variantImage,
                  color.variantInventory
                )
              "
              :style="{ backgroundColor: color.name }"
            ></div>
          </div>
        </div>
      </div>

      <button
        @click="emitUpdateCart(id, 'add')"
        type="button"
        class="button"
        :class="{ disabled: !isInStock }"
        :disabled="!isInStock"
      >
        Add To Cart
      </button>

      <button
        v-if="isProductInCart"
        @click="emitUpdateCart(id, 'remove')"
        type="button"
        class="button"
      >
        Delete from Cart
      </button>

      <ProductTabs :reviews="reviews" />
    </div>
  </div>
</template>

<script>
import ProductTabs from "../components/ProductTabs";
import { EventBus } from "../main";
export default {
  name: "Product",
  components: {
    ProductTabs,
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      default: "Brand X",
    },
    name: {
      type: String,
      default: "Unnamed",
    },
    image: {
      type: String,
      default: "./images/defaul.png",
    },
    inventory: {
      type: Number,
      default: 0,
    },
    variants: {
      type: Object,
      default() {
        return {
          variants: {
            colors: [],
          },
        };
      },
    },
    reviews: {
      type: Array,
      default() {
        return {
          reviews: [],
        };
      },
    },
  },
  methods: {
    emitUpdateProduct(id, image, inventory) {
      this.$emit("updateProduct", id, image, inventory);
    },
    emitUpdateCart(id, action) {
      this.$emit("updateCart", id, action);
    },
  },
  computed: {
    isInStock() {
      return this.inventory;
    },
    isProductInCart() {
      if (this.cart.includes(this.id)) return true;
      return false;
    },
  },
  mounted() {
    EventBus.$on("reviewSubmitted", (productReview) => {
      this.reviews.push(productReview);
    });
  },
};
</script>

<style scoped src="../assets/styles/components/Product.css"></style>
