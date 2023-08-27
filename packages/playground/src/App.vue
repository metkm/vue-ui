<script setup lang="ts">
import { Input, Button, Select } from "vue-ui";

import Download from "./components/icons/Download.vue";
import { ref } from "vue";

const username = ref("");
const promise = new Promise((resolve) => {
  setTimeout(resolve, 5000);
});

const items = ["first", "second", "some long text"];
const item = ref();
</script>

<template>
  <main class="container">
    <div class="component">
      <Input v-model="username" :label="'username'" />
    </div>

    <div class="component">
      <Button :promise="promise">
        <template #icon>
          <Download />
        </template>
        <p class="w-fit">Increment</p>
      </Button>
    </div>

    <div class="component">
      <Select v-model="item" :items="items" />
      <p>Selected {{ item }}</p>
    </div>
  </main>
</template>

<style>
@media (prefers-color-scheme: dark) {
  html,
  body {
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
  border-radius: 0.5rem;
  border: 1px solid #181818;
}
</style>
