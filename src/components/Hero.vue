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
    <img
      class="logo"
      src="../assets/icons/100k_vertical.svg"
      alt="100 kladdkakor logo"
    />
    <h1 class="hero-text">
      <span class="title">Ditt fika:</span>
      <span class="subtitle">aldrig samma lika</span>
    </h1>
    <a class="button" :href="pageId">Hayooo</a>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
}

h1 {
  color: var(--color-primary-light);
  display: flex;
  flex-direction: column;
  line-height: 5.5ex;
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
  width: 15rem;
  margin-right: 5rem;
}

.button {
  scroll-behavior: smooth;
}
</style>
