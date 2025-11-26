<script>
import RatingInput from "@/components/RatingInput.vue";
import { getRecipes } from "../src/MockApiData.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import StepList from "../src/components/StepList.vue";

export default {
  data() {
    return {
      recipes: [],
      recipeId: null,
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
  },
  computed: {
    /* recipeId() {
      return this.$route.params.id;
    }, */
    recipe() {
      return this.recipes.find((recipe) => recipe.id == this.recipeId) ?? null;
    },
  },
  mounted() {
    this.recipes = getRecipes();
  },
  created() {
    this.$watch(
      () => this.$route.params.id,
      (newId, oldId) => {
        console.log("route updated Id: " + newId);
        this.recipeId = newId;
      },
      { immediate: true }
    );
  },
};
</script>

<template>
  <h1>RECIPE VIEW</h1>
  <div v-if="recipe">
    <p>
      test recipe view. Route params id: {{ $route.params.id }}, Recipe.id is
      {{ this.recipeId }}
    </p>
    <RecipeCard :recipe="recipe" />

    <!--  <StepList :id="recipe" :steps="recipe.steps"></StepList> -->
    <!-- <RatingInput></RatingInput> -->
  </div>
  <div v-else>
    <p>Recipe not found</p>
  </div>
</template>
