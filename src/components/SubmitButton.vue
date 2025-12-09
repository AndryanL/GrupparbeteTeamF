<template>
  <button type="button" class="knapp" v-on:click="$emit('click')">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+DK+Uloopet:wght@100..400&display=swap");

.knapp {
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 1rem;
}

.knapp:hover {
  transform: scale(1.025);
  cursor: pointer;
}
</style>
