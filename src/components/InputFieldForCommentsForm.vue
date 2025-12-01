<template>
  <input
    class="inputField"
    type="text"
    :placeholder="placeholder"
    v-model="model"
  />
</template>

<script setup>
import { defineProps, defineModel } from 'vue';

defineProps({
  placeholder: String
});


const model = defineModel();
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
  border-radius: 5px;
  background: #F4F4E4;
  color: #A9816E;
  border: none;
}
input.inputField:focus{
  outline: 1px solid #A9816E;
}
</style>
