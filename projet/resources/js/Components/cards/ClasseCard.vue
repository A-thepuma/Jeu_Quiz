<script setup lang="ts">
interface Props {
  variant?: "default" | "strong";
  class?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "default",
});
</script>

<template>
  <div
    :class="[
      variant === 'strong' ? 'glass-strong' : 'glass',
      'rounded-2xl',
      $attrs.class
    ]"
  >
    <slot />
  </div>
</template>