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
import { onMounted } from 'vue';

const userStore = useUserStore(); // Access the store

// Destructure to get user and methods from the store
const { user, initGoogleAuth, signInWithGoogle, signOutUser } = userStore;

// Initialize Google Auth when the component is mounted
onMounted(async () => {
  try {
    await initGoogleAuth(); // Ensure the Google Auth is initialized
    console.log('Google Auth initialized.');
  } catch (error) {
    console.error('Error initializing Google Auth:', error);
  }
});
</script>

<style scoped>
/* Customize button appearance if needed */
</style>
