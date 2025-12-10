<script>
import { postRating } from "@/apiFunctions";

export default {
  name: "RatingInput",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    recipeId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rating: this.modelValue,
      isLocked: false,
    };
  },
  methods: {
    setRating(n) {
      if (!this.isLocked) {
        this.rating = n;
        this.isLocked = true;
        this.$emit("update:modelValue", n);
        postRating(
          `https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes/${this.recipeId}/ratings`,
          n
        );
        console.log("Rating posted, score:" + n);
      }
    },
  },
};
</script>

<template>
  <div class="rating-container">
    <div class="content-wrapper">
      <h2 v-if="!isLocked">Vad tyckte du om receptet?</h2>
      <h2 v-else>Tack för ditt betyg!</h2>
      <div class="star-rating">
        <span v-for="n in 5" :key="n" class="star" @click="setRating(n)">
          <svg
            v-if="n <= rating"
            width="34"
            height="24"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_134)">
              <path
                d="M16.4102 7.55782V9.93957C16.4102 10.7487 15.7595 11.4051 14.9574 11.4051H2.04272C1.24059 11.4051 0.589844 10.7487 0.589844 9.93957V7.2187C0.589844 6.89941 0.692076 6.59004 0.882778 6.3362L4.74204 1.17804C5.19028 0.579134 6.01404 0.418499 6.65102 0.805212L15.7064 6.30447C16.1429 6.57021 16.4102 7.04616 16.4102 7.5598V7.55782Z"
                fill="#654434" />
              <path
                d="M4.30859 0.849365C4.92388 0.0276422 6.05611 -0.193814 6.93164 0.337646L15.9873 5.83667V5.83765C16.5852 6.20167 16.9523 6.8535 16.9531 7.55737V9.93921C16.953 11.0477 16.0604 11.9499 14.957 11.95H2.04297C0.939586 11.9499 0.0469929 11.0477 0.046875 9.93921V7.21851C0.0469394 6.782 0.187672 6.35606 0.450195 6.00659L4.30859 0.849365ZM6.37012 1.27124C5.97198 1.02992 5.45694 1.1302 5.17578 1.50562L1.31641 6.66382L1.31543 6.66479C1.25162 6.74982 1.20469 6.8457 1.17383 6.94702H15.6338C15.5739 6.87953 15.5048 6.81943 15.4258 6.77124L6.37012 1.27124Z"
                fill="#140802" />
            </g>
          </svg>
          <svg
            v-else
            width="34"
            height="24"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
              fill="var(--color-primary-midlight)"
              class="svg-empty"
              clip-path="url(#clip0_29_134)">
              <path
                d="M16.4102 7.55782V9.93957C16.4102 10.7487 15.7595 11.4051 14.9574 11.4051H2.04272C1.24059 11.4051 0.589844 10.7487 0.589844 9.93957V7.2187C0.589844 6.89941 0.692076 6.59004 0.882778 6.3362L4.74204 1.17804C5.19028 0.579134 6.01404 0.418499 6.65102 0.805212L15.7064 6.30447C16.1429 6.57021 16.4102 7.04616 16.4102 7.5598V7.55782Z" />
            </g>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: "Playwrite DK uloopet", cursive;
  font-size: 1.25rem;
  font-weight: 400;
  hyphens: manual;
  line-height: 2.5ex;
  color: var(--color-primary-dark);
  padding-bottom: 1.25rem;
  text-align: center;
}

.rating-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.star-rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  cursor: pointer;
  height: auto;
  padding: 0.2rem;
}

.svg-empty:hover {
  fill: var(--color-primary);
}
</style>
