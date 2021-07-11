<template>
  <div class="product-tabs">
    <span
      class="tab"
      :class="{ active: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
      >{{ tab }}
    </span>

    <div class="reviews" v-show="selectedTab === 'Reviews'">
      <h3>Reviews:</h3>
      <h4 v-if="!reviews.length" style="color:red">There are no reviews yet</h4>
      <div class="review" v-for="(review, index) in reviews" :key="index">
        <p>{{ review.rating }} stars from {{ review.name }}</p>
        <p style="font-style:italic;">"{{ review.review }}"</p>
        ------------------
      </div>
    </div>

    <ProductReviews v-show="selectedTab === 'Make a Review'" />
  </div>
</template>

<script>
import ProductReviews from "../components/ProductReviews.vue";
export default {
  name: "ProductTabs",
  components: {
    ProductReviews,
  },
  props: {
    reviews: {
      type: Array,
      default() {
        return {
          reviews: [],
        };
      },
    },
  },
  data() {
    return {
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews",
    };
  },
};
</script>

<style scoped src="../assets/styles/components/ProductTabs.css"></style>
