<script setup lang="ts">
import { Input } from "vue-ui";
import "vue-ui/style.css";

import { ref } from "vue";

const username = ref("");
</script>

<template>
  <main class="container">
    <div class="component">
      <Input v-model="username" placeholder="Search" :label="'username'" />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
}

.component {
  padding: 1rem;
  /* background: #fafafa; */
  border-radius: 1rem;
}
</style>
