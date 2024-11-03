<script setup>
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
import MessageArea from './components/MessageArea.vue';
import EditProfile from './components/EditProfile.vue';
import Profile from './components/Profile.vue';

import { ref } from 'vue';

const isEditProfile = ref(false);

const isMessaging = ref(true);

function toggleMessage() {
  isMessaging.value = !isMessaging.value;
  console.log(isMessaging);
}
</script>

<template>
    <div>
        <nav class="navbar">
            <div class="brand">ALANA.CONNECT</div>
            <div class="nav-options">
                <button @click="toggleEditProfile">Edit Profile</button>
            </div>
        </nav>
        <div class="two-column">
            <ChatArea @toggle-event="toggleMessage" class="chat-area"></ChatArea>
            <MessageArea @toggle-event="toggleMessage" v-if="isMessaging" class="browse-area"></MessageArea>
            <BrowseArea @toggle-event="toggleMessage" v-else-if="!isMessaging" class="browse-area"></BrowseArea>
        </div>
    </div>

    <div v-if="isEditProfile">
        <EditProfile></EditProfile>
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
  margin-bottom: 15px;
  border-radius: 10px;
}
.navbar .brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.navbar .nav-options button {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}
.navbar .nav-options button:hover {
  color: #ddd;
}
</style>