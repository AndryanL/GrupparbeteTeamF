<script>
import { RouterLink, RouterView } from "vue-router";
import { getRecipes } from "./MockApiData.js";
import RecipeCard from "./components/RecipeCard.vue";
import ReceptOverview from "./components/ReceptOverview.vue";
import StepList from "./components/StepList.vue";
import RatingInput from "./components/RatingInput.vue";
import Comment from "@/components/Comment.vue";
import { getData } from "./apiFunctions.js";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

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
    Navbar,
    Footer,
  },
};
</script>

<template>
  <!-- 
  <Navbar /> -->
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Comfortaa:wght@300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playwrite+DK+Uloopet:wght@100..400&display=swap");
body {
  background-color: var(--color-secondary-mid);
}
</style>
