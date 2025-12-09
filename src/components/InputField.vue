<template>
  <div>
    <fieldset>
      <input
        class="inputField"
        type="text"
        v-model="searchQuery"
        @input="debouncedSearch"
        placeholder="Search for recipes..."
      />
    </fieldset>

    <div v-if="recipes.length">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const recipes = ref([]);
const UrlAPI = "url";

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

async function handleSearch() {
  if (!searchQuery.value) {
    recipes.value = [];
    return;
  }

  try {
    const response = await fetch(
      `${UrlAPI}?query=${encodeURIComponent(searchQuery.value)}`
    );

    if (!response.ok) throw new Error("Errooor");

    const data = await response.json();

    recipes.value = data.results || [];
  } catch (error) {
    console.error("Fetch error:", error);
    recipes.value = [];
  }
}

const debouncedSearch = debounce(handleSearch, 400);
</script>

<style scoped>
fieldset {
  outline: none;
  border: none;
  padding: 0;
}

input.inputField {
  width: 266px;
  padding: 13.5px 20px;
  border-radius: 0.5rem;
  background: #f4f4e4;
  color: #a9816e;
  border: none;
  font-family: "DM Sans", sans-serif;
}
input.inputField:focus {
  outline: 1px solid #a9816e;
}
</style>
