<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const user = computed(() => usePage().props.auth?.user);

function logout() {
    router.post('/logout');
}
</script>

<template>
    <header class="bg-white shadow-sm border-b border-gray-200">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">

                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="/" class="flex items-center gap-2.5 shrink-0">
                        <div
                            class="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                            Q
                        </div>
                        <span class="text-sm font-medium tracking-wide text-gray-900">Quizly</span>
                    </a>
                </div>

                <!-- Nav links -->
                <div class="hidden md:flex space-x-8">
                    <Link href="/jouer" class="text-gray-600 font-medium transition hover:text-indigo-600">
                        Jouer
                    </Link>
                    <Link href="/classement" class="text-gray-600 font-medium transition hover:text-indigo-600">
                        Classement
                    </Link>
                    <Link v-if="user" href="/dashboard"
                        class="text-gray-600 font-medium transition hover:text-indigo-600">
                        Dashboard
                    </Link>
                </div>

                <!-- Auth buttons -->
                <div class="flex items-center gap-1.5">
                    <template v-if="user">
                        <span class="text-sm text-gray-500 font-medium px-2">
                            {{ user.name }}
                        </span>
                        <button @click="logout"
                            class="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                            Se déconnecter
                        </button>
                    </template>

                    <template v-else>
                        <a href="/login"
                            class="bg-indigo-50 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition">
                            Se connecter
                        </a>
                        <a href="/register"
                            class="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-black transition">
                            Créer un compte
                        </a>
                    </template>
                </div>

            </div>
        </nav>
    </header>
</template>