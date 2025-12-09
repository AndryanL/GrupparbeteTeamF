<script>
import RatingInput from "@/components/RatingInput.vue";
import { getData } from "../src/apiFunctions.js";
import RecipeCard from "../src/components/RecipeCard.vue";
import StepList from "../src/components/StepList.vue";
import Comment from "@/components/Comment.vue";
import IngredientList from "@/components/IngredientList.vue";
import ReceptOverview from "@/components/ReceptOverview.vue";
import Category from "@/components/Category.vue";
import CommentsForm from "@/components/CommentsForm.vue";
import RecipeHeader from "@/components/RecipeHeader.vue";

export default {
  data() {
    return {
      recipe: null,
      loading: false,
      error: null,
      commentComponentKey: 0,
      commentCount: 0,
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
    Comment,
    IngredientList,
    CommentsForm,
    ReceptOverview,
    RecipeHeader,
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
    forceCommentComponentReRender() {
      this.commentComponentKey++;
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
      <div class="loading" v-if="loading">Loading recipe...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="recipe">
        <RecipeHeader :recipe="recipe"></RecipeHeader>
        <img
          src="../src/assets/icons/squig_1920.svg"
          srcset="
            ../src/assets/icons/squig_480.svg   480w,
            ../src/assets/icons/squig_992.svg   992w,
            ../src/assets/icons/squig_1380.svg 1380w,
            ../src/assets/icons/squig_1920.svg 1920w
          "
          sizes="100vw"
          class="squig"
          alt="squiggly line divider"
        />

        <section class="recipe-nav">
          <aside class="ingredient-list">
            <IngredientList :ingredients="recipe.ingredients" />
          </aside>

          <StepList
            class="steplist"
            :id="recipe.id"
            :instructions="recipe.instructions"
          ></StepList>
        </section>
        <div class="ornament_container">
          <img
            class="squig_ornament"
            src="../src/assets/icons/squig_ornament.svg"
            alt="squiggle ornament"
          />
        </div>

        <section class="rating-input-container">
          <RatingInput :recipeId="recipe.id" />
        </section>

        <div class="wave_divider">
          <svg
            id="visual"
            viewBox="0 0 900 100"
            width="900"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 34L18.8 40.5C37.7 47 75.3 60 112.8 59.8C150.3 59.7 187.7 46.3 225.2 39.3C262.7 32.3 300.3 31.7 337.8 38.3C375.3 45 412.7 59 450.2 64.8C487.7 70.7 525.3 68.3 562.8 62.3C600.3 56.3 637.7 46.7 675.2 40.8C712.7 35 750.3 33 787.8 38.8C825.3 44.7 862.7 58.3 881.3 65.2L900 72L900 101L881.3 101C862.7 101 825.3 101 787.8 101C750.3 101 712.7 101 675.2 101C637.7 101 600.3 101 562.8 101C525.3 101 487.7 101 450.2 101C412.7 101 375.3 101 337.8 101C300.3 101 262.7 101 225.2 101C187.7 101 150.3 101 112.8 101C75.3 101 37.7 101 18.8 101L0 101Z"
              fill="#381c10"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
        <div class="comment-container">
          <CommentsForm
            :recipeId="recipe.id"
            @on-comment-created="forceCommentComponentReRender"
          />
          <h2>Kommentarer ({{ commentCount }})</h2>

          <Comment
            :recipeId="recipe.id"
            :key="commentComponentKey"
            @update-count="commentCount = $event"
          />
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

.loading {
  height: 100vh;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
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

.recipe-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.ingredient-list {
  flex: 0 0 auto;
  width: 100%;
  margin-bottom: 0.5rem;
}

.squig {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  line-height: 0; /* Remove any extra line height */
  margin-block: 2rem;
}

.ornament_container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-block: 4rem;
}

.squig_ornament {
  width: 5rem;
  margin: 0 auto;
}

.comment-container {
  background-color: var(--color-primary);
  padding-block: 2.5rem;
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

.wave_divider {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 2rem; /* Optional: adjust spacing as needed */
  overflow: hidden;
  line-height: 0; /* Remove any extra line height */
}

.wave_divider svg {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 992px) {
  .recipe-nav {
    flex-direction: row;
  }

  .ingredient-list {
    margin-right: 0.5rem;
    min-width: 250px;
    max-width: 300px;
    margin-bottom: 0;
  }
}
</style>
