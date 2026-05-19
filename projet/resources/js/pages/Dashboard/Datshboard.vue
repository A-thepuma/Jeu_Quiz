<script setup lang="ts">
import Header from '@/Components/Accueil/Header.vue';
import Footer from '@/Components/Accueil/Footer.vue';
import CategoryCard from '@/Components/cards/categoriCard.vue';


const categories = [
    { id: "general", name: "General knowledge", description: "Questions variées sur des sujets divers.", icon: " globe-2", count: 25 },
    { id: "science", name: "Science", description: "Questions sur la physique, la chimie, et la biologie.", icon: "atom", count: 18 },
    { id: "tech", name: "Technology", description: "Questions sur l'informatique, le code et l'innovation.", icon: "laptop-code", count: 22 },
    { id: "geography", name: "Geography", description: "Questions sur les pays, les capitales et les cultures.", icon: "map", count: 15 },
    { id: "movies", name: "Movies", description: "Questions sur le cinéma, les acteurs et les réalisateurs.", icon: "clapperboard", count: 30 },
    { id: "history", name: "History", description: "Questions sur les événements historiques et les civilisations.", icon: "landmark", count: 28 },
];

</script>

<template>
    <div class="flex flex-col min-h-screen bg-white">
        <Header />


        <section class="container py-12 md:py-16  px-10">
            <!-- Header -->
            <div class="mb-10 animate-fade-up">
                <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-light">
                    Welcome back
                </p>

                <h1 class="text-4xl md:text-5xl font-light">
                    John.
                </h1>
            </div>

            <div class="grid lg:grid-cols-3 gap-6 mb-12">
                <!-- Profile -->
                <div
                    class="lg:col-span-1 p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl animate-fade-up">
                    <div class="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div
                            class="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center text-lg font-light">
                            J
                        </div>

                        <div class="min-w-0">
                            <p class="text-lg truncate font-light">
                                John
                            </p>

                            <p class="text-xs text-gray-400 font-light truncate">
                                john@example.com
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <!-- Stat -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2.5 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 18.75h-9a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9A2.25 2.25 0 0116.5 18.75z" />
                                </svg>

                                <span class="text-xs uppercase tracking-[0.18em] font-light">
                                    Total points
                                </span>
                            </div>

                            <span class="text-xl font-light">
                                1240
                            </span>
                        </div>

                        <!-- Stat -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2.5 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                                </svg>

                                <span class="text-xs uppercase tracking-[0.18em] font-light">
                                    Avg accuracy
                                </span>
                            </div>

                            <span class="text-xl font-light">
                                87%
                            </span>
                        </div>

                        <!-- Stat -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2.5 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 3c2 3 4 5 4 8a4 4 0 11-8 0c0-3 2-5 4-8z" />
                                </svg>

                                <span class="text-xs uppercase tracking-[0.18em] font-light">
                                    Best streak
                                </span>
                            </div>

                            <span class="text-xl font-light">
                                14
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Recent plays -->
                <div
                    class="lg:col-span-2 p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl animate-fade-up">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-xs uppercase tracking-[0.2em] text-gray-400 font-light">
                            Recent plays
                        </h2>

                        <a href="/leaderboard"
                            class="text-xs text-gray-400 hover:text-blue-500 inline-flex items-center gap-1 transition-colors">
                            Leaderboard

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <ul class="divide-y divide-white/10">
                        <!-- Item -->
                        <li class="flex items-center justify-between py-3.5 gap-4">
                            <div class="min-w-0">
                                <p class="text-sm font-light truncate">
                                    JavaScript Quiz
                                </p>

                                <p class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light mt-0.5">
                                    Apr 12 · 90s
                                </p>
                            </div>

                            <div class="text-right shrink-0">
                                <p class="text-lg font-light">
                                    18
                                    <span class="text-gray-400 text-sm">
                                        /20
                                    </span>
                                </p>

                                <p class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light">
                                    90% acc
                                </p>
                            </div>
                        </li>

                        <!-- Item -->
                        <li class="flex items-center justify-between py-3.5 gap-4">
                            <div class="min-w-0">
                                <p class="text-sm font-light truncate">
                                    Vue Quiz
                                </p>

                                <p class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light mt-0.5">
                                    Apr 10 · 120s
                                </p>
                            </div>

                            <div class="text-right shrink-0">
                                <p class="text-lg font-light">
                                    15
                                    <span class="text-gray-400 text-sm">
                                        /20
                                    </span>
                                </p>

                                <p class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light">
                                    75% acc
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Continue playing -->
            <div class="mb-6 flex items-end justify-between">
                <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1 font-light">
                        Continue playing
                    </p>

                    <h2 class="text-2xl md:text-3xl font-light">
                        Pick up where you left off.
                    </h2>
                </div>

                <a href="/categories"
                    class="hidden sm:inline-flex items-center gap-1 text-sm text-gray-400 hover:text-blue-500 transition-colors">
                    All

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <CategoryCard id="javascript" name="JavaScript" description="Test your JavaScript knowledge." icon="JS"
                    :count="24" />

                <CategoryCard id="vue" name="Vue.js" description="Improve your Vue frontend skills." icon="V"
                    :count="18" />

                <CategoryCard id="tailwind" name="Tailwind CSS" description="Utility-first CSS challenges." icon="TW"
                    :count="30" />

            </div>

        </section>

        <Footer />
    </div>
</template>