<script>
import { RouterLink, RouterView } from "vue-router";
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import ReceptOverview from "./components/ReceptOverview.vue";
import StepList from "./components/StepList.vue";
import RatingInput from "./components/RatingInput.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      recipes: getRecipes(),
      steps: [
        "Preheat the oven to 350°F (175°C).",
        "Mix flour and sugar in a bowl.",
        "Bake for 30 minutes.",
      ],
    };
  },
  components: {
    RecipeCard,
    StepList,
    RatingInput,
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
          alt="100 kladdkakor logo" />
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
