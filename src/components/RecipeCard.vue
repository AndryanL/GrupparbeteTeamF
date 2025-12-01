<script>
import RatingDisplay from "./RatingDisplay.vue";

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
    RatingDisplay,
  },
};
</script>

<template>
  <div v-if="isLoaded" class="card-wrapper">
    <div class="card-container">
      <div class="card-imagewrapper">
        <img :src="recipe.imageUrl" :alt="recipe.title" />
      </div>
      <div class="card-content">
        <h2 class="card-h2">{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <div class="recipe-details">
          <RatingDisplay :ratings="recipe.ratings"></RatingDisplay>
          <div class="recipe-overview-short">
            <p>{{ recipe.ingredients.length }} ingredienser</p>
            <p>{{ recipe.timeInMins }} minuter</p>
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
  width: min(93.5vw, 40rem);
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary-mid);
  box-shadow: var(--shadow-elevation-medium);
  transition: transform 0.2s;
}

.card-container:hover {
  transform: scale(1.025);
  cursor: pointer;
}

.card-imagewrapper {
  aspect-ratio: 4 / 3;
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
  font-family: "Playwrite DK uloopet", cursive;
  font-size: 1.25rem;
  font-weight: 400;
  hyphens: manual;
  line-height: 2.5ex;
  padding-bottom: 1.25rem;
}

@container recipe-card (min-width: 600px) {
  .card-container {
    flex-direction: row;
  }

  .card-imagewrapper {
    aspect-ratio: 1 / 1;
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
