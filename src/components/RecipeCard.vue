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
        <div class="recipe-details">
          <RatingDisplay>Test</RatingDisplay>
          <div class="recipe-overview-short">
            <p>{{ ingredientCount }} ingredients</p>
            <p>{{ cookTimeMinutes }} minutes</p>
          </div>
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
  background-color: var(--color-secondary-mid);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
}

.card-imagewrapper,
.card-imagewrapper > img {
  width: 100%;
  height: 300px;
}

.card-imagewrapper > img {
  object-fit: cover;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  color: var(--color-primary-dark);
  height: 300px;
}

.card-content p {
  font-family: "Comfortaa", sans-serif;
  font-size: 1.1rem;
}

.recipe-overview-short {
  display: flex;
}

.recipe-overview-short > p:first-child {
  margin-right: 0.5rem;
}

h2 {
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 1.75rem;
  hyphens: auto;
  line-height: 2.5ex;
  margin-bottom: 1rem;
}

@container recipe-card (min-width: 625px) {
  .card-container {
    flex-direction: row;
    align-items: center;
  }

  .card-imagewrapper,
  .card-imagewrapper > img {
    width: 300px;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .card-content {
    align-items: space-between;
  }
}
</style>
