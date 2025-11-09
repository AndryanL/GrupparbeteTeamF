<script>
    import { getRecipes } from "../MockApiData.js";

    export default {
        data() {
            return {
                recipes: getRecipes(),
            }
        },
        props: {
            title: String,
            description: String,
            rating: Number,
            ingredientCount: Number,
            cookTimeMinutes: Number,
        },
        
    }
</script>

<template>
    <div class="card-container">
        <div class="card-imagewrapper">
            <img src="../assets/images/placeholder-image.jpg" :alt="title">
        </div>
        <div class="card-content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <RatingDisplay>Test</RatingDisplay>
            <div class="recipe-overview-short">
                <p>{{ ingredientCount }} ingredients</p>
                <p>{{ cookTimeMinutes }} minutes</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-container {
        container-type: inline-size;
        container-name: recipe-card;
        max-width: calc(100vw / 3);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        background-color: var(--color-secondary-light);
    }

    .card-imagewrapper{
        width: 100px;
    }

    .card-imagewrapper>img {
        width: 100%;
        height: auto;
    }
    
    .card-content {
        display: flex;
        flex-direction: column;
    }

    .recipe-overview-short {
        display: flex;
    }

    @container recipe-card (width > 500px) {
        .card-container {
            flex-direction: row;
        }
    }
</style>
