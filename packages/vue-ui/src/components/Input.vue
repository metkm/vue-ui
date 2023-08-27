<script setup lang="ts" generic="T">
const id = Math.random().toString();

defineProps<{
  label: string,
  modelValue: T
}>();
</script>

<template>
  <div class="flex flex-col w-fit text-sm">
    <label :for="id" class="ml-1">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      v-model="modelValue"
      type="text"
      class="border p-2 rounded-lg"
    >
  </div>
</template>
