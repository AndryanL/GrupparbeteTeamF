<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    instructions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ol>
    <li v-for="(instruction, id) in instructions" :key="id">
      <div class="checkarea">
        <input class="check" type="checkbox" name="{{ instruction }}" />
      </div>

      <label :for="instruction">{{ instruction }}</label>
    </li>
  </ol>
</template>

<style scoped>
ol {
  padding-left: 0;
  width: 100%;
  flex: 1;
}
li {
  font-family: "Comfortaa";
  padding: 0.75rem 1rem;
  color: #31180c;
  list-style: none;
  margin-bottom: 0.5rem;
  border: solid 1px var(--color-primary-midlight);
  border-radius: 0.5rem;
  background-color: var(--color-secondary-mid);
  box-shadow: var(--shadow-elevation-low);
  display: flex;
  align-items: center; /* Align checkbox and label vertically */
  position: relative; /* Needed for absolute positioning */
  min-height: 3rem; /* Optional: ensure minimum height */
}

.checkarea {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: solid 1px var(--color-primary-midlight);
}

/* Adjust label to make space for the checkarea */
li label {
  margin-left: 3rem; /* width + margin-right */
  flex: 1;
}
</style>
