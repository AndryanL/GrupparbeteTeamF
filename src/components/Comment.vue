<!-- src/components/Comment.vue -->
<script>
const TEAM_ID = "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c";

export default {
  name: "Comment",
  props: {
    recipeId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
      loading: false,
      error: null,
    };
  },
  created() {
    console.log("Comment created, recipeId =", this.recipeId);
    if (this.recipeId) {
      this.loadComments();
    } else {
      console.warn("Comment component created without recipeId");
      this.error = "No recipe ID provided";
    }
  },
  methods: {
    async loadComments() {
      this.loading = true;
      this.error = null;
      try {
        const url = `https://recipes.bocs.se/api/v1/${TEAM_ID}/recipes/${this.recipeId}/comments`;
        console.log("Fetching comments from", url);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Kunde inte hämta kommentarer");
        this.comments = await res.json();
        console.log("Comments loaded", this.comments);
        this.$emit("update-count", this.comments.length);
      } catch (e) {
        console.error("Comment error", e);
        this.error = e.message || "Något gick fel";
      } finally {
        this.loading = false;
      }
    },
    formatDate(iso) {
      return new Date(iso).toLocaleDateString("sv-SE");
    },
  },
};
</script>

<template>
  <section v-if="loading">Laddar kommentarer…</section>
  <section v-else-if="error">{{ error }}</section>

  <section v-else>
    <article v-for="c in comments" :key="c.id" class="comment-card">
      <header class="comment-header">
        <h3 class="comment-name">{{ c.name || "Anonym" }}</h3>
        <span class="comment-date">{{ formatDate(c.createdAt) }}</span>
      </header>
      <hr />
      <p class="comment-text">{{ c.comment }}</p>
    </article>
  </section>
</template>

<style scoped>
hr {
  border: none;
  border-top: solid 1px var(--color-secondary-dark);
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-top: 0;
}
.comment-card {
  background: var(--color-comment-bg);
  border-radius: 0.5rem;
  margin-block: 0.75rem;
  padding: 0.75rem 2rem;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
}
.comment-name {
  font-family: "Playwrite Dk Uloopet", cursive;
}
.comment-name {
  font-weight: 400;
}

.comment-text,
.comment-date {
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
}

.comment-text {
  padding-block: 1rem;
  font-size: 1rem;
}
</style>
