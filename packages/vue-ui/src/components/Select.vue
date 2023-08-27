<script setup lang="ts" generic="T extends string">
import { ref } from "vue";
import Button from "./Button.vue";
import Expand from "./Icons/Expand.vue";
import { getWidestText } from "../utils";

const id = Math.random().toString();
const props = defineProps<{
  items: T[];
  modelValue: T;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: T): void;
}>();

const expanded = ref(false);
const width = getWidestText(props.items);

const update = (item: T) => {
  emit("update:modelValue", item);
  expanded.value = false;
};
</script>

<template>
  <div class="relative text-sm">
    <Button
      @click="expanded = !expanded"
      class="items-center gap-8 text-left"
      role="combobox"
      :aria-expanded="expanded"
      :aria-controls="id"
    >
      <span :style="{ minWidth: `${width}px` }">
        {{ modelValue ?? "Select an item" }}
      </span>
      <Expand
        class="transition-transform dark:fill-white"
        :class="{ 'rotate-180': expanded }"
      />
    </Button>
    <ul
      v-if="expanded"
      :id="id"
      class="border dark:border-neutral-800 overflow-clip absolute mt-2 divide-y dark:divide-neutral-800 rounded-lg min-w-[6rem]"
      role="listbox"
    >
      <li
        v-for="item in items"
        :key="Math.random()"
        class="bg-white dark:bg-neutral-900 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        role="option"
        @click="update(item)"
        tabindex="-1"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
