<script setup>
import GoogleSignIn from './components/GoogleSignIn.vue';
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
import MessageArea from './components/MessageArea.vue';

import { ref } from 'vue';

const isMessaging = ref(true);

function toggleMessage() {
  isMessaging.value = !isMessaging.value;
}
</script>

<template>
  <GoogleSignIn></GoogleSignIn>
  <div class="two-column">
    <ChatArea @toggle-event="toggleMessage" class="chat-area"></ChatArea>
    <MessageArea @toggle-event="toggleMessage" v-if="isMessaging" class="browse-area"></MessageArea>
    <BrowseArea @toggle-event="toggleMessage" v-if="!isMessaging" class="browse-area"></BrowseArea>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <GoogleSignIn />
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
