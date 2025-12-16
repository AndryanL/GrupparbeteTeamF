<template>
  <form @submit.prevent="addComment" class="comment-form" novalidate>
    <fieldset class="comment-box" :disabled="isSubmitting">
      <legend class="comm">Lämna en kommentar...</legend>
      <textarea
        placeholder="Vad tycker du om receptet?"
        v-model="comment"
        v-on:input="handleInput('comment')"
        rows="10"
        cols="50"
        :disabled="isSubmitting"
        :class="{ 'input-error': errors.comment && touched.comment }"
      ></textarea>
      <span v-if="errors.comment && touched.comment" class="error-message">
        {{ errors.comment }}
      </span>
      <div style="display: flex; align-items: flex-start">
        <input
          class="name_area"
          placeholder="Vad heter du?"
          v-model="name"
          v-on:input="handleInput('name')"
          style="width: 100%; margin-right: 5px"
          :disabled="isSubmitting"
          :class="{ 'input-error': errors.name && touched.name }"
        />
        <SubmitButton
          text="Publicera"
          type="submit"
          :disabled="isSubmitting || hasErrors"
        />
        <span v-if="isSubmitting" class="loading-text"> Skickar... </span>
      </div>
      <span v-if="errors.name && touched.name" class="error-message">
        {{ errors.name }}
      </span>
    </fieldset>
  </form>
</template>

<script>
import SubmitButton from "./SubmitButton.vue";
import { postComment } from "@/apiFunctions.js";

export default {
  props: {
    recipeId: {
      type: String,
      required: true,
    },
  },
  components: {
    SubmitButton,
  },
  data() {
    return {
      name: "",
      comment: "",
      comments: [],
      isSubmitting: false,
      errors: {
        name: "",
        comment: "",
      },
      touched: {
        name: false,
        comment: false,
      },
    };
  },
  computed: {
    hasErrors() {
      return this.errors.name || this.errors.comment;
    },
  },
  methods: {
    validateField(field, value) {
      if (!value || value.trim() === "") {
        return field === "name"
          ? "Namn är obligatoriskt"
          : "Kommentar är obligatorisk";
      }

      if (field === "comment" && value.trim().length < 3) {
        return "Kommentaren måste vara minst 3 tecken";
      }

      if (field === "name" && value.trim().length < 2) {
        return "Namnet måste vara minst 2 tecken";
      }

      return "";
    },

    handleInput(field) {
      // Update the field value first
      const element = event.target;
      element.value = element.value.replace(/([a-ö]{1})/iu, (ch) => {
        return ch.toUpperCase();
      });

      // Update the model
      if (field === "name") {
        this.name = element.value;
      } else {
        this.comment = element.value;
      }

      // Mark as touched
      this.touched[field] = true;

      // Validate
      this.errors[field] = this.validateField(field, this[field]);
    },

    validateForm() {
      let isValid = true;

      // Mark all fields as touched on submit
      this.touched.name = true;
      this.touched.comment = true;

      // Validate name
      this.errors.name = this.validateField("name", this.name);
      if (this.errors.name) isValid = false;

      // Validate comment
      this.errors.comment = this.validateField("comment", this.comment);
      if (this.errors.comment) isValid = false;

      return isValid;
    },

    async addComment() {
      if (!this.validateForm() || this.isSubmitting) return;

      this.isSubmitting = true;

      try {
        let comment = {
          name: this.name,
          comment: this.comment,
        };
        console.log("pre postcomment");

        await postComment(
          `https://recipes.bocs.se/api/v1/f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c/recipes/${this.recipeId}/comments`,
          comment
        );

        console.log("post postcomment");
        this.$emit("onCommentCreated");

        // Reset form
        this.name = "";
        this.comment = "";
        this.errors.name = "";
        this.errors.comment = "";
        this.touched.name = false;
        this.touched.comment = false;
      } catch (error) {
        console.error("Error posting comment:", error);
        // You might want to show an error message to the user here
      } finally {
        this.isSubmitting = false;
      }
    },
  },
  emits: ["onCommentCreated"],
};
</script>

<style scoped>
.comm {
  font-size: 1.5rem;
  color: var(--color-secondary-mid);
  margin-bottom: 10px;
  font-family: "Playwrite DK Uloopet", cursive;
}
.comment-box {
  border: none;
  margin-bottom: 20px;
  padding: 0;
}

.comment-box > input {
  margin-bottom: 5px;
  font-family: "DM Sans";
}

.comment-box > textarea {
  width: 100%;
  height: 100px;
  resize: none;
  font-family: "DM Sans";
  background-color: var(--color-secondary-mid);
  padding: 20px;
  border-radius: 0.5rem;
  color: #a9816e;
  margin-bottom: 0.15rem;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.comment-box > textarea.input-error,
.comment-box > div > input.input-error {
  border-color: #eb5c4c;
  background-color: var(--color-secondary-mid);
}

.comment-box > textarea:disabled,
.comment-box > div > input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.name_area {
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  width: 266px;
  padding: 13.5px 20px;
  border-radius: 0.5rem;
  background: #f4f4e4;
  color: #a9816e;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  font-family: "DM Sans", sans-serif;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.comment-box > .knapp {
  padding: 10px 40px;
  min-width: auto;
  font-size: 20px;
}

.loading-text {
  margin-left: 10px;
  color: var(--color-secondary-mid);
  font-family: "DM Sans", sans-serif;
  align-self: center;
}

.error-message {
  display: block;
  color: #eb5c4c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-family: "DM Sans", sans-serif;
}

.comment-box > textarea + .error-message {
  margin-top: -0.5rem;
  margin-bottom: 0.75rem;
}
</style>
