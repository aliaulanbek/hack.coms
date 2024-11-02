<script>
export default{
    components: {ChatCard},

    data() {
        return {data: ['hi', 'hello', 'hey', 'hi', 'hello', 'hey',]}
    }
}

import ChatCard from './ChatCard.vue';
</script>

<template>
<div class="scrollable">
    <ChatCard v-for="(d, index) in data" :key="index" :name="d"></ChatCard>
</div>
</template>

<style>
.scrollable {
    max-height: 80vh;
    overflow-y: auto;
}
</style>