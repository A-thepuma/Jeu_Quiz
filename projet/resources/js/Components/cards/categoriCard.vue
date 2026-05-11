<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  to?: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="to ?? `/quiz/${id}`"
    class="group relative block p-6 rounded-2xl border border-gray-200 bg-white
           hover:-translate-y-1 hover:border-black/20
           transition-all duration-500"
  >
    <!-- Header -->
    <div class="flex items-start justify-between mb-6">
      
      <!-- Icon box -->
      <div
        class="h-10 w-10 rounded-xl border border-gray-200 flex items-center justify-center
               group-hover:border-black/30 group-hover:shadow-md transition-all duration-500"
      >
        <!-- Icône simple (remplaçable par SVG ou lucide-vue-next) -->
        <span class="text-sm text-gray-700">★</span>
      </div>

      <!-- Count -->
      <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
        {{ count }} q
      </span>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-light mb-1.5 text-gray-900">
      {{ name }}
    </h3>

    <!-- Description -->
    <p class="text-sm text-gray-500 font-light leading-relaxed">
      {{ description }}
    </p>

    <!-- Footer -->
    <div
      class="mt-6 flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-900 transition-colors"
    >
      <span>Play</span>
      <span class="transition-transform group-hover:translate-x-0.5">→</span>
    </div>
  </a>
</template>