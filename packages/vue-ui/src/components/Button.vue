<script setup lang="ts" generic="T">
import { ref, watchEffect, HTMLAttributes } from "vue";
import Spinner from "./Icons/Spinner.vue";

interface Props extends /* @vue-ignore */ HTMLAttributes {
  promise?: Promise<T> | boolean;
}

const props = defineProps<Props>();

const showSpinner = ref(false);

watchEffect(() => {
  if (props.promise instanceof Promise) {
    showSpinner.value = true;

    props.promise.finally(() => {
      showSpinner.value = false;
    });
  } else {
    showSpinner.value = props.promise ?? false;
  }
});
</script>

<template>
  <button
    class="flex gap-2 items-center relative px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-sm transition-all"
  >
    <TransitionGroup name="icon">
      <slot v-if="showSpinner" name="spinner" key="icon-spin">
        <Spinner />
      </slot>
      <div v-else-if="$slots.icon" key="icon-user">
        <slot name="icon" class="w-5 h-5 overflow-hidden"></slot>
      </div>

      <slot></slot>
    </TransitionGroup>
  </button>
</template>

<style scoped>
.icon-leave-active,
.icon-enter-active,
.icon-move {
  transition: all 350ms ease;
}

.icon-leave-to,
.icon-enter-from {
  opacity: 0;
  scale: 0;
}

.icon-leave-active {
  position: absolute;
}
</style>
