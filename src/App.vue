<script>
import { RouterLink, RouterView } from "vue-router";
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import ReceptOverview from "./components/ReceptOverview.vue";
import StepList from "./components/StepList.vue";
import RatingInput from "./components/RatingInput.vue";
import Comment from "@/components/Comment.vue";
import { getData } from "./apiFunctions.js";

export default {
  name: "App",
  data() {
    return {
      recipes: getData(
        "https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes"
      ),
    };
  },
  components: {
    RouterLink,
    RouterView,
    RecipeCard,
    StepList,
    RatingInput,
    Comment,
  },
};
</script>

<template>
  <nav>
    <nav>
      <RouterLink to="/">
        <img
          class="logo"
          src="./assets/icons/100k_horisontal_bg.svg"
          alt="100 kladdkakor logo"
        />
      </RouterLink>
    </nav>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Comfortaa:wght@300..700&family=Playwrite+DK+Uloopet:wght@100..400&display=swap");

body {
  background-color: var(--color-secondary-mid);
}

.logo {
  box-shadow: var(--shadow-elevation-medium);
  margin: 0.5rem;
  width: 25rem;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.025);
}
</style>
