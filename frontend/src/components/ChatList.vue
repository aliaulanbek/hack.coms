<script setup>
const currChats = ref(['a']);

const props = defineProps({
    user: Object,
});

async function getChats() {
    const chatsRef = fireRef(database, `userMessages/${props.user.email.replaceAll('.', '_')}`);

    onValue(chatsRef, (snapshot) => {
        const chats = snapshot.val();
        if (chats) {
            currChats.value = chats;
        } else {
            currChats.value = [];
        }
    });
}

onMounted(() => {
    getChats();
});

const emit = defineEmits(['open-message']);

function openMessage(name) {
    emit('open-message', name);
}

import ChatCard from './ChatCard.vue';
import {onMounted, ref, defineEmits} from 'vue';
import { database, set, get, ref as fireRef, onValue } from '../firebase';
</script>

<template>
<div class="scrollable">
    <ChatCard v-for="(d, index) in currChats" :key="index" :name="d" @open-message="openMessage"></ChatCard>
</div>
</template>

<style>
.scrollable {
    max-height: 80vh;
    overflow-y: auto;
}
</style>