<template>
  <div v-if="userStore.user">
    <div>
      <p>Welcome, {{ userStore.user.displayName }}</p>
      <button @click="createCalendarEvent">Create Calendar Invite</button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'; // Adjust the import path if necessary
import { ref, onMounted } from 'vue';

const userStore = useUserStore(); 
const { user, accessToken, initGoogleAuth, signInWithGoogle, signOutUser, getAccessToken } = userStore;

// Function to initialize Google Identity Services
// async function initGoogleAuth() {
//   const clientId = '71238098185-3dge56oq7mkg9nenacijr5e816kgcumv.apps.googleusercontent.com';
//   const script = document.createElement('script');
//   script.src = 'https://accounts.google.com/gsi/client';
//   script.async = true;
//   document.body.appendChild(script);
  
//   return new Promise((resolve) => {
//     script.onload = () => {
//       // Initialize Google Auth
//       window.google.accounts.id.initialize({
//         client_id: clientId,
//         callback: handleCredentialResponse,
//         scope: 'https://www.googleapis.com/auth/calendar.events',
//       });
//       resolve();
//     };
//   });
// }

// Callback to handle the response
function handleCredentialResponse(response) {
  const credential = response.credential;
  userStore.accessToken = credential; // Assuming you store the credential in your user store
  console.log("Access Token:", credential);
}

async function makeAuthorizedRequest(url) {
    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'GET', // or 'POST' depending on your API call
      headers: {
        'Authorization': `Bearer ${userStore.accessToken.value}`, // Use the token here
        'Content-Type': 'application/json',
      },
    }).then(response =>{
      console.log(response);
    });
  }
// Function to create a calendar event
async function createCalendarEvent() {
  await makeAuthorizedRequest();
  console.log(userStore);
  console.log(userStore.accessToken.value);
  

  if (!userStore.accessToken) {
    console.error('No access token found. Please log in.');
    return;
  }

  const event = {
    summary: 'Meeting with Team',
    location: '123 Main St, Anytown, USA',
    description: 'Discuss project updates and next steps.',
    start: {
      dateTime: '2024-11-10T10:00:00-07:00',
      timeZone: 'America/New_York',
    },
    end: {
      dateTime: '2024-11-10T11:00:00-07:00',
      timeZone: 'America/New_York',
    },
    attendees: [{ email: 'jxnguyen14@gmail.com' }],
  };

  try {
    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userStore.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      throw new Error('Error creating calendar event: ' + response.statusText);
    }

    const result = await response.json();
    console.log('Event created:', result);
    alert('Event created: ' + result.htmlLink); // Show link to the created event
  } catch (error) {
    console.error('Error creating calendar event:', error);
  }
}

// Initialize Google Auth on component mount
onMounted(() => {
  initGoogleAuth();
});
</script>

<style scoped>
/* Customize button appearance if needed */
</style>

