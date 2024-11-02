<template>
  <div class="everything">
    <nav class="navbar">
        <div class="brand">Mentor Database</div>
      
        <div class="nav-options">
          <button @click="chooseDb('student')">Students</button>
          <button @click="chooseDb('alumni')">Alumni</button>
          <button @click="chooseDb('professional')">Professionals</button>
        </div>
    </nav>
    
    <div class="box filter">
      <h3 class="filter-title">Filters</h3>
      <div class="filter-forms">
        <div class="filter-item">
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" placeholder="Enter name" />
        </div>
        <div class="filter-item">
          <label for="area-of-interest">Area of Interest</label>
          <select v-model="areaOfInterest" placeholder="Select">
            <option v-for="option in areasOfInterest" :value="option">{{ option }}</option>
          </select>
        </div>

        <div class="filter-item" v-if="database==='student' || database === 'alumni'">

          <label for="colleges">Academic College</label>
          <select  v-model="college">
            <option v-for="option in colleges" :value="option">{{ option }}</option>
          </select>
        </div>

        <div class="filter-item" v-if="database==='professional'">
          <label for="company">Company</label>
          <input  v-model="company" type="text" id="company" placeholder="Enter company" />
        </div>

        <div class="filter-item" v-if="database==='professional'">
          <label for="field">Field</label>
          <input  v-model="field" type="text" id="field" placeholder="Enter field" />
          {{ name }}
        </div>
      </div>

      <div class="buttons">
        <button @click="clearFilters" class="clear">Clear Filters</button>
        <button @click="search" class="search">Search</button>
      </div>
    </div>

    

    <div class="box database">
    </div>

  </div>
</template>

<script setup>

  import { ref } from 'vue';
  // filters:
  const name = ref("");
  const areaOfInterest = ref("");
  const college = ref("");
  const company = ref("");
  const field = ref("");
  const filters = ref([name, areaOfInterest, college, company, field])

  const areasOfInterest = ref(["Academic Development", "Career Development", "Mock Interview", "Resume Review", "Personal Experiences"])
  const database = ref("student");
  const colleges = ref([
    "College of Art and Design",
    "Saunders College of Business",
    "Golisano College of Computing and Information Sciences",
    "Kate Gleason College of Engineering",
    "College of Engineering Technology",
    "College of Health Sciences and Technology",
    "College of Liberal Arts",
    "National Technical Institute for the Deaf",
    "College of Science",
    "Golisano Institute for Sustainability",
    "School of Individualized Study"
  ]);

  const chooseDb = (value) => {
    database.value = value;
  }

  const clearFilters = () => {
    console.log(filters.value);
    
    filters.value.forEach(val => {
      val.value = "";
    })
  }
</script>

<style scoped>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
}

.filter-title {
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(81, 80, 80);
}
.everything {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
.navbar .nav-options button {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}
.navbar .nav-options button:hover {
  color: #ddd;
}

.box {
  border: 1px solid #ddd;
  overflow: auto;
  margin: 15px;
  border-radius: 10px;
  background-color: #333;
}

.box.database {
  flex-grow: 1;
}

.box.filter {
  padding: 10px 15px; 
  text-align: left;
}

.filter-item {
  display: flex;
  flex-direction: column;
}

.filter-forms {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: 30px;
  margin: 10px;
}
label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, select{
  font-size: 14px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
}

select {
  /* background-color: red; */
  appearance: none;
}
input:focus {
  /* border: 1px solid red; */
  outline: 1px solid #9c9c9c;
}

input:hover {
  outline: 1px solid #9c9c9c;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  gap: 10px;
}

.search {
  background-color: #536745;
}
.clear {
  background-color: #784646;
}
</style>