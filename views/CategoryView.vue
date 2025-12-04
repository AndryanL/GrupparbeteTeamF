<script>
import { getData } from "../src/apiFunctions.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import SearchBar from "../src/components/SearchBar.vue";
import Category from "@/components/Category.vue";
import RandomButtonAlt from "@/components/RandomButtonAlt.vue";

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
        const recipes = await getData("https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes");
        this.recipes = recipes;
        this.categories = this.buildCategoriesFromRecipes(recipes);
        console.log("CategoryView loaded categories:", this.categories);
        this.filterByCategory();
      } catch (error) {
        console.error("Failed to load data:", error);
        this.error = "Failed to load data";
      } finally {
        this.loading = false;
      }
    },
    buildCategoriesFromRecipes(recipes) {
      const categorySet = new Set();
      recipes.forEach(recipe => {
        if (recipe.categories && Array.isArray(recipe.categories)) {
          recipe.categories.forEach(cat => categorySet.add(cat));
        }
      });
      return Array.from(categorySet).sort().map(name => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name: name
      }));
    },
    filterByCategory() {
      const categoryId = this.$route.params.id;
      this.currentCategory = this.categories.find(c => c.id === categoryId);

      if (categoryId && this.currentCategory) {
        this.filteredRecipes = this.recipes.filter(recipe =>
          recipe.categories && recipe.categories.includes(this.currentCategory.name)
        );
      } else {
        this.filteredRecipes = [...this.recipes];
      }
    },
    searchResult(searchValue) {
      this.searchValue = searchValue;
      const categoryId = this.$route.params.id;
      const currentCat = this.categories.find(c => c.id === categoryId);

      let filtered = categoryId && currentCat
        ? this.recipes.filter(recipe =>
          recipe.categories && recipe.categories.includes(currentCat.name)
        )
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
    RandomButtonAlt,
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="flex-container">
      <h1 v-if="currentCategory">{{ currentCategory.name }}</h1>
      <h1 v-else>Alla Kategorier</h1>
      <div class="loading" v-if="loading">Loading recipes...</div>
      <div class="homenav-container">
        <SearchBar @search="searchResult" />
        <RandomButtonAlt v-if="recipes.length > 0" class="random-button" :recipes="recipes" />
      </div>
      
      <div class="homebody">
        <div>
          <Category class="category" v-if="categories.length > 0" :categories="categories" />
        </div>
        <div v-if="loading">Loading recipes...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else>
          <div v-if="recipes.length > 0 && filteredRecipes.length === 0" class="no-results">
            Här var det tomt! Inga recept matchar din sökning.
          </div>
          <div v-else>
            <div v-for="recipe in filteredRecipes" :key="recipe.id">
              <RecipeCard class="recipe-card" @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
                :recipe="recipe"></RecipeCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
  text-align: center;
}

.homebody {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.flex-container {
  width: min(93.5vw, 768px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-container>* {
  width: 100%;
}

.homenav-container {
  display: flex;
  height: 3rem;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.random-button {
  height: 100%;
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

@media screen and (min-width: 992px) {
  .homebody {
    margin-left: -16rem;
    flex-direction: row;
    align-items: start;
  }
}
</style>
