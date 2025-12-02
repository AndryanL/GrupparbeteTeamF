<script>
import iconUrl from '@/assets/images/bullet-point.svg'

export default {
    name: "IngredientsList",
    props: {
        ingredients: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            iconUrl
        }
    }
};
</script>

<template>
    <ul class="ingredients-list">
        <li v-for="(ingredient, index) in ingredients" :key="index" class="ingredients-list__item">
            <img :src="iconUrl" alt="ingredient" class="ingredient-icon" />
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        </li>
    </ul>
</template>

<style scoped>
.ingredients-list {
    list-style: none;
    margin: 0;
    padding: 20px 25px;
    background: #DCD1A7;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.ingredients-list__item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    font-style: italic;
    font-family: "Comfortaa", sans-serif;
}

.ingredient-icon {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
}

.ingredients-list__item::before {
    display: none;
}
</style>
