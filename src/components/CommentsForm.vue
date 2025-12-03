<template>
  <fieldset class="comment-box">
    <legend>Lämna en kommentar</legend>

    <InputField 
      placeholder="Ditt namn"
      v-model="name"
    />
    <br/>
    <InputField 
      placeholder="Din kommentar"
      v-model="text"
    />
    <br/>
    <SubmitButton 
      text="Skicka"
      @click="addComment"
    />
  </fieldset>

  <div class="comments">
    <div class="comment" v-for="c in comments" :key="c.id">
      <strong>{{ c.name }}</strong> — <small>{{ c.date }}</small>
      <p>{{ c.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from './InputFieldForCommentsForm.vue';
import SubmitButton from './SubmitButton.vue';

const name = ref('');
const text = ref('');
const comments = ref([]);

function addComment() {
  if (!name.value || !text.value) return;

  comments.value.push({
    id: Date.now(),
    name: name.value,
    date: new Date().toLocaleDateString(),
    text: text.value
  });

  name.value = '';
  text.value = '';
}
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
