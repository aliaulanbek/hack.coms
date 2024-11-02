<script setup>
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
</script>

<template>
  <div class="two-column">
    <ChatArea class="chat-area"></ChatArea>
    <BrowseArea class="browse-area"></BrowseArea>
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
