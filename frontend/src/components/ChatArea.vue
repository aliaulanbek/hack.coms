<script setup>
import ChatList from './ChatList.vue'
</script>

<template>
    <div>
        <nav class="navbar">
            <div class="brand">Messages</div>
            
            <div class="nav-links">
                <button>Requests</button>
            </div>
        </nav>

        <ChatList></ChatList>
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