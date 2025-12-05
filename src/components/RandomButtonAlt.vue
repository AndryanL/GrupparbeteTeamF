<script>
export default {
  name: "RandomButtonAlt",

  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleClick() {
      if (this.recipes && this.recipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.recipes.length);
        const randomRecipe = this.recipes[randomIndex];

        // Navigate to the random recipe's route
        this.$router.push({ name: "recipe", params: { id: randomRecipe.id } });
        console.log("handleClick condition fulfilled");
      } else {
        console.log("handleClick condition not fulfilled");
      }
    },
  },
};
</script>

<template>
  <button
    @click="handleClick"
    class="random-button"
    aria-label="välj slumpad kladdkaka"
  >
    <svg
      class="kladdkaka"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 223.2 191.32"
    >
      <title>Slumpa din kladdkaka!</title>
      <ellipse
        class="kladdkaka-plate-body"
        cx="111.6"
        cy="95.66"
        rx="111.6"
        ry="95.66"
        fill="#f4f4e4"
      />
      <path
        class="kladdkaka-plate-detail"
        d="M111.6,139.64c-32.67,0-58.15-4.98-66.7-34.05,0,0,8.02,46,66.7,46s66.7-46,66.7-46c-8.35,28.95-34.03,34.05-66.7,34.05Z"
        fill="#b2b09b"
      />
      <path
        class="kladdkaka-cake-inside"
        d="M186.07,98.29v22.42c0,7.62-6.13,13.8-13.68,13.8H50.81c-7.55,0-13.68-6.18-13.68-13.8v-25.61c0-3.01.96-5.92,2.76-8.31l36.33-48.56c4.22-5.64,11.97-7.15,17.97-3.51l85.25,51.77c4.11,2.5,6.63,6.98,6.63,11.82,0,0,0-.02,0-.02Z"
        fill="#654434"
      />
      <path
        class="kladdkaka-cake-outline"
        d="M72.14,35.13c5.79-7.74,16.45-9.82,24.69-4.82l85.25,51.77h0c5.63,3.44,9.08,9.57,9.09,16.2v22.42c0,10.44-8.4,18.93-18.79,18.93H50.81c-10.39,0-18.79-8.49-18.79-18.93v-25.61c0-4.11,1.33-8.12,3.8-11.41,0,0,36.32-48.55,36.32-48.55ZM91.55,39.11c-3.75-2.27-8.6-1.33-11.24,2.21l-36.33,48.56h0c-.6.81-1.04,1.71-1.33,2.67h136.13c-.56-.64-1.21-1.2-1.96-1.65l-85.25-51.78h-.02Z"
        fill="#140802"
      />
    </svg>
  </button>
</template>

<style scoped>
.random-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kladdkaka {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  width: 100%;
  height: 100%;
}

@keyframes hue-shift {
  0% {
    filter: hue-rotate(0deg) saturate(4) brightness(3);
  }
  100% {
    filter: hue-rotate(360deg) saturate(4) brightness(3);
  }
}

.kladdkaka:hover {
  cursor: pointer;
}

.kladdkaka:hover .kladdkaka-cake-inside,
.kladdkaka:hover .kladdkaka-cake-outline {
  animation: hue-shift 1s linear infinite;
}
</style>
