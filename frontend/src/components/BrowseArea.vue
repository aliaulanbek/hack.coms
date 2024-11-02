<template>
  <div class="everything">
    <nav class="navbar">
        <div class="brand">Mentor Database</div>
      
        <div class="nav-links">
            <a href="#students">Students</a>
            <a>|</a>
            <a href="#alumni">Alumni</a>
            <a>|</a>
            <a href="#professionals">Professionals</a>
        </div>
    </nav>

    <div class="container">
    </div>

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

.everything {
  border: 1px solid red;
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

.container {
  border: 1px solid #ddd;
}
</style>