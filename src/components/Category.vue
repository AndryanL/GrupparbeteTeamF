<template>
  <h1>Kategorier</h1>
  <ul class="icon-list">
    <li v-for="category in categories" :key="category">
      <img class="icon" src="@/assets/rating.svg" alt="" />
      {{ category }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 32px;
  color: black;
  margin-bottom: 16px;
}

.icon-list {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 6px;
}

.icon {
  width: 10px;
  height: 10px;
}
</style>
