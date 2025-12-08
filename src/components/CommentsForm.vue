<template>
  <form @submit.prevent="addComment" class="comment-form">
    <fieldset class="comment-box">
      <legend class="comm">Lämna en kommentar...</legend>
      <InputField placeholder="Vad heter du?" v-model="name"
      v-on:input="toUpper"/>
      <br />
      <!-- <InputField placeholder="Din kommentar" v-model="comment" /> -->
      <textarea
        placeholder="Vad tycker du om receptet?"
        v-model="comment"
        v-on:input="toUpper"
        rows="10"
        cols="50">
      </textarea>
      <br />
      <SubmitButton text="Publicera" type="submit" />
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
    element.value = element.value.replace(/([a-ö]{1})/ui, (ch)=>{return ch.toUpperCase()});
  
    },
    
  },
  emits: ["onCommentCreated"],
};
</script>

<style scoped>
.comm{
  color: #ccc;
  font-size: 1.2em;
  margin-bottom: 10px;
  font-size: 1em;
  font-family: Playwrite DK Uloopet;
}
.comment-box {
  border: none;
  padding: 15px 15px 15px 0;
  margin-bottom: 20px;
  
}

.comment-box>input{
  margin-bottom: 5px;
  font-family: Playwrite DK Uloopet;
   
}

 .comment-box>textarea {
  width: 500px;
  height: 100px;
  resize: none;
  font-family: Playwrite DK Uloopet;
  background-color: #F4F4E4;
  padding: 10px 20px;
  border-radius: 5px;
  color: #A9816E;
  outline: none;
  border: none;

 }
 
.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.comment-box>.knapp {
 padding: 10px 40px;
 min-width: auto;
 font-size: 20px;


}

</style>
