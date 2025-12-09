<template>
  <button type="button" class="knapp" v-on:click="handleClick">Knapp</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("clicked");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+DK+Uloopet:wght@100..400&display=swap");

.knapp {
  cursor: pointer;
  min-width: 181px;
  padding: 14px 52px;
  border-radius: 0.5rem;
  border: none;
  background: #ff909f;
  color: #fffaf6;
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 24px;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
