<!-- vim: set ts=4 sw=4 et: -->
<script lang="ts" setup>
    const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    <NuxtLayout name="vuetify">
    <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
    </NuxtLayout>
</template>
