<script setup>

import Profile from './Profile.vue';

    const name = "alia"
    // progression
    const profile = {
        name: "Alia",
        company: "Honeywell",
        field: "Software Engineering",
        demographic: "Asian",
        yearsOfEx: 12,
        linkedIn: "url",
        bio: "blah blah",
        email: "abcd@gmail.com"
    }
</script>

<template>
    <div class="scrollable">
        <!--  -->
        <!-- <Profile :profile='profile'></Profile> -->
        <!-- <ChatCard v-for="(d, index) in data" :key="index" :name="d"></ChatCard> -->
    </div>
</template>

<style>
.scrollable {
    max-height: 80vh;
    overflow-y: auto;
}
</style>