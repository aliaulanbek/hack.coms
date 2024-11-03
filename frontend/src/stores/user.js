// src/stores/user.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from '../firebase';

export const useUserStore = defineStore('user', () => {
  let user = ref(null); // This will hold user data
  let accessToken = ref(null); // This will hold the Google access token

  // Sign-in function


  async function initGoogleAuth() {
    const clientId = '71238098185-3dge56oq7mkg9nenacijr5e816kgcumv.apps.googleusercontent.com';
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);
    
    return new Promise((resolve) => {
      script.onload = () => {
        // Initialize Google Auth
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
          scope: 'https://www.googleapis.com/auth/calendar.events',
        });
        resolve();
      };
    });
  }
  

  async function signInWithGoogle() {

    await initGoogleAuth();
    const provider = new GoogleAuthProvider();

    // Add 'https://www.googleapis.com/auth/calendar.events' to the provider scope
    provider.addScope('https://www.googleapis.com/auth/calendar.events');

    try {
      const result = await signInWithPopup(auth, provider);

      // Firebase User object
      user.value = result.user; 
      console.log("User signed in:", user.value);

      // Access the OAuth access token from the credential object
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential && credential.accessToken) {
        accessToken.value = credential.accessToken; // Assign to reactive `accessToken`
        console.log("Access Token:", accessToken.value);
      } else {
        throw new Error('Failed to retrieve access token');
      }
      console.log("Access Token:", accessToken.value);
      
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  }


  
  
  // Sign-out function
  async function signOutUser() {
    try {
      await signOut(auth);
      user.value = null; // Clear user data after sign-out
      accessToken.value = null; // Clear access token on sign-out
      console.log("User signed out");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  }


  //OAuth2 token


  
  
  function handleCredentialResponse(response) {
    const credential = response.credential;
    // Decode the ID token to get user info (already done)
    const payload = JSON.parse(atob(credential.split('.')[1]));
  
    // Request the access token using gapi
    getAccessToken();
  }
  
  async function getAccessToken() {
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: '71238098185-3dge56oq7mkg9nenacijr5e816kgcumv.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar.events',
      callback: (response) => {
        const accessToken = response.access_token;
        userStore.accessToken = accessToken; // Store the access token
        console.log("Access Token:", accessToken);
      },
    });
  
    tokenClient.requestAccessToken(); // This will prompt the user to grant permission
  }






  return { user, accessToken, initGoogleAuth, signInWithGoogle, signOutUser, getAccessToken };
});

