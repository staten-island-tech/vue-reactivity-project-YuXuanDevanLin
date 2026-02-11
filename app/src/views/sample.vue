<template>
  <div class="container">
    <h1>Cookie Clicker</h1>
    <h2>{{ count }}</h2>
    <img @click="increment" src="" alt="" />
    <button>reset</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
</script>

<style scoped>

</style>