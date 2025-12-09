<script>
import ReceptOverview from "@/components/ReceptOverview.vue";

export default {
  data() {
    return {};
  },
  props: ["recipe"],
  computed: {
    isLoaded() {
      return this.recipe != null;
    },
  },
  components: {
    ReceptOverview,
  },
};
</script>

<template>
  <div class="container">
    <img class="img" :src="recipe.imageUrl" :alt="recipe.title" />

    <div class="content">
      <h1>{{ recipe.title }}</h1>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
  <ReceptOverview
    :ingredientCount="recipe.ingredients.length"
    :time="recipe.timeInMins"
    :rating="recipe.ratings"
  />
</template>

<style scoped>
h1 {
  font-family: "Playwrite Dk Uloopet", cursive;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-family: "Comfortaa", sans-serif;
  font-size: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.content {
  padding: 2rem;
  background-color: var(--color-secondary-mid);
  border-radius: 0.5rem;
  border: solid 1px var(--color-primary-midlight);
  box-shadow: var(--shadow-elevation-low);
}

.img {
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  flex-shrink: 1;
  box-shadow: var(--shadow-elevation-low);
  object-fit: cover;
}

@media screen and (min-width: 992px) {
  .container {
    flex-direction: row-reverse;
    margin-bottom: 0.5rem;
  }

  .img {
    max-width: 50%;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }

  .overview {
    display: flex;
    flex-direction: column;
  }
}
</style>
