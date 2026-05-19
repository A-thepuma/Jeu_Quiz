<script setup lang="ts">
interface Props {
  variant?: "default" | "strong";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});
</script>

<template>
  <div :class="[
    props.variant === 'strong' ? 'glass-strong' : 'glass',
    'rounded-2xl',
    props.class
  ]">
    <slot />
  </div>
</template>