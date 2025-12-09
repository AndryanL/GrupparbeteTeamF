<script>
import iconUrl from "@/assets/images/bullet-point.svg";

export default {
  name: "IngredientsList",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      iconUrl,
    };
  },
};
</script>

<template>
  <div class="ingredients-list">
    <h2>Ingredienser</h2>
    <hr />
    <ul>
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index"
        class="ingredients-list__item"
      >
        <div class="item-spacing">
          <span class="ingredient_name">{{ ingredient.name }}</span>
          <span class="ingredient_amount"
            >{{ ingredient.amount }} {{ ingredient.unit }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
hr {
  border: none;
  border-top: solid 1px var(--color-primary-midlight);
  width: calc(100% + 2rem);
  margin-left: -1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
h2 {
  font-family: "Playwrite Dk Uloopet", cursive;
  margin-bottom: 0.5rem;
}

.ingredients-list {
  padding: 0.75rem 1rem;
  color: #31180c;
  list-style-position: inside;
  border: solid 1px var(--color-primary-midlight);
  border-radius: 0.5rem;
  background-color: var(--color-secondary-mid);
  box-shadow: var(--shadow-elevation-low);
}

ul {
  padding: 0;
}

.ingredients-list__item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-family: "Comfortaa", sans-serif;
}

.ingredients-list__item:last-of-type {
  margin-bottom: 0;
}

.ingredient-icon {
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
}

.ingredients-list__item::before {
  display: none;
}

.item-spacing {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.ingredient_amount {
  min-width: 3rem;
}
</style>
