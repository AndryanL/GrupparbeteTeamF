<template>
  <div>
    <!-- Search input -->
    <fieldset>
      <input
        class="inputField" 
        type="text"
        v-model="searchQuery"
        @input="debouncedSearch"
        placeholder="Search for recipes..."
      />
    </fieldset>

    <!-- Display results -->
    <div v-if="recipes.length">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')   // VUE переменная для ввода
const recipes = ref([])       // массив найденных рецептов
const UrlAPI = 'lalala';              // адресс для API

// Простая функция дебаунса
function debounce(fn, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

// Функция поиска через fetch
async function handleSearch() {
  // Если поле пустое, очищаем результаты
  if (!searchQuery.value) {
    recipes.value = []
    return
  }

  try {
    // Отправляем GET-запрос на ваш API
    const response = await fetch(`${UrlAPI}?query=${encodeURIComponent(searchQuery.value)}`)
    
    // Проверка, что ответ успешный
    if (!response.ok) throw new Error('Ошибка при получении данных с API')

    // Парсим JSON
    const data = await response.json()

    // Сохраняем результаты (предположим, что API возвращает объект с массивом results)
    recipes.value = data.results || []
  } catch (error) {
    console.error('Fetch error:', error)
    recipes.value = []
  }
}

// Создаем "дебаунс" версию функции поиска
const debouncedSearch = debounce(handleSearch, 400)
</script>

<style scoped>
fieldset {
  outline: none;
  border: none;
  padding: 0;
}

input.inputField {
  width: 266px;
  padding: 13.5px 20px;
  border-radius: 5px;
  background: #F4F4E4;
  color: #A9816E;
  border: none;
}
input.inputField:focus{
  outline: 1px solid #A9816E;
}
</style>
