<template>
  <input
    class="inputField"
    type="text"
    :placeholder="placeholder"
    v-model="model"
  />
</template>

<script setup>
import { defineProps, defineModel } from "vue";

defineProps({
  placeholder: String,
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
  border-radius: 0.5rem;
  background-color: var(--color-secondary-mid);
  color: #a9816e;
  border: none;
}
input.inputField:focus {
  outline: 1px solid #a9816e;
}
</style>
