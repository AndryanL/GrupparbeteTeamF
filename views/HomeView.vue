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
  <div v-for="recipe in recipes" :key="recipe.id">
    <RecipeCard
      @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
      :id="recipe.id"
      :title="recipe.title"
      :description="recipe.description"
      :ingredientCount="recipe.ingredients.length"
      :cookTimeMinutes="recipe.cookTimeMinutes"
      :rating="recipe.rating"></RecipeCard>
  </div>
</template>
