<script>
export default {
    props: {
        name: String
    }
}
</script>

<template>
<div>
    <button>
        <p>{{ name }}</p>
    </button>
</div>
</template>

<style scoped>
button {
    width: 100%;
    height: 15vh;
    border-radius: 0px;
}
</style>