<template>
  <div>
    <h3>Add a Review</h3>
    <br />
    <form @submit.prevent="onSubmit()">
      <p>
        <label for="name">Name</label>
        <input v-model="name" required />
      </p>

      <p>
        <label for="review">Review</label>
        <textarea id="review" v-model="review" required></textarea>
      </p>

      <p>
        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating" required>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <button type="submit" class="button">Submit</button>
    </form>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  name: "ProductReviews",
  data() {
    return {
      name: null,
      review: null,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      EventBus.$emit("reviewSubmitted", productReview);
      this.name = null;
      this.review = null;
      this.rating = null;
    },
  },
};
</script>
