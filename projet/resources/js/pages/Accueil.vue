<script setup lang="ts">
import { Sparkles, Trophy, Zap, ArrowRight } from "lucide-vue-next";

import MyHeader from "@/Components/Accueil/Header.vue";
import MyFooter from "@/Components/Accueil/Footer.vue";
import GlassCard from "@/Components/cards/GlassCard.vue";

</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">

    <MyHeader />

    <main>

      <!-- HERO -->
      <section class="relative overflow-hidden flex  justify-center">
        <div class="container py-20 md:py-32 relative">

          <div class="max-w-3xl mx-auto text-center animate-fade-up">

            <!-- badge -->
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-light text-gray-500 mb-8"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              A new way to test what you know
            </div>

            <!-- title -->
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-light">
              Think clearly.
              <br />
              <span class="italic font-light">Answer beautifully.</span>
            </h1>

            <!-- text -->
            <p class="text-lg sm:text-xl text-gray-500 font-light max-w-xl mx-auto mb-10">
              A minimalist quiz experience built for focus. Five categories, fifty questions,
              and a timer that feels like jazz.
            </p>

            <!-- buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">

              <router-link
                to="/categories"
                class="rounded-full px-8 h-12 flex items-center gap-2 bg-black text-white font-light text-base shadow-lg hover:scale-[1.02] transition"
              >
                Start quiz
                <ArrowRight class="h-4 w-4" />
              </router-link>

              <router-link
                to="/leaderboard"
                class="rounded-full px-6 h-12 flex items-center text-base font-light text-gray-500 hover:text-black transition"
              >
                View leaderboard
              </router-link>

            </div>

          </div>

          <!-- stats -->
          <div class="mt-20 md:mt-28 max-w-4xl mx-auto animate-fade-up">

            <GlassCard variant="strong" class="p-8 md:p-10">

              <div class="grid grid-cols-3 gap-8 md:gap-12 text-center">

                <!-- Categories -->
                <div>
                  <Sparkles class="h-4 w-4 mx-auto mb-3 text-gray-500" />
                  <div class="text-3xl md:text-4xl font-light mb-1">5</div>
                  <div class="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Categories
                  </div>
                </div>

                <!-- Questions -->
                <div>
                  <Zap class="h-4 w-4 mx-auto mb-3 text-gray-500" />
                  <div class="text-3xl md:text-4xl font-light mb-1">50+</div>
                  <div class="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Questions
                  </div>
                </div>

                <!-- Players -->
                <div>
                  <Trophy class="h-4 w-4 mx-auto mb-3 text-gray-500" />
                  <div class="text-3xl md:text-4xl font-light mb-1">∞</div>
                  <div class="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Players
                  </div>
                </div>

              </div>

            </GlassCard>

          </div>

        </div>
      </section>

      <!-- FEATURES -->
      <section class="container pb-24 md:pb-32">

        <div class="grid md:grid-cols-3 gap-px border border-gray-200 rounded-2xl overflow-hidden">

          <div class="bg-white p-8 md:p-10">
            <div class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">01</div>
            <h3 class="text-2xl mb-3 font-light">Calm by design</h3>
            <p class="text-gray-500 font-light leading-relaxed">
              No noise. No clutter. Only the question and your thinking.
            </p>
          </div>

          <div class="bg-white p-8 md:p-10">
            <div class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">02</div>
            <h3 class="text-2xl mb-3 font-light">Tactile timing</h3>
            <p class="text-gray-500 font-light leading-relaxed">
              A circular timer that breathes with each tick — never anxious, always alive.
            </p>
          </div>

          <div class="bg-white p-8 md:p-10">
            <div class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">03</div>
            <h3 class="text-2xl mb-3 font-light">Track every play</h3>
            <p class="text-gray-500 font-light leading-relaxed">
              Accuracy, streaks, and time, gathered into a single elegant view.
            </p>
          </div>

        </div>

      </section>

    </main>

    <MyFooter />

  </div>
</template>