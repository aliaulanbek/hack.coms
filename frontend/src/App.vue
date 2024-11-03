<script setup>
import GoogleSignIn from './components/GoogleSignIn.vue';
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
import CalendarInvite from './components/CalendarInvite.vue';
</script>

<template>
  <GoogleSignIn></GoogleSignIn>
  <div class="two-column">
    <CalendarInvite></CalendarInvite>
    <ChatArea class="chat-area"></ChatArea>
    <BrowseArea class="browse-area"></BrowseArea>
  </div>
  <HelloWorld msg="Vite + Vue" />
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
