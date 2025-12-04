<template>
  <form @submit.prevent="addComment" class="comment-form">
    <fieldset class="comment-box">
      <legend>Lämna en kommentar</legend>

      <InputField placeholder="Ditt namn" v-model="name" />
      <br />
      <InputField placeholder="Din kommentar" v-model="comment" />
      <br />
      <SubmitButton text="Skicka" type="submit" />
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
        name: this.name /* 
        date: new Date().toLocaleDateString(), */,
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
  },
  emits: ["onCommentCreated"],
};
</script>

<style scoped>
.comment-box {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
</style>
