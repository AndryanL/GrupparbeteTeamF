<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ol>
    <li v-for="(step, index) in steps" :key="index">
      {{ step }}
    </li>
  </ol>
</template>

<style scoped>
li {
  font-family: "Comfortaa";
  margin: 12px;
  padding: 13px 26px 13px 26px;
  border-radius: 10px;
  color: #31180c;
  background-color: var(--color-tertiary);
  box-shadow: var(--shadow-elevation-medium);
  list-style-position: inside;
}
</style>
