import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const EventBus = new Vue();

Vue.mixin({
  methods: {
    updateProduct(productId, variantImage, variantInventory) {
      let product = this.products.filter((product) => product.id === productId);
      product[0].image = variantImage;
      product[0].inventory = variantInventory;
    },
    updateCart(productId, action) {
      if (action === "add") this.cart.push(productId);
      if (action === "remove") {
        let index = this.cart.findIndex((id) => {
          return id === productId;
        });
        if (index !== -1) this.cart.splice(index);
      }
    },
    checkProductInCart(id) {
      if (this.cart.includes(id)) return true;
      return false;
    },
  },
});

new Vue({
  router,
  data: {
    cart: [],
    products: [
      {
        id: 0,
        brand: "BRO",
        name: "Headphones 2400G",
        inventory: 5,
        image: "./images/headphone-red.jpg",
        variants: {
          colors: [
            {
              id: 0,
              name: "red",
              variantInventory: 5,
              variantImage: "./images/headphone-red.jpg",
            },
            {
              id: 1,
              name: "blue",
              variantInventory: 0,
              variantImage: "./images/headphone-blue.jpg",
            },
          ],
        },
        reviews: [],
      },
      {
        id: 1,
        brand: "Sperry Boat",
        name: "Men Shoes",
        inventory: 5,
        image: "./images/shoes-red.jpg",
        variants: {
          colors: [
            {
              id: 0,
              name: "red",
              variantInventory: 10,
              variantImage: "./images/shoes-red.jpg",
            },
            {
              id: 1,
              name: "orange",
              variantInventory: 5,
              variantImage: "./images/shoes-orange.jpg",
            },
            {
              id: 2,
              name: "purple",
              variantInventory: 10,
              variantImage: "./images/shoes-purple.jpg",
            },
          ],
        },
        reviews: [],
      },
    ],
  },
  render: (h) => h(App),
}).$mount("#app");
