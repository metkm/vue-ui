<script setup lang="ts" generic="T">
const id = Math.random().toString();

defineProps<{
  label?: string,
  modelValue?: T
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void
}>();
</script>

<template>
  <div class="flex flex-col text-sm dark:text-white">
    <label v-if="label" :for="id" class="ml-1">{{ label }}</label>
    <input
      :id="id"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      class="p-2 dark:bg-neutral-950
        border-2 dark:border-neutral-800 rounded-lg"
    >
  </div>
</template>
