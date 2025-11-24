<script>
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import ReceptOverview from "./components/ReceptOverview.vue"
import ReceptOverview from "./components/ReceptOverview.vue"
import StepList from "./components/StepList.vue";
import RatingInput from "./components/RatingInput.vue";

export default {
  data() {
    return {
      recipes: getRecipes(),
      steps: [
        "Preheat the oven to 350°F (175°C).",
        "Mix flour and sugar in a bowl.",
        "Bake for 30 minutes.",
      ],
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
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
        :rating="recipe.rating"></RecipeCard>
    </div>

    <div v-for="step in steps" :key="step">
      <StepList :steps="steps" />
    </div>
    <RatingInput />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Comfortaa:wght@300..700&family=Playwrite+DK+Uloopet:wght@100..400&display=swap");

body {
  background-color: var(--color-secondary-mid);
}
</style>
