<template>
    <div class="receptWrapper">
        <div class="receptOverview" v-for="recipe in recipes" :key="recipe.id">
            <p class="receptInfo">
                <span data-ingredient-count>{{recipe.ingredientCount}}</span>&nbsp;<span>Ingredienser / </span>
                <span data-time-count>{{recipe.time}}</span>&nbsp;<span>minuter</span>
            </p>
            <ul class="receptRating">
                <li class="rating" v-for="n in recipe.rating" :key="n"></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .receptOverview{
        width: 400px;
        display: flex;
        align-items: center;
        
        border-radius: 10px;
        background: #381C10;
        color: #FFC2CA;

        font-family: "Playwrite DK Uloopet", cursive;
        font-size: 16px;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        
    }

    .receptInfo{
        padding: 0 20px;
        white-space: nowrap;
    }

    .receptRating{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 5px;

        padding: 20px 25px;
        
        background: #FFC2CA;
        border-radius: 0 10px 10px 0;
    }

    .rating{
        width: 16px;
        height: 12px;
        background: url(/src/assets/rating.svg);
    }
    
    .rating:last-child{
        background: url(/src/assets/rating-half.svg);
    }

</style>

<script setup>
import { ref } from 'vue'

const recipes = ref([{ingredientCount: 5, time: 15, rating: 5, id: 1, name: "blabla"}]);

// const recipe = ref({ingredientCount: 5, time: 15, rating: 5, id: 1, "name": "blabla"});

</script>