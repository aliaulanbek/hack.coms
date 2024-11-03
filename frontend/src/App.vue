<script setup>
import SignInPage from './components/SignInPage.vue';
import HomePage from './HomePage.vue';

import { ref } from 'vue';
import { database, set, get, ref as fireRef } from './firebase';

let signedIn = ref(false);
let currentUser = ref(null);

async function signIn(user) {

  currentUser.value = user.value;
  signedIn.value = true;

  const userRef = fireRef(database, `users/${currentUser.value.email.replaceAll('.', '_')}`);

  try {
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      await set(userRef, {
        name: currentUser.value.name,
        email: currentUser.value.email,
      })
    } else {
      console.log('user already exists');
    }
  } catch(error) {
    console.error(error);
  }
  
}
</script>

<template>
  <div v-if="!signedIn">
    <SignInPage @signin-event="signIn"></SignInPage>
  </div>
  <div v-else>
    <!-- pass in user -->
    <HomePage></HomePage>
  </div>
</template>

<style scoped>

</style>
