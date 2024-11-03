<script setup>
import GoogleSignIn from './GoogleSignIn.vue';

const emit = defineEmits(['signin-event']);

function signIn(user) {
    emit("signin-event", user);
}
</script>

<template>
<div>
    <div class="top-container">
        <h1>Meet your people.</h1>
        <p>With ALANAConnects, thousands of ALANA (Africa, Latin, Asian, Native American) students and professionals are just a click away.</p>
        <GoogleSignIn @signin-event="signIn" class="signin-button"></GoogleSignIn>
    </div>
    
    <div class="middle-container">
        <h2>Why network?</h2>
        <div class="items-container">
            <div>
                <img src="../../people.jpg" class="image-container">
                <p>Improve your career opportunities to find your dream job.</p>
            </div>
            <div>
                <img src="../../talking.png" class="image-container">
                <p>Collaborate with other professionals to start your ideas and projects.</p>
            </div>
            <div>
                <img src="../../working.jpg" class="image-container">
                <p>Learn new perspectives and industry standards.</p>
            </div>
        </div>

    </div>

    <div class="bottom-container">
        <h2>Join today and network with thousands of professionals from different industries.</h2>
        <p>Software Engineering | Computer Science | Data Science | UI/UX | VR/AR | Robotics | Engineering | Research | Business | Marketing</p>
    </div>
</div>
</template>

<style scoped>
.image-container {
    width: 200px;
    height: 200px;
    object-fit:cover;
    border-radius: 4px;
}

.items-container {
    display: flex;
    gap: 100px;
}

.signin-button {
    width: 200px;
    margin: auto;
}

.top-container, .bottom-container {
    background-color: #7D2223;
    padding: 40px;
}

.middle-container {
    background-color: white;
    color: #7D2223;
    text-decoration: double;
    padding: 40px;
}
</style>