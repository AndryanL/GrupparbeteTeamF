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
ol {
  padding-left: 0;
}
li {
  font-family: "Comfortaa";
  margin-block: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: #31180c;
  background-color: var(--color-tertiary);
  box-shadow: var(--shadow-elevation-medium);
  list-style-position: inside;
}
</style>
