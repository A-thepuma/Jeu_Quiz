<script setup lang="ts">
import { ref, onMounted } from "vue";

import MyHeader from "@/Components/Accueil/Header.vue";
import MyFooter from "@/Components/Accueil/Footer.vue";
import GlassCard from "@/Components/cards/ClasseCard.vue";

const rows = ref([
  { userId: 1, userName: "Alice", total: 1200, plays: 12, bestAccuracy: 92 },
  { userId: 2, userName: "Bob", total: 980, plays: 10, bestAccuracy: 88 },
  { userId: 3, userName: "Charlie", total: 870, plays: 8, bestAccuracy: 85 },
]);

const user = ref({ id: 1 }); // mock user (à remplacer auth plus tard)

function getIcon(index: number) {
  if (index === 0) return "👑";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return null;
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <MyHeader />

    <main class="flex-grow">
      <section class="container py-12 md:py-20 max-w-4xl mx-auto">

        <!-- Header -->
        <div class="mb-10">
          <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-light">
            Leaderboard
          </p>
          <h1 class="text-4xl md:text-5xl font-light mb-3 text-gray-900">
            Top of the table.
          </h1>
          <p class="text-gray-500 font-light">
            Total points across all categories.
          </p>
        </div>

        <!-- Card -->
        <GlassCard variant="strong" class="p-2 md:p-3">

          <div v-if="rows.length === 0" class="py-20 text-center">
            <p class="text-sm text-gray-500 font-light">
              No scores yet — be the first.
            </p>
          </div>

          <div v-else class="divide-y divide-gray-200/70">

            <div
              v-for="(r, i) in rows"
              :key="r.userId"
              class="relative flex items-center gap-4 px-4 md:px-5 py-4 rounded-xl"
              :class="r.userId === user.id ? 'bg-black/5' : ''"
            >

              <!-- left line podium -->
              <span
                v-if="i < 3 && i  == 0"
                class="absolute left-0 top-3 bottom-3 w-px bg-sky-400"
              />
              <span
                v-if="i < 3 && i  == 1"
                class="absolute left-0 top-3 bottom-3 w-px bg-indigo-400"
              />
              <span
                v-if="i < 3 && i  == 2"
                class="absolute left-0 top-3 bottom-3 w-px bg-amber-400"
              />

              <!-- rank -->
              <div class="w-10 shrink-0 text-sm text-gray-500">
                <span v-if="getIcon(i)">
                  {{ getIcon(i) }}
                </span>
                <span v-else class="text-gray-400">
                  {{ String(i + 1).padStart(2, "0") }}
                </span>
              </div>

              <!-- user info -->
              <div class="flex-1 min-w-0">
                <p class="font-light truncate">
                  {{ r.userName }}

                  <span
                    v-if="r.userId === user.id"
                    class="text-[10px] uppercase tracking-[0.2em] text-black ml-2"
                  >
                    you
                  </span>
                </p>

                <p class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light mt-0.5">
                  {{ r.plays }} {{ r.plays === 1 ? "play" : "plays" }} · best {{ r.bestAccuracy }}%
                </p>
              </div>

              <!-- score -->
              <div class="text-right">
                <p class="text-xl md:text-2xl font-light text-gray-900">
                  {{ r.total }}
                </p>
                <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
                  pts
                </p>
              </div>

            </div>

          </div>

        </GlassCard>
      </section>
    </main>

    <MyFooter />
  </div>
</template>