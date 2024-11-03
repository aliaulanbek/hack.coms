<template>
    <div>
      <button v-if="!userStore.user" @click="signInWithGoogle">Sign in with Google</button>
      <button v-else @click="signOutUser">Sign Out</button>
      <div v-if="user">
        <p>Welcome, {{ userStore.user.displayName }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../stores/user';
  
  const userStore = useUserStore(); // Access the store
  
  // Destructure to get user and methods from the store
  const { user, signInWithGoogle, signOutUser } = userStore;
  </script>
  
  <style scoped>
  /* Customize button appearance if needed */
  </style>
  
  