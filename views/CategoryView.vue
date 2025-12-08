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
    "$route.params.id": function () {
      this.filterByCategory();
    },
  },
  methods: {
    async loadData() {
      this.loading = true;
      this.error = null;
      try {
        const recipes = await getData(
          "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"
        );
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
      recipes.forEach((recipe) => {
        if (recipe.categories && Array.isArray(recipe.categories)) {
          recipe.categories.forEach((cat) => categorySet.add(cat));
        }
      });
      return Array.from(categorySet)
        .sort()
        .map((name) => ({
          id: name.toLowerCase().replace(/\s+/g, "-"),
          name: name,
        }));
    },
    filterByCategory() {
      const categoryId = this.$route.params.id;
      this.currentCategory = this.categories.find((c) => c.id === categoryId);

      if (categoryId && this.currentCategory) {
        this.filteredRecipes = this.recipes.filter(
          (recipe) =>
            recipe.categories &&
            recipe.categories.includes(this.currentCategory.name)
        );
      } else {
        this.filteredRecipes = [...this.recipes];
      }
    },
    searchResult(searchValue) {
      this.searchValue = searchValue;
      const categoryId = this.$route.params.id;
      const currentCat = this.categories.find((c) => c.id === categoryId);

      let filtered =
        categoryId && currentCat
          ? this.recipes.filter(
              (recipe) =>
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
  <h1 v-if="currentCategory">{{ currentCategory.name }}</h1>
  <h1 v-else>Alla Kategorier</h1>
  <div class="homebody">
    <div class="homenav-placeholder"></div>
    <div class="homenav">
      <div class="homenav-container">
        <SearchBar class="searchbar" @search="searchResult" />
        <RandomButtonAlt class="random-button" :recipes="recipes" />
      </div>
      <Category class="category" :categories="topCategories" />
    </div>
    <div v-if="loading">Loading recipes...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div
        v-if="recipes.length > 0 && filteredRecipes.length === 0"
        class="no-results"
      >
        Här var det tomt! Inga recept matchar din sökning.
      </div>
      <div v-else>
        <div
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          class="container"
        >
          <RecipeCard
            class="recipe-card"
            @click="$router.push({ name: 'recipe', params: { id: recipe.id } })"
            :recipe="recipe"
          ></RecipeCard>
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

.flex-container > * {
  width: 100%;
}

.homenav {
  padding-top: 0.5rem;
}

.homenav-placeholder {
  display: none;
}

.homenav-container {
  display: flex;
  height: 2.5rem;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: min(93.5vw, 40rem);
  margin-bottom: 0.5rem;
}

.searchbar {
  flex: 1;
}

.random-button {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
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
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-areas: "nav content";
    gap: 2rem;
    width: 100%;
    margin-left: 0;
    max-width: min(93.5vw, 768px);
    margin: 0 auto;
  }

  .homenav {
    grid-area: nav;
    position: fixed;
    top: 8.75rem;
    width: 15rem;
    margin-right: 1rem;
  }

  .homenav-container {
    width: min(93.5vw, 15rem);
  }

  .homenav-placeholder {
    grid-area: nav;
    display: block;
    width: 15rem;
    height: 150px;
    visibility: hidden;
  }

  /* Content takes the second column */
  .homebody > div:not(.homenav):not(.homenav-placeholder) {
    grid-area: content;
  }
}
</style>
