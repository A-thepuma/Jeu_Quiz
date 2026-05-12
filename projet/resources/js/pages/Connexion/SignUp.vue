<script setup lang="ts">
import MyFooter from "@/Components/Accueil/Footer.vue";
import MyHeader from "@/Components/Accueil/Header.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <MyHeader />

    <main class="flex-grow flex items-center justify-center px-4 py-16">
      <div class="w-full max-w-md animate-fade-up">

        <!-- Card -->
        <div class="p-8 md:p-10 rounded-2xl shadow-xl bg-white/70 backdrop-blur border border-gray-100">

          <!-- Header -->
          <div class="mb-8">
            <h1 class="text-3xl font-light mb-2 text-gray-900">
              Create account
            </h1>
            <p class="text-sm text-gray-500 font-light">
              Start playing in under a minute.
            </p>
          </div>

          <!-- Form -->
          <form class="space-y-6">

            <!-- Name -->
            <div>
              <label class="block text-sm text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Ada Lovelace"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="ada@quizly.app"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <!-- Button -->
            <button
              type="button"
              class="w-full h-11 rounded-xl bg-black text-white font-light flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              Create account
              <span class="text-sm">→</span>
            </button>

          </form>

          <!-- Footer link -->
          <p class="mt-8 text-xs text-center text-gray-500">
            Already have an account?
            <a href="/login" class="text-black underline-offset-4 hover:underline ml-1">
              Sign in
            </a>
          </p>

        </div>
      </div>
    </main>

    <MyFooter />
  </div>
</template>