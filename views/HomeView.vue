<script>
import { getData } from "../src/apiFunctions.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import SearchBar from "../src/components/SearchBar.vue";
import Category from "@/components/Category.vue";

export default {
  data() {
    return {
      recipes: [],
      filteredRecipes: [],
      categories: [],
      topCategories: [],
      loading: false,
      error: null,
      searchValue: "",
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
        const [recipes, categories] = await Promise.all([
          getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"),
          getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/categories")
        ]);
        this.recipes = recipes;
        this.categories = categories;
        this.filteredRecipes = [...recipes];
        this.topCategories = this.getTopCategories();
      } catch (error) {
        console.error("Failed to load data:", error);
        this.error = "Failed to load data";
      } finally {
        this.loading = false;
      }
    },
    getTopCategories() {
      const counts = {};
      this.recipes.forEach(recipe => {
        if (recipe.categoryId) {
          counts[recipe.categoryId] = (counts[recipe.categoryId] || 0) + 1;
        }
      });
      return this.categories
        .map(c => ({ ...c, count: counts[c.id] || 0 }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    },
    searchResult(searchValue) {
      this.searchValue = searchValue; // If not using v-model
      // Your filtering logic here
      if (!searchValue) {
        this.filteredRecipes = [...this.recipes];
      } else {
        this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.title.toUpperCase().includes(searchValue.toUpperCase())
        );
      }
    },
  },
  components: {
    RecipeCard,
    SearchBar,
    Category,
  },
};
</script>

<template>
  <h1>HOME VIEW</h1>
  <SearchBar @search="searchResult" />
  <div class="loading" v-if="loading">Loading recipes...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else>
    <div v-if="recipes.length > 0 && filteredRecipes.length === 0" class="no-results">
      Här finns inga kladdkakor som matchar din sökning. Prova igen!
    </div>
    <div v-else>
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="container">
        <RecipeCard class="recipe-card" @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
          :recipe="recipe"></RecipeCard>
      </div>
    </div>
  </div>
  <div>
    <Category :categories="topCategories" :showViewAll="categories.length > 5" />
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
.no-results {
  font-family: "Playwrite Dk Uloopet", cursive;
  color: var(--color-primary-dark);
  padding: 1rem;
}
.loading {
  font-family: "Playwrite Dk Uloopet", cursive;
  color: var(--color-primary-dark);
  padding: 1rem;
}
</style>
