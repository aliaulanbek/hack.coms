<script>
export default {
    data() {
        return {
            name: 'Person A',
            messages: ['hi', 'hi', 'hi'],
        }
    },

    methods: {
        closeMessage() {
            console.log('hi');
            this.$emit('toggle-event');
        }
    }
}
</script>

<template>
<div>
    <nav class="navbar">
        <div class="brand">{{ name }}</div>
        
        <div class="nav-links">
            <button @click="closeMessage">Close</button>
        </div>
    </nav>
    <ul>
        <li v-for="message in messages">{{ message }}</li>
    </ul>
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