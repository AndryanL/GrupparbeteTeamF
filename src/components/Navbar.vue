<script>
import RandomButton from "./RandomButton.vue";

export default {
  components: {
    RandomButton,
  },
};
</script>

<template>
  <nav class="navbar">
    <RouterLink
      to="/"
      active-class="active"
      :aria-current="$route.path === '/' ? 'page' : null"
    >
      <img
        class="logo"
        src="../assets/icons/100k_horisontal.svg"
        alt="100 kladdkakor logo"
      />
    </RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  z-index: 1;
  width: 100vw;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
}

.logo {
  margin: 0.5rem;
  width: 18rem;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.025);
}
</style>
