<script>
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import StepList from "./components/StepList.vue";

export default {
  data() {
    return {
      recipes: getRecipes(),
     steps: ["Preheat the oven to 350°F (175°C).", "Mix flour and sugar in a bowl.", "Bake for 30 minutes."], 
    };
  },
  components: {
    RecipeCard,
    StepList,
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

 <div v-for="step in steps" :key="step">
    <StepList :steps="steps" />

  </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Playwrite+DK+Uloopet:wght@100..400&display=swap');
</style>
