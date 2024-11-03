<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
    name: String,
})

const emit = defineEmits(['open-message']);

function openMessage() {
    console.log(props.name);
    emit('open-message', props.name);
}
</script>

<template>
<div>
    <button @click="openMessage">
        <p>{{ name }}</p>
    </button>
</div>
</template>

<style scoped>
button {
    width: 100%;
    height: 15vh;
    border-radius: 0px;
}
</style>