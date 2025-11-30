<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: this.modelValue,
    };
  },
  watch: {
    modelValue(val) {
      this.text = val;
    },
  },
  methods: {
    updateValue() {
      this.$emit("update:modelValue", this.text);
      this.$emit("search", this.text);
    },
    clearInput() {
      this.text = "";
      this.$emit("update:modelValue", "");
      this.$emit("search", "");
    },
  },
};
</script>

<template>
  <div class="search-wrapper">
    <img src="@/assets/icons/search.svg" alt="Sök" class="icon" />

    <input
      v-model="text"
      @input="updateValue"
      type="text"
      placeholder="Sök recept..."
      class="search-input"
    />

    <button
      v-if="text"
      @click="clearInput"
      class="clear-btn"
      aria-label="Rensa sökfält"
    >
      ✖
    </button>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  width: min(93.5vw, 25rem);
  margin: 0.5rem;
  padding: 0.5rem 0.75rem;
  box-shadow: var(--shadow-elevation-low);
  border-radius: 0.5rem;
  background: var(--color-primary-light);
  position: relative;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  font-family: comfortaa;
  color: var(--color-primary-mid);
  background: transparent;
}

.search-input::placeholder {
  color: var(--color-primary-mid);
}

.clear-btn {
  background: transparent;
  color: var(--color-primary-mid);
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.clear-btn:hover {
  opacity: 1;
}
</style>
