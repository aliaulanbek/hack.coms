<script setup>
import { defineEmits, defineProps, onMounted, ref } from 'vue';
import { database, set, get, ref as fireRef, onValue } from '../firebase';

const props = defineProps({
    chat: String,
    email: String,
});

const emit = defineEmits(['toggle-event']);

function closeMessage() {
    emit('toggle-event');
}

const messages = ref([]);
const recipient = ref('');

function getMessages() {
    const messagesRef = fireRef(database, `messages/${props.chat}`);

    onValue(messagesRef, (snapshot) => {
        const messageData = snapshot.val();
        if (messageData) {
            messages.value = messageData.messages;
            recipient.value = messageData.participants[0] == props.email.replaceAll('_', '.') ? messageData.participants[1] : messageData.participants[0];
        } else {
            messages.value = [];
        }
    });
}

onMounted(() => {
    getMessages();
});

</script>

<template>
<div>
    <nav class="navbar">
        <div class="brand">{{ recipient }}</div>
        
        <div class="nav-links">
            <button @click="closeMessage">Close</button>
        </div>
    </nav>
    <div>
        <ul>
            <li v-for="message in messages">{{ message.content }}</li>
        </ul>
    </div>
</div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
}
.navbar .brand {
    font-size: 1.5rem;
    font-weight: bold;
}
.navbar .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
}
.navbar .nav-links a:hover {
    color: #ddd;
}
</style>