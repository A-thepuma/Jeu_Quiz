<script setup lang="ts">
import MyFooter from '@/Components/Accueil/Footer.vue';
import MyHeader from '@/Components/Accueil/Header.vue';
import CategoryCard from '@/Components/cards/categoriCard.vue';

const categories = [
  // Remplace les IDs par les chiffres correspondants à ta base de données SQLite
  { id: "géographie", name: "Géographie", description: "Questions sur les pays, les capitales et les cultures.", icon: "map", count: 15 },
  { id: 2, name: "Science", description: "Questions sur la physique, la chimie, et la biologie.", icon: "atom", count: 18 },
  { id: 3, name: "Technology", description: "Questions sur l'informatique, le code et l'innovation.", icon: "laptop-code", count: 22 },
  { id: 4, name: "General knowledge", description: "Questions variées sur des sujets divers.", icon: "globe-2", count: 25 },
  { id: 5, name: "Movies", description: "Questions sur le cinéma, les acteurs et les réalisateurs.", icon: "clapperboard", count: 30 },
  { id: 6, name: "History", description: "Questions sur les événements historiques et les civilisations.", icon: "landmark", count: 28 },
];

</script>


<template>
    <div class="flex flex-col min-h-screen bg-white">
        <MyHeader/>

        <main class="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-12">
            <div class="max-w-2xl mb-12 animate-fade-up">
                <p class="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">Choose a category</p>
                <h1 class="text-display text-4xl md:text-5xl mb-4">Pick your subject.</h1>
                <p class="text-muted-foreground font-light">Each session is ten questions, ten seconds each. Take your time — or don't.</p>
            </div>      

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                <CategoryCard
                    v-for="category in categories"
                    :key="category.id"
                    :id="String(category.id)"
                    :name="category.name"
                    :description="category.description"
                    :icon="category.icon"
                    :count="category.count"
                />
            </div>
            
        </main>

        <MyFooter />
    </div>
</template>