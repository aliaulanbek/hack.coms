<template>
  <div>
    <nav class="navbar">
        <div class="brand">Mentor Database</div>
      
        <div class="nav-links">
            <a href="#students">Students</a>
            <a href="#alumni">Alumni</a>
            <a href="#professionals">Professionals</a>
        </div>
    </nav>
  </div>
</template>

<script setup>

</script>

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