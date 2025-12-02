<script>
import RatingInput from "@/components/RatingInput.vue";
import { getData } from "../src/apiFunctions.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import StepList from "../src/components/StepList.vue";
import Comment from "@/components/Comment.vue";
import IngredientList from "@/components/IngredientList.vue";
import ReceptOverview from "@/components/ReceptOverview.vue";

export default {
  data() {
    return {
      recipe: null,
      loading: false,
      error: null,
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
    Comment,
    IngredientList,
  },
  computed: {
    recipeId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async loadRecipes() {
      this.loading = true;
      this.error = null;
      try {
        const recipeId = this.recipeId;
        if (!recipeId) {
          this.error = "No recipe ID provided";
          return;
        }
        this.recipe = await getData(
          `https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes/${recipeId}`
        );
      } catch (error) {
        console.error("Failed to load recipe:", error);
        this.error = "Failed to load recipe";
      } finally {
        this.loading = false;
        this.logProps();
      }
    },
    logProps() {
      console.log("Recipe object:", this.recipe);
      if (this.recipe) {
        console.log("Recipe ID:", this.recipe.id);
        console.log("Recipe instructions:", this.recipe.instructions);
      } else {
        console.log("No recipe loaded");
      }
    },
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
  <div class="wrapper">
    <div class="flex-container">
      <h1>RECIPE VIEW</h1>
      <div v-if="loading">Loading recipe...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="recipe">
        <RecipeCard :recipe="recipe" />
        <div class="rating-input-container">
          <RatingInput :recipeId="recipe.id" />
        </div>

        <section>
          <h2>Ingredienser</h2>
          <IngredientList :ingredients="recipe.ingredients" />
        </section>

        <StepList
          :id="recipe.id"
          :instructions="recipe.instructions"
        ></StepList>

        <div class="comment-container">
          <h2>Kommentarer</h2>
          <Comment :recipe-id="recipe.id" />
        </div>
      </div>
      <div v-else>
        <p>Recipe not found</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;
  margin-left: 0.5rem;
}

h2 {
  font-family: "Playwrite Dk Uloopet";
  color: var(--color-primary-light);
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

.comment-container {
  background-color: var(--color-primary);
  padding-block: 2.5rem;
  margin-top: 2rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
}

.comment-container > * {
  max-width: min(93.5vw, 768px);
  margin: 0 auto;
}

.error {
  color: red;
  padding: 1rem;
}
</style>
