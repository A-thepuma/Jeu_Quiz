<script setup lang="ts">
import { Link } from '@inertiajs/vue3';


let user = true;
</script>

<template>
    <header class="bg-white shadow-sm border-b border-gray-200">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">

                <div class="flex-shrink-0 flex items-center">
                    <Link href="/" class="text-2xl font-black tracking-tighter">
                        QUIZLY
                    </Link>
                </div>

                <div class="hidden md:flex space-x-8">
                    <Link href="/jouer" class="text-gray-600 font-medium transition">
                        Jouer
                    </Link>
                    <Link href="/classement" class="text-gray-600 font-medium transition">
                        Classement
                    </Link>

                    <Link v-if="user" href="/dashboard"
                        class="text-gray-600 hover:cursor-pointer font-medium transition">
                        Dashboard
                    </Link>
                </div>

                <!-- Bouton Profil ou Score (exemple) -->
                <<div class="flex items-center gap-1.5">
                    <a href="/login" class="bg-indigo-50 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition">
                        Se connecter
                    </a>

                    <a href="/register" class="bg-indigo-50 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition">
                        Créer un compte
                    </a>
            </div>
            </div>
        </nav>
    </header>
</template>