<script>

import iconUrl from '@/assets/images/bullet-point.svg'
export default {
  name: "Category",
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    showViewAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToCategoryView(categoryId) {
      this.$router.push({ name: 'category', params: { id: categoryId } });
    },
    goToAllCategories() {
      this.$router.push({ name: 'category' });
    }
  },
  data() {
    return {
      iconUrl
    }
  }
}
</script>

<template>

  <div class="category-card">
    <h2 class="category-title">Kategorier</h2>
    <ul>
      <li v-for="category in categories" :key="category.id" @click="goToCategoryView(category.id)">
        <img :src="iconUrl" alt="kladdkakaikon" class="kladdkaka-icon" />
        <span class="category-text">{{ category.name }}</span>
      </li>
    </ul>
    <button v-if="showViewAll" @click="goToAllCategories" class="view-all-btn">Visa alla kategorier</button>
  </div>
</template>

<style scoped>
.category-card {
  background: #FFC2CA;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0.75rem;
  font-family: "Playwrite DK Uloopet", cursive;
  width: fit-content;
  max-width: 200px;
}

.category-title {
  font-size: 0.9em;
  margin-bottom: 0.3em;
  margin: 0;
  text-align: center;
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
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.3rem;
  border-radius: 4px;
}

li:hover {
  transform: translateX(2px);
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

.view-all-btn {
  display: block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s ease;
}
 

.view-all-btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: translateX(2px);
}
</style>
