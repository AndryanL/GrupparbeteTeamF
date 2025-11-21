<script>
export default {
    name: "SearchBar",
    props: {
        modelValue: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            text: this.modelValue
        };
    },
    watch: {
        modelValue(val) {
            this.text = val;
        }
    },
    methods: {
        updateValue() {
            this.$emit("update:modelValue", this.text);
        },
        clearInput() {
            this.text = "";
            this.$emit("update:modelValue", "");
        }
    }
};
</script>

<template>
    <div class="search-wrapper">
        <img src="@/assets/icons/search.svg" alt="Sök" class="icon" />

        <input v-model="text" @input="updateValue" type="text" placeholder="Sök recept..." class="search-input" />

        <button v-if="text" @click="clearInput" class="clear-btn" aria-label="Rensa sökfält">
            ✖
        </button>
    </div>
</template>


<style scoped>
.search-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 12px;
    box-shadow: var(--shadow-elevation-low);
    border-radius: 8px;
    background: #F4F4E4;
    position: relative;
}

.icon {
    width: 20px;
    height: 20px;
    color: #A9816E;
    opacity: 0.6;
}

.search-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    font-family: comfortaa;
    color: #A9816E;
    background: transparent;
}

.search-input::placeholder {
    color: #A9816E;
}

.clear-btn {
    background: transparent;
    color: #A9816E;
    border: none;
    cursor: pointer;
    font-size: 16px;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.clear-btn:hover {
    opacity: 1;
}
</style>