<script setup>
import GoogleSignIn from './components/GoogleSignIn.vue';
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
import MessageArea from './components/MessageArea.vue';

import { ref } from 'vue';

const isMessaging = ref(true);
const signedIn = ref(false);

function toggleMessage() {
  isMessaging.value = !isMessaging.value;
}
</script>

<template>
  <div v-if="signedIn" class="two-column">
    <ChatArea @toggle-event="toggleMessage" class="chat-area"></ChatArea>
    <MessageArea @toggle-event="toggleMessage" v-if="isMessaging" class="browse-area"></MessageArea>
    <BrowseArea @toggle-event="toggleMessage" v-else class="browse-area"></BrowseArea>
  </div>
  <div v-else>
    <h1>Sign in here</h1>
  </div>
</template>

<style scoped>
.two-column {
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100vh;
  margin: auto;
}

.chat-area {
  flex: 1;
}

.browse-area {
  flex: 3;
}
</style>
