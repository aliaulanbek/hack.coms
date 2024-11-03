<script setup>
    const name = "alia"
    import { reactive, ref } from 'vue';

    const props = defineProps({
        value: Object, 
    }); 
    const isPickStatus = ref(true);

    const truncateBio = (bio) => {
        if (bio) {
            const maxChars = 100; // Adjust this to your desired length
            return bio.length > maxChars ? bio.slice(0, maxChars) + '...' : bio;
        }
        
    }
    const goToProfile = () => {
        // Logic to navigate to the user's profile page
    }

</script>

<template>
    <div class="card">
        <div class="card-top">
            <button class="name-button" @click="goToProfile">{{ value.name }}</button>
            <div class="right-info">
                <p class="company" v-if="value.company">Company: {{ value.company }}</p>
                <p class="yoe" v-if="value.yearsOfEx">Years of Experience: {{ value.yearsOfEx }}</p>
                <p class="interests" v-if="value.interests && value.interests.length">Interests: {{ value.interests.join(', ') }}</p>
            </div>
        </div>
        <div class="bio">{{ value.bio }}</div>
    </div>
</template>
<style>
.card {
    padding: 15px;
    border: 1px solid #564f4f;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    background-color: #2e2c2c;
    transition: box-shadow 0.3s ease;
    margin: 10px;
}

.card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.name-button {
    background: none;
    border: none;
    color: #c0c0c0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    padding: 0;
    margin-right: auto;
}

.name-button:hover {
    text-decoration: underline;
}

.right-info {
    text-align: right;
    color: #a19b9b;
    font-size: 0.9rem;
}

.company, .yoe, .interests {
    margin: 2px 0;
}

/* .bio {
    margin-top: 10px;
    color: #555;
    font-size: 0.9rem;
} */
</style>