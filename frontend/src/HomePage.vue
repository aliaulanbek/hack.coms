<script setup>
import ChatArea from './components/ChatArea.vue';
import BrowseArea from './components/BrowseArea.vue';
import MessageArea from './components/MessageArea.vue';
import EditProfile from './components/EditProfile.vue';
import Profile from './components/Profile.vue';

import { ref } from 'vue';

const isEditProfile = ref(false);

const isMessaging = ref(false);
const currChat = ref('');

function toggleMessage(chat) {
  currChat.value = chat;
  isMessaging.value = !isMessaging.value;
  console.log(isMessaging);
  console.log(currChat);
}

function toggleEditProfile() {
  isEditProfile.value = !isEditProfile.value
}

const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="container">
    <div>
        <nav class="navbar">
            <div class="brand">ALANA.CONNECT | Welcome, {{ user.name }}</div>
            <div class="nav-options" v-if="!isEditProfile">
                <button @click="toggleEditProfile">Edit Profile</button>
            </div>
        </nav>
        <div class="two-column" v-if="!isEditProfile" >
            <ChatArea @toggle-event="toggleMessage" class="chat-area" :user="user" @open-message="toggleMessage"></ChatArea>
            <MessageArea @toggle-event="toggleMessage" v-if="isMessaging" class="browse-area" :chat="currChat" :email="user.email"></MessageArea>
            <BrowseArea @toggle-event="toggleMessage" v-else-if="!isMessaging" class="browse-area"></BrowseArea>
        </div>
    </div>

    <div v-if="isEditProfile">
        <EditProfile :toggleProfile="toggleEditProfile"></EditProfile>
    </div>
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
  /* border: 2px solid red;;
 */
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