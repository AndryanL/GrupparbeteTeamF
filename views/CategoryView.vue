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
      currentCategory: null,
      loading: false,
      error: null,
      searchValue: "",
    };
  },
  async created() {
    await this.loadData();
  },
  watch: {
    '$route.params.id': function () {
      this.filterByCategory();
    }
  },
  methods: {
    async loadData() {
      this.loading = true;
      this.error = null;
      try {
        const [recipes, categories] = await Promise.all([
          getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"),
          getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/categories")
        ]);
        this.recipes = recipes;
        this.categories = categories;
        console.log("CategoryView loaded categories:", categories);
        this.filterByCategory();
      } catch (error) {
        console.error("Failed to load data:", error);
        this.error = "Failed to load data";
      } finally {
        this.loading = false;
      }
    },
    filterByCategory() {
      const categoryId = this.$route.params.id;
      this.currentCategory = this.categories.find(c => c.id === categoryId);

      if (categoryId && this.currentCategory) {
        this.filteredRecipes = this.recipes.filter(recipe => recipe.categoryId === categoryId);
      } else {
        this.filteredRecipes = [...this.recipes];
      }
    },
    searchResult(searchValue) {
      this.searchValue = searchValue;
      const categoryId = this.$route.params.id;

      let filtered = categoryId
        ? this.recipes.filter(recipe => recipe.categoryId === categoryId)
        : [...this.recipes];

      if (!searchValue) {
        this.filteredRecipes = filtered;
      } else {
        this.filteredRecipes = filtered.filter((recipe) =>
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
  <h1 v-if="currentCategory">{{ currentCategory.name }}</h1>
  <h1 v-else>Alla Kategorier</h1>
  <SearchBar @search="searchResult" />
  <div v-if="loading">Loading recipes...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else>
    <div v-if="recipes.length > 0 && filteredRecipes.length === 0" class="no-results">
      Här var det tomt! Inga recept matchar din sökning.
    </div>
    <div v-else>
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="container">
        <RecipeCard class="recipe-card" @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
          :recipe="recipe"></RecipeCard>
      </div>
    </div>
  </div>
  <div v-if="categories.length > 0">
    <Category :categories="categories" />
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

.no-results {
  font-family: "Playwrite Dk Uloopet", cursive;
  color: var(--color-primary-dark);
  padding: 1rem;
}
.error {
  color: red;
  padding: 1rem;
}
</style>
