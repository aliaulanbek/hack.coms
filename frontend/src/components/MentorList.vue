<script setup>

import Profile from './Profile.vue';

    const props = defineProps({
        mentors: Array, 
    }); 
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
        <Profile v-for="(d, index) in props.mentors" :key="index" :value="d"></Profile>
    </div>
</template>

<style>
.scrollable {
    max-height: 80vh;
    overflow-y: auto;
}
</style>