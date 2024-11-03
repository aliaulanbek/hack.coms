<script setup>
import { defineEmits, defineProps, onMounted, ref, computed } from 'vue';
import { database, set, get, ref as fireRef, onValue } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { update } from 'firebase/database';

const props = defineProps({
    chat: String,
    email: String,
});

const emit = defineEmits(['toggle-event']);

function formatTimestamp(timestamp) {
    return new Date(timestamp).toString();
}

async function onSend() {
    const newMessageRef = fireRef(database, `messages/${props.chat}/messages`);

    const uniqueID = uuidv4();

    try {
        await update(newMessageRef, {
            [uniqueID]: {
                content: inputValue.value,
                sender: props.email,
                timestamp: Date.now(),
            }
        });
    } catch(error) {
        console.error(error);
    }
    
    inputValue.value = '';
}

function closeMessage() {
    emit('toggle-event');
}

const messages = ref([]);
const recipient = ref('');
const inputValue = ref('');

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

    console.log(messages.value);
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
        <ul class="messages">
            <li v-for="message in messages"><b>{{ message.sender }}</b>: {{ message.content }} <br> <small>{{ formatTimestamp(message.timestamp) }}</small></li>
        </ul>
    </div>
    <footer>
        <div class="input-container">
            <input type="text" v-model="inputValue" placeholder="Your message..." class="bottom-input">
            <button @click="onSend" class="send-button"></button>
        </div>
    </footer>
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

.messages {
    text-align: left;
}

.input-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px;
}

.bottom-input {
  flex: 3;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.send-button {
    background-color: red;
}

.send-button:hover {
    background-color: crimson;
}
</style>