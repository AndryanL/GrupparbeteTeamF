<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    instructions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ol>
    <li v-for="(instruction, id) in instructions" :key="id">
      {{ instruction }}
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
