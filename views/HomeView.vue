<script>
import { getRecipes } from "../src/MockApiData.js";
import RecipeCard from "../src/components/RecipeCard.vue";

export default {
  data() {
    return {
      recipes: getRecipes(),
    };
  },
  components: {
    RecipeCard,
  },
};
</script>

<template>
  <nav>
    <img
      class="logo"
      src="./src/assets/icons/100k_horisontal_bg.svg"
      alt="100 kladdkakor logo" />
  </nav>
  <h1>HOME VIEW</h1>
  <div v-for="recipe in recipes" :key="recipe.id" class="container">
    <RecipeCard
      class="recipe-card"
      @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
      :recipe="recipe"></RecipeCard>
  </div>
</template>

<style scoped>
.logo {
  width: 15rem;
}
.recipe-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
