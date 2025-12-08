<script>
export default {
  name: "Hero",
  props: {
    pageId: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="bg-image"></div>
    <div class="bg">
      <img
        class="logo"
        src="../assets/icons/100k_vertical.svg"
        alt="100 kladdkakor logo" />
      <div class="logobutton">
        <h1 class="hero-text">
          <span class="title">Ditt fika:</span>
          <span class="subtitle">aldrig samma lika</span>
        </h1>
        <a class="button" :href="pageId">Till recepten</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  z-index: 2;
  position: relative;
}

.bg-image {
  height: 100vh;
  width: 60vw;
  background-image: url("../assets/images/hero-img.jpg");
  background-position: bottom left -60px;
  background-size: cover;
  z-index: 1;
  position: relative;
}

.bg {
  background-color: var(--color-primary);
  width: 50vw;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  z-index: 3;
  position: relative;
  flex-shrink: 0;
}

.logobutton {
  position: relative;
  bottom: 10rem;
}

h1 {
  color: var(--color-primary-light);
  display: flex;
  flex-direction: column;
  line-height: 5ex;
  margin-bottom: 5rem;
}

.title {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;

  font-size: 5rem;
}

.subtitle {
  font-family: "Playwrite Dk Uloopet", cursive;

  font-size: 4rem;
}

.logo {
  width: 10rem;
  margin-right: 5rem;
}

.button {
  font-family: "Playwrite Dk Uloopet", cursive;
  font-size: 1rem;
  scroll-behavior: smooth;
  color: var(--color-primary-dark);
  background-color: var(--color-primary-light);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: var(--shadow-elevation-high-d);
  flex-grow: none;
}
</style>
