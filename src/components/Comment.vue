<script setup>
import { ref, onMounted } from 'vue'

const TEAM_ID = 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c'

const props = defineProps({
  recipeId: {
    type: String,
    required: true
  }
})

const comments = ref([])
const loading = ref(true)
const error = ref(null)

async function loadComments () {
  try {
    const res = await fetch(`/api/v1/${TEAM_ID}/recipes/${props.recipeId}/comments`)
    if (!res.ok) throw new Error('Kunde inte hämta kommentarer')
    comments.value = await res.json()
  } catch (e) {
    error.value = e.message || 'Något gick fel'
  } finally {
    loading.value = false
  }
}

onMounted(loadComments)

function formatDate (iso) {
  return new Date(iso).toLocaleDateString('sv-SE')
}
</script>

<template>
  <section v-if="loading">Laddar kommentarer…</section>
  <section v-else-if="error">{{ error }}</section>

  <section v-else>
    <article
      v-for="c in comments"
      :key="c.id"
      class="comment-card"
    >
      <header class="comment-header">
        <h3 class="comment-name">{{ c.name || 'Anonym' }}</h3>
        <span class="comment-date">{{ formatDate(c.createdAt) }}</span>
      </header>
      <p class="comment-text">{{ c.comment }}</p>
    </article>
  </section>
</template>

<style scoped>
.comment-card {
  background: #FFC2CA;
  border-radius: 16px;
  margin: 12px;
  padding: 13px 26px 13px 26px;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.comment-name {
  font-weight: 600;
  font-family: "Comfortaa", sans-serif;

}
.comment-text {
  margin: 0;
  font-family: "Comfortaa", sans-serif;
}
.comment-date {
  font-size: 0.875rem;
  font-family: "Comfortaa", sans-serif;
  color: #31180c;
}
</style>
