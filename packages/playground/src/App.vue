<script setup lang="ts">
import { Input, Button } from "vue-ui";
import "vue-ui/style.css";

import { ref } from "vue";

const username = ref("");
const promise = new Promise(resolve => {
  setTimeout(resolve, 5000);
})
</script>

<template>
  <main class="container">
    <div class="component">
      <Input v-model="username" :label="'username'" />
    </div>

    <div class="component">
      <Button :promise="promise">
        <p class="w-fit">Increment</p>
      </Button>
    </div>
  </main>
</template>

<style>
@media (prefers-color-scheme: dark) {
  html, body {
    background: #0a0a0a;
    color: white;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  gap: 1rem;
}

.component {
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid white;
}
</style>
