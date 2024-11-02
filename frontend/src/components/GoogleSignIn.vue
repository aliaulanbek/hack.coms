
<script setup>
    import { ref, onMounted } from 'vue';
    import { watch } from 'vue';


    let user = ref(null);
    let signedIn = ref(false);


    watch(user, (newValue) => {
        console.log('User changed:', newValue);
    });

    watch(signedIn, (newValue) => {
        console.log('SignedIn changed:', newValue);
    });
    // Function to handle the Google sign-in success event
    function handleCredentialResponse(response) {
        const userObject = parseJwt(response.credential);
        user.value = {
            name: userObject.name,
            email: userObject.email,
            imageUrl: userObject.picture,
        };
        signedIn.value = true;
    }

    // Function to parse the JWT token
    function parseJwt(token) {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(window.atob(payload));
        return decoded;
    }

    // Function to handle sign-out
    // Function to handle sign-out
    function signOut() {
        console.log(user);
        console.log(user.email);
        if(user.value){
            google.accounts.id.revoke(user.value.email, () => {
            user.value = null; // Reset user to null to show sign-in button again
            signedIn.value = false;
            console.log('User signed out.');
            console.log(user);
        });
        }else{
            console.log('User is already null or undefined, cannot sign out.');
        }
        
    }

    // Load and initialize the Google Sign-In button
    function initializeGoogleSignIn() {
        google.accounts.id.initialize({
        client_id: '71238098185-3dge56oq7mkg9nenacijr5e816kgcumv.apps.googleusercontent.com',
        callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' } // Customize as needed
        );
    }

    // Load the Google Identity Services library
    onMounted(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = initializeGoogleSignIn;
        document.head.appendChild(script);
    });
</script>

<template>
    <div>
      <div v-if="!user"> <!-- Show sign-in button if user is null -->
        <div id="google-signin-button"></div>
      </div>
      <div v-else> <!-- Show user info if user is not null -->
        <p>Welcome, {{ user.name }}!</p>
        <img v-if="user.imageUrl" :src="user.imageUrl" alt="User Image" /> <!-- Only show image if imageUrl is present -->
        <button @click="signOut">Sign Out</button>
      </div>
    </div>
</template>

<style scoped>
    /* Customize the button appearance if needed */
</style>
  