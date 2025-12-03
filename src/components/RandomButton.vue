<template>
  <button class="knapp" v-on:click ="goToRandom">
    Randon recept
  </button>
  <!-- <RandomButton :recipes="recipes" /> -->
</template>

<script>
export default {
  name: "RandomButton",

  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },

  // Declare the event this component emits
  emits: ["random-recipe-selected"],

  methods: {
    handleClick() {
      const randomIndex = Math.floor(Math.random() * this.recipes.length);
      const randomRecipe = this.recipes[randomIndex];

      // Emit the selected recipe to parent
      this.$emit("random-recipe-selected", randomRecipe);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+DK+Uloopet:wght@100..400&display=swap");

.knapp {
  cursor: pointer;
  min-width: 181px;
  padding: 14px 52px;
  border-radius: 5px;
  border: none;
  background: #ff909f;
  color: #fffaf6;
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 24px;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.knapp:hover {
  transform: scale(1.025);
}
</style>
