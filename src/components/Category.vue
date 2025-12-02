<script>

import iconUrl from '@/assets/images/bullet-point.svg'
export default {
  data() {
    return {
      categories: [],
      loading: true,
      error: null,
      iconUrl
    }
  },
  async created() {
    try {
      const response = await fetch('https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/categories')
      if (!response.ok) throw new Error('Nätverksfel')
      this.categories = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<template>

  <div class="category-card">
    <h2 class="category-title">Kategorier</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <img :src="iconUrl" alt="kladdkakaikon" class="kladdkaka-icon" />
        <span class="category-text">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.category-card {
  background: #FFC2CA;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
  font-family: "Playwrite DK Uloopet", cursive;
   background-image: repeating-linear-gradient(
    to right, 
    rgba(200,0,50,0.15) 0, 
    rgba(200,0,50,0.15) 2px, 
    transparent 1px, 
    transparent 15px
  ), 
  repeating-linear-gradient(
    to bottom, 
    rgba(200,0,50,0.15) 0, 
    rgba(200,0,50,0.15) 2px, 
    transparent 1px, 
    transparent 15px);
  width: fit-content;
  max-width: 200px;
}


.category-title {
  font-size: 0.9em;
  margin-bottom: 0.3em;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.2em;
  font-size: 0.7em;
}

.kladdkaka-icon {
  width: 0.8rem;
  height: 0.8rem;
  flex-shrink: 0;
}

.category-text {
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 1em;
}
</style>
