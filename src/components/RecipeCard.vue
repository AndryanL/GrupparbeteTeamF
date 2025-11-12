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
        <h2 class="card-h2">{{ title }}</h2>
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
  background-color: var(--color-secondary-mid);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
}

.card-imagewrapper,
.card-imagewrapper > img {
  width: 100%;
}

.card-imagewrapper > img {
  height: 100%;
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
}

.card-content > * {
  padding-bottom: 1rem;
}

.card-content:last-child {
  padding-bottom: 0;
}

.card-content p {
  font-family: "Comfortaa", sans-serif;
}

.recipe-overview-short {
  display: flex;
}

.recipe-overview-short > p {
  font-family: "Playwrite DK Uloopet", cursive;
}

.recipe-overview-short > p:first-child {
  margin-right: 0.5rem;
}

.card-h2 {
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 1.25rem;
  hyphens: manual;
  line-height: 2.5ex;
  padding-bottom: 1.25rem;
}

@container recipe-card (min-width: 600px) {
  .card-container {
    flex-direction: row;
  }

  .card-imagewrapper,
  .card-imagewrapper > img {
    width: 250px;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
