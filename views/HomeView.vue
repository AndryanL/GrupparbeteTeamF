<script>
import { getData } from "../src/apiFunctions.js"
import RecipeCard from "../src/components/RecipeCard.vue";

export default {
  data() {
    return {
      recipes: [], // Initialize as empty array
      loading: false,
      error: null
    };
  },
  async created() {
    await this.loadRecipes();
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
      }
    }
  },
  components: {
    RecipeCard,
  },
};
</script>

<template>
  <h1>HOME VIEW</h1>
  <div v-if="loading">Loading recipes...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else>
    <div v-for="recipe in recipes" :key="recipe.id" class="container">
      <RecipeCard
        class="recipe-card"
        @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
        :recipe="recipe"
      ></RecipeCard>
    </div>
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

.error {
  color: red;
  padding: 1rem;
}
</style>
