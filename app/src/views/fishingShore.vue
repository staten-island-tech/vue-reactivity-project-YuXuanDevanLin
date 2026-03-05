<template>
  <div class="container">
    <h1>Cookie Clicker</h1>
    <h2>{{ count }}</h2>
    <img class="Blseba" @click="increment" src="/BlackSeaBass.png" alt="" />
    <button @click="reset">reset</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
function reset() {
  count.value = 0
}
</script>

<style scoped>
img {
  width: 200px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
}
</style>