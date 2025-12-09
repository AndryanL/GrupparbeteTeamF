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
        alt="100 kladdkakor logo"
      />
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
/* Mobile First Styles */
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  z-index: 999;
  position: relative;
  min-height: 100vh;
}

.bg-image {
  height: 40vh;
  width: 100%;
  background-image: url("../assets/images/hero-img.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 1;
  position: relative;
}

.bg {
  background-color: var(--color-primary);
  width: 100%;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  min-height: 60vh;
}

.logo {
  width: 6rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.logobutton {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
}

h1 {
  color: var(--color-primary-light);
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  text-align: center;
  width: 100%;
}

.title {
  font-family: "Belanosima", sans-serif;
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-family: "Playwrite Dk Uloopet", cursive;
  font-size: 3rem;
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
  display: inline-block;
  text-align: center;
}

/* Desktop Styles - 50/50 split */
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    min-height: 100vh;
  }

  .bg-image {
    height: 100vh;
    width: 50vw; /* Changed from 60vw to 50vw */
    background-position: bottom left -60px;
    background-size: cover;
  }

  .bg {
    width: 50vw; /* Ensured 50vw */
    height: 100vh;
    padding: 3rem;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .logo {
    width: 10rem;
    top: 3rem;
    left: 3rem;
  }

  .logobutton {
    position: absolute;
    top: 50%;
    left: 3rem;
    right: 3rem;
    transform: translateY(-50%);
    align-items: flex-start;
    text-align: left;
    padding: 0;
  }

  h1 {
    text-align: left;
    align-items: flex-start;
    line-height: 5ex;
    margin-bottom: 5rem;
  }

  .title {
    font-size: 5rem;
  }

  .subtitle {
    font-size: 4rem;
  }
}

/* Large Desktop Styles */
@media (min-width: 1400px) {
  .bg {
    padding: 4rem;
  }

  .logo {
    top: 4rem;
    left: 4rem;
  }

  .logobutton {
    left: 4rem;
    right: 4rem;
  }
}
</style>
