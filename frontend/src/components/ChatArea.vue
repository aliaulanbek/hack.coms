<script setup>
import { ref, defineEmits } from 'vue';
import ChatList from './ChatList.vue'

const props = defineProps({
    user: Object,
});

const emit = defineEmits(['open-message']);

function openMessage(name) {
    emit('open-message', name);
}
</script>

<template>
    <div>
        <nav class="navbar">
            <div class="brand">Messages</div>
            
            <div class="nav-links">
                <button>Requests</button>
            </div>
        </nav>

        <ChatList :user="user" @open-message="openMessage"></ChatList>
    </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
}
.navbar .brand {
    font-size: 1.5rem;
    font-weight: bold;
}
.navbar .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
}
.navbar .nav-links a:hover {
    color: #ddd;
}
</style>