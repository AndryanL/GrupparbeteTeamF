<script>
import { getRecipes } from "../MockApiData.js";

export default {
  data() {
    return {
      recipes: getRecipes(),
    };
  },
  props: {
    title: String,
    description: String,
    rating: Number,
    ingredientCount: Number,
    cookTimeMinutes: Number,
  },
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-imagewrapper">
        <img src="../assets/images/placeholder-image.jpg" :alt="title" />
      </div>
      <div class="card-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <RatingDisplay>Test</RatingDisplay>
        <div class="recipe-overview-short">
          <p>{{ ingredientCount }} ingredients</p>
          <p>{{ cookTimeMinutes }} minutes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  container-type: inline-size;
  container-name: recipe-card;
}
.card-container {
  width: min(93.5vw, 650px);
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: var(--color-secondary-light);
}

.card-imagewrapper,
.card-imagewrapper > img {
  width: 300px;
  height: 300px;
  
}

.card-imagewrapper>img {
    object-fit: cover;    
}

.card-content {
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
}

.recipe-overview-short {
  display: flex;
}

@container recipe-card (min-width: 500px) {
  .card-container {
    flex-direction: row;
    align-items: center;
    
  }

  .card-imagewrapper>img {
    border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  }
}
</style>
