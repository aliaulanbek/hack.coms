// src/stores/user.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from '../firebase';

export const useUserStore = defineStore('user', () => {
  const user = ref(null); // This will hold user data

  // Sign-in function
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user; // Update user data after sign-in
      console.log("User signed in:", user.value);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  }

  // Sign-out function
  async function signOutUser() {
    try {
      await signOut(auth);
      user.value = null; // Clear user data after sign-out
      console.log("User signed out");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  }

  return { user, signInWithGoogle, signOutUser };
});
