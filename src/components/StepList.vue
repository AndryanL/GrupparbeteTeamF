<script>
export default {
  props: {
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
    color: #31180C ;
    background-color: #DCD1A7; 
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
    list-style-position: inside;
}
</style>