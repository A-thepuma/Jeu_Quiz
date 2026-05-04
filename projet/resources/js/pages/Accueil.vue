<script setup lang="ts">
import MyFooter from '@/Components/Accueil/Footer.vue';
import MyHeader from '@/Components/Accueil/Header.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen bg-white">
        <MyHeader/>

        <main class="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-12">
            
            <!-- Hero Section -->
            <div class="max-w-3xl text-center space-y-8">
                <h1 class="text-6xl md:text-8xl font-medium tracking-tight text-gray-900 leading-tight">
                    Think clearly.<br>
                    <span class="italic font-serif text-gray-800">Answer beautifully.</span>
                </h1>
                
                <p class="max-w-lg mx-auto text-lg text-gray-500 font-light leading-relaxed">
                </p>
                
                <div class="flex items-center justify-center gap-8 pt-4">
                    <button class="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-xl shadow-gray-200">
                        Start quiz <span>→</span>
                    </button>
                    
                    <button class="text-gray-400 hover:text-gray-900 font-medium transition-colors">
                        View leaderboard
                    </button>
                </div>
            </div>

            <div class="mt-24 w-full max-w-4xl bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-100 p-12 grid grid-cols-3 gap-8">
                <div class="text-center space-y-2">
                    <span class="text-gray-400">logo</span>
                    <div class="text-4xl font-light">5</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Categories</div>
                </div>
                
                <div class="text-center space-y-2 border-x border-gray-100">
                    <span class="text-gray-400"> logo</span>
                    <div class="text-4xl font-light">50+</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Questions</div>
                </div>
                
                <div class="text-center space-y-2">
                    <span class="text-gray-400">logo</span>
                    <div class="text-4xl font-light">∞</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Players</div>
                </div>
            </div>

            <div class="mt-24 w-full max-w-6xl bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-100 p-12 grid grid-cols-3 gap-8">
                <div class="text-left space-y-2">
                    <span class="text-gray-400">01</span>
                    <div class="text-4xl font-light">Calm by design</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">No noise. No clutter. Only the question and your thinking.</div>
                </div>
                
                <div class="text-left space-y-2 border-x border-gray-100">
                    <span class="text-gray-400"> 02</span>
                    <div class="text-4xl font-light">Tactile timing</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">A circular timer that breathes with each tick — never anxious, always alive.

</div>
                </div>
                
                <div class="text-left space-y-2 ">
                    <span class="text-gray-400">03</span>
                    <div class="text-4xl font-light">Track every play</div>
                    <div class="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Accuracy, streaks, and time, gathered into a single elegant view.</div>
                </div>
            </div>
            
        </main>

        <MyFooter />
    </div>
</template>