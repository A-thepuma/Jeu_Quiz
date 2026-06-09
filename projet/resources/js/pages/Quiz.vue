<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

import MyHeader from "@/Components/Accueil/Header.vue";
import MyFooter from "@/Components/Accueil/Footer.vue";

// Les types qui correspondent à ce que ton API Laravel va renvoyer
type Category = {
  id: number;
  name: string;
};

type Question = {
  id: number;
  category_id: number;
  text: string;     // Assure-toi que ton modèle Laravel utilise bien 'question'
  options: string[];    // Si tes options sont stockées en JSON ou via une relation
  correctIndex: number;
};

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const QUESTION_COUNT = 10;
const SECONDS_PER_QUESTION = 15;

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/*
|--------------------------------------------------------------------------
| State & API Data
|--------------------------------------------------------------------------
*/
const category = ref<Category | null>(null);
const quizQuestions = ref<Question[]>([]);
const loading = ref(true);

// Cette fonction extrait le dernier segment de l'URL de manière sécurisée
const getCategoryIdFromURL = () => {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "";
};

const categoryId = getCategoryIdFromURL();
async function loadQuiz() {
  try {
    loading.value = true;
    
    const response = await fetch(`/api/quiz/${categoryId}`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    category.value = data.category;
    
    if (data.questions) {
      quizQuestions.value = shuffle(data.questions as Question[]).slice(0, QUESTION_COUNT);
    }

    startTimer();
  } catch (error) {
    console.error("Erreur lors du chargement du quiz :", error);
  } finally {
    loading.value = false;
  }
}

/*
|--------------------------------------------------------------------------
| Game State
|--------------------------------------------------------------------------
*/
const idx = ref(0);
const selected = ref<number | null>(null);
const score = ref(0);
const streak = ref(0);
const bestStreak = ref(0);
const correctCount = ref(0);
const timeLeft = ref(SECONDS_PER_QUESTION);
const startedAt = Date.now();

const locked = computed(() => selected.value !== null);
const q = computed(() => quizQuestions.value[idx.value]);

/*
|--------------------------------------------------------------------------
| Progress
|--------------------------------------------------------------------------
*/
const progress = computed(() => {
  if (quizQuestions.value.length === 0) return 0;
  return (
    ((idx.value + (selected.value !== null ? 1 : 0)) /
      quizQuestions.value.length) *
    100
  );
});

/*
|--------------------------------------------------------------------------
| Timer
|--------------------------------------------------------------------------
*/
let timer: number;

function startTimer() {
  clearInterval(timer);
  
  // Sécurité : si pas de questions, on ne lance pas le timer
  if (quizQuestions.value.length === 0) return;

  timeLeft.value = SECONDS_PER_QUESTION;

  timer = window.setInterval(() => {
    if (locked.value) return;

    if (timeLeft.value <= 1) {
      clearInterval(timer);
      pick(-1);
      return;
    }
    timeLeft.value--;
  }, 1000);
}

watch(idx, () => {
  startTimer();
});

onMounted(() => {
  // On charge les données depuis Laravel au montage du composant
  loadQuiz();
  window.addEventListener("keydown", onKey);
});

onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener("keydown", onKey);
});

/*
|--------------------------------------------------------------------------
| Keyboard support
|--------------------------------------------------------------------------
*/
function onKey(e: KeyboardEvent) {
  if (locked.value || !q.value) return;

  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= q.value.options.length) {
    pick(n - 1);
  }
}

/*
|--------------------------------------------------------------------------
| Pick answer
|--------------------------------------------------------------------------
*/
function pick(i: number) {
  if (selected.value !== null || !q.value) return;

  selected.value = i;

  if (i === q.value.correctIndex) {
    score.value++;
    correctCount.value++;
    streak.value++;
    bestStreak.value = Math.max(bestStreak.value, streak.value);
  } else {
    streak.value = 0;
  }

  setTimeout(() => {
    next();
  }, 950);
}

/*
|--------------------------------------------------------------------------
| Next question
|--------------------------------------------------------------------------
*/
function next() {
  if (idx.value + 1 >= quizQuestions.value.length) {
    finish();
    return;
  }

  idx.value++;
  selected.value = null;
}

/*
|--------------------------------------------------------------------------
| Finish
|--------------------------------------------------------------------------
*/
function finish() {
  clearInterval(timer);

  const timeSec = Math.round((Date.now() - startedAt) / 1000);
  const accuracy = quizQuestions.value.length
    ? Math.round((correctCount.value / quizQuestions.value.length) * 100)
    : 0;

  alert(`
Quiz terminé 🎉

Score : ${score.value}/${quizQuestions.value.length}
Précision : ${accuracy}%
Temps : ${timeSec}s
Meilleure série : ${bestStreak.value}
  `);
}

/*
|--------------------------------------------------------------------------
| Answer state
|--------------------------------------------------------------------------
*/
function answerState(index: number) {
  if (selected.value === null) {
    return "default";
  }
  if (!q.value) return "disabled";

  if (index === q.value.correctIndex) {
    return "correct";
  }
  if (index === selected.value) {
    return "wrong";
  }
  return "disabled";
}

function answerLetter(index: number) {
  return String.fromCharCode(65 + index);
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <MyHeader />

    <!-- Progress -->
    <div class="w-full h-0.5 bg-gray-100">
      <div
        class="h-full bg-black transition-all duration-500"
        :style="{ width: `${progress}%` }"
      />
    </div>

    <main class="flex-1 container py-10 md:py-14 max-w-3xl mx-auto px-4">
      <!-- Empty state -->
      <div v-if="!category || !q" class="py-24 text-center">
        <h1 class="text-2xl md:text-4xl font-light mb-4">
          Aucune question trouvée 
        </h1>
        <p class="text-gray-500 font-light">
          Cette catégorie ne contient aucune question pour le moment ou l'ID est invalide.
        </p>
      </div>

      <template v-else>
        <!-- Meta -->
        <div class="flex items-center justify-between mb-10 animate-fade-in">
          <!-- Left -->
          <div>
            <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light mb-1">
              {{ category.name }}
            </p>
            <p class="text-sm">
              <span class="font-medium">{{ idx + 1 }}</span>
              <span class="text-gray-400"> / {{ quizQuestions.length }}</span>
            </p>
          </div>

          <!-- Right -->
          <div class="flex items-center gap-5">
            <!-- Streak -->
            <div class="hidden sm:flex flex-col items-end">
              <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
                Série
              </span>
              <span class="text-sm">{{ streak }}</span>
            </div>

            <!-- Timer -->
            <div class="relative h-14 w-14">
              <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                <!-- bg -->
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#e5e7eb"
                  stroke-width="6"
                  fill="none"
                />
                <!-- progress -->
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="black"
                  stroke-width="6"
                  fill="none"
                  stroke-linecap="round"
                  :stroke-dasharray="276.46"
                  :stroke-dashoffset="
                    276.46 - (timeLeft / SECONDS_PER_QUESTION) * 276.46
                  "
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center text-sm font-light">
                {{ timeLeft }}s
              </div>
            </div>
          </div>
        </div>

        <!-- Question -->
        <div :key="q.id" class="animate-fade-up">
          <h1 class="text-2xl md:text-4xl font-light leading-tight mb-10 md:mb-14 text-balance">
            {{ q.text}}
          </h1>

          <!-- Answers -->
          <div class="grid sm:grid-cols-2 gap-3 md:gap-4">
            <button
              v-for="(opt, i) in q.options"
              :key="i"
              @click="pick(i)"
              :disabled="locked"
              class="group relative text-left p-5 md:p-6 rounded-2xl border transition-all duration-300"
              :class="{
                'bg-white border-gray-200 hover:border-black/40':
                  answerState(i) === 'default',
                'border-green-400 bg-green-50 shadow-lg':
                  answerState(i) === 'correct',
                'border-red-400 bg-red-50 shadow-lg':
                  answerState(i) === 'wrong',
                'opacity-50 border-gray-200':
                  answerState(i) === 'disabled',
                'cursor-default': locked,
              }"
            >
              <div class="flex items-start gap-3">
                <!-- Letter -->
                <span
                  class="shrink-0 mt-0.5 inline-flex items-center justify-center h-6 w-6 rounded-md border text-[10px]"
                  :class="{
                    'border-gray-200 text-gray-500':
                      answerState(i) === 'default',
                    'border-green-400 bg-green-100':
                      answerState(i) === 'correct',
                    'border-red-400 bg-red-100':
                      answerState(i) === 'wrong',
                  }"
                >
                  <template v-if="answerState(i) === 'correct'">✓</template>
                  <template v-else-if="answerState(i) === 'wrong'">✕</template>
                  <template v-else>{{ answerLetter(i) }}</template>
                </span>

                <!-- Text -->
                <span class="font-light text-base md:text-lg leading-snug">
                  {{ opt }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </template>
    </main>

    <MyFooter />
  </div>
</template>
