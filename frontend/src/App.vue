<script setup>
import SignInPage from './components/SignInPage.vue';
import HomePage from './HomePage.vue';

import { ref } from 'vue';

let signedIn = ref(false);
let currentUser = ref(null);

function signIn(user) {
  currentUser.value = user;
  signedIn.value = true;
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
