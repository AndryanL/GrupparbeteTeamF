<template>
  <form @submit.prevent="addComment" class="comment-form">
    <fieldset class="comment-box">
      <legend class="comm">Lämna en kommentar...</legend>
      <!-- <InputField placeholder="Din kommentar" v-model="comment" /> -->
      <textarea
        placeholder="Vad tycker du om receptet?"
        v-model="comment"
        v-on:input="toUpper"
        rows="10"
        cols="50"
      >
      </textarea>
      <br />
      <div style="display: flex">
        <InputField
          class="name_area"
          placeholder="Vad heter du?"
          v-model="name"
          v-on:input="toUpper"
          style="width: 100%; margin-right: 5px"
        />
        <SubmitButton text="Publicera" type="submit" />
      </div>
    </fieldset>
  </form>
</template>

<script>
import InputField from "./InputFieldForCommentsForm.vue";
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
    InputField,
    SubmitButton,
  },
  data() {
    return {
      name: "",
      comment: "",
      comments: [],
    };
  },
  methods: {
    async addComment() {
      if (!this.name || !this.comment) return;

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

      this.name = "";
      this.comment = "";
    },

    toUpper(event) {
      const element = event.target;
      element.value = element.value.replace(/([a-ö]{1})/iu, (ch) => {
        return ch.toUpperCase();
      });
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
  border: none;
}

.name_area {
  font-size: 1rem;
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
</style>
