<script>
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import ReceptOverview from "./components/ReceptOverview.vue"

export default {
  data() {
    return {
      recipes: getRecipes(),
    };
  },
  components: {
    RecipeCard
  },
};
</script>

<template>
  <main>
    <div v-for="recipe in recipes" :key="recipe.id">
      <RecipeCard
        :title="recipe.title"
        :description="recipe.description"
        :ingredientCount="recipe.ingredients.length"
        :cookTimeMinutes="recipe.cookTimeMinutes"
        :rating="recipe.rating"
      ></RecipeCard>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Playwrite+DK+Uloopet:wght@100..400&display=swap');
</style>
