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
        <h1>{{ name }}</h1>
    </button>
</div>
</template>

<style scoped>
button {
    width: 100%;
}
</style>