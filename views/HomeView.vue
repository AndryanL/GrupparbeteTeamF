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
  <h1>HOME VIEW</h1>
  <div v-for="recipe in recipes" :key="recipe.id" class="container">
    <RecipeCard
      class="recipe-card"
      @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
      :recipe="recipe"></RecipeCard>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
