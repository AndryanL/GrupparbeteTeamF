<script>
import { getRecipes } from "../src/MockApiData.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import StepList from "../src/components/StepList.vue";

export default {
  data() {
    return {
      recipes: getRecipes(),
    };
  },
  components: {
    RecipeCard,
    StepList,
  },
  computed: {
    recipeId() {
      return this.$route.params.id;
    },
    recipe() {
      return this.recipes.find((recipe) => recipe.id == this.recipeId);
    },
  },
};
</script>

<template>
  <h1>RECIPE VIEW</h1>
  <div v-if="recipe">
    <p>
      test recipe view. Route params id: {{ $route.params.id }}, Recipe.id is
      {{ recipe.id }}
    </p>
    <RecipeCard
      :id="recipe"
      :title="recipe.title"
      :description="recipe.description"
      :ingredientCount="recipe.ingredients.length"
      :cookTimeMinutes="recipe.cookTimeMinutes"
      :rating="recipe.rating">
    </RecipeCard>

    <StepList :id="recipe" :steps="recipe.steps"></StepList>
  </div>
  <div v-else>
    <p>Recipe not found</p>
  </div>
</template>
