<template>
    <div class="profile-form">
      <h2>Profile Information</h2>
      
      <form @submit.prevent="submitForm">
        <!-- Name -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="profile.name" required />
        </div>
  
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="profile.email" required />
        </div>
  
        <!-- College -->
        <div class="form-group">
          <label for="college">College</label>
          <select id="college" v-model="profile.college" required>
            <option disabled value="">Please select your college</option>
            <option v-for="college in colleges" :key="college" :value="college">
              {{ college }}
            </option>
          </select>
        </div>
  
        <!-- Major -->
        <div class="form-group">
          <label for="major">Major</label>
          <input type="text" id="major" v-model="profile.major" />
        </div>
  
        <!-- Area of Interest -->
        <div class="form-group">
          <label for="interest">Area of Interest</label>
          <div class="tags-input">
            <span
                v-for="(interest, index) in profile.interests"
                :key="index"
                class="tag"
            >
                {{ interest }}
                <button type="button" @click="removeInterest(index)">x</button>
            </span>
            
            <input
                type="text"
                v-model="newInterest"
                @keydown.enter.prevent="addInterest"
                placeholder="Type to add or select below"
            />
            </div>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const profile = reactive({
    name: '',
    email: '',
    college: '',
    major: '',
    interest: ''
  });
  
  const colleges = [
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
  ];
  
  function submitForm() {
    console.log('Profile submitted:', profile);
  }
  </script>
  
  <style scoped>
  .profile-form {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    background-color: #333;
    border: 3px solid #565555;
    border-radius: 8px;
    box-shadow: 10px 15px 15px rgba(80, 80, 80, 0.653);
  }
  
  .form-group {
    margin-bottom: 1rem;
    /* display: flex; */
    /* text-align: left; */
    /* flex-direction: row;
    gap: 15px;
    text-align: left;
    justify-content: space-around; */
  }
  
  label {
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input,
  select {
    width: 90%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  select {
    appearance: none;
    width: 95%;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>