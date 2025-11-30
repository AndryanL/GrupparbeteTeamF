<script>
import RatingInput from "@/components/RatingInput.vue";
import { getData } from "../src/apiFunctions.js"
import RecipeCard from "../src/components/RecipeCard.vue";
import StepList from "../src/components/StepList.vue";

export default {
  data() {
    return {
      recipes: [],
      loading: false,
      error: null
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
  },
  computed: {
    recipeId() {
      return this.$route.params.id;
    },
    recipe() {
      return this.recipes.find(recipe => recipe.id === this.recipeId);
    }
  },
  methods: {
    async loadRecipes() {
      this.loading = true;
      this.error = null;
      try {
        this.recipes = await getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes");
      } catch (error) {
        console.error("Failed to load recipes:", error);
        this.error = "Failed to load recipes";
      } finally {
        this.loading = false;
        this.logProps()
      }
    },
    logProps() {
      console.log(this.recipe)
      console.log(this.recipe.id)
      console.log(this.recipe.instructions)
    }
  },
  async created() {
    await this.loadRecipes();
    
    this.$watch(
      () => this.$route.params.id,
      (newId) => {
        console.log("route updated Id: " + newId);
      },
      { immediate: true }
    );
  },
};
</script>

<template>
  <h1>RECIPE VIEW</h1>
  <div v-if="loading">Loading recipe...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else-if="recipe">
    <RecipeCard :recipe="recipe" />
    <StepList :id="recipe.id" :instructions="recipe.instructions"></StepList>
  </div>
  <div v-else>
    <p>Recipe not found</p>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
}

.error {
  color: red;
  padding: 1rem;
}
</style>