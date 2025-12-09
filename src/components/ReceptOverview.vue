<template>
    <div class="receptWrapper">
        <div class="receptOverview">
            <p class="receptInfo">
                <span data-ingredient-count>{{ ingredientCount }}</span>&nbsp;<span>Ingredienser / </span>
                <span data-time-count>{{time}}</span>&nbsp;<span>minuter</span>
            </p>
            <ul class="receptRating">
                <li
                    v-for="n in averageRating"
                    :key="n"
                    class="rating"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  ingredientCount: Number,
  time: Number,
  rating: {
    type: Array,
    default: () => [],
  },
});

const averageRating = computed(() => {
  if (!props.rating.length) return 0;

  const sum = props.rating.reduce((acc, n) => acc + n, 0);
  const avg = sum / props.rating.length;

  return Math.round(avg);
});

</script>

<style scoped>
    .receptOverview{
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
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



<!-- <script setup>
import { ref } from 'vue'

// const recipes = ref([{ingredientCount: 5, time: 15, rating: 5, id: 1, name: "name"}]);

</script> -->