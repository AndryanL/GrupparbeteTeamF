<script>
export default {
  name: "Category",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    initiallyOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    goToCategoryView(categoryId) {
      this.$router.push({ name: "category", params: { id: categoryId } });
    },
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.isOpen = this.initiallyOpen;
  },
};
</script>

<template>
  <aside class="category-accordion">
    <div class="accordion-header" @click="toggleAccordion">
      <h2 class="accordion-title">Kategorier</h2>
      <span class="accordion-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          :class="{ rotated: isOpen }">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </div>

    <!-- Accordion Content -->
    <transition
      name="accordion"
      @enter="startEnterTransition"
      @after-enter="endEnterTransition"
      @before-leave="startLeaveTransition"
      @after-leave="endLeaveTransition">
      <div v-if="isOpen" class="accordion-content">
        <hr />
        <ul class="category-list">
          <li
            v-for="category in categories"
            :key="category.id"
            @click="goToCategoryView(category.id)"
            class="category-item">
            <span class="category-text">{{ category.name }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </aside>
</template>

<style scoped>
.category-accordion {
  background-color: var(--color-secondary-mid);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-elevation-low);
  padding: 0;
  width: min(93.5vw, 40rem);
  border: solid 1px var(--color-primary-midlight);
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.accordion-header:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.accordion-title {
  font-family: "Playwrite DK Uloopet", cursive;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
}

.accordion-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  color: var(--color-primary-mid);
}

.accordion-icon svg {
  transition: transform 0.3s ease;
}

.accordion-icon .rotated {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 1rem 1rem 1rem;
}

hr {
  border: none;
  border-top: solid 1px var(--color-primary-midlight);
  width: calc(100% + 2rem);
  margin-left: -1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  font-family: "DM Sans", sans-serif;
  font-weight: 300;
  margin-block: 0.75rem;
  line-height: 2.5ex;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
}

.category-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(2px);
}

.category-item:active {
  font-weight: 700;
}

.category-text {
  display: block;
}

/* Transition animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
}

@media screen and (min-width: 992px) {
  .category-accordion {
    max-width: 15rem;
    margin-right: 0.5rem;
  }
}
</style>
