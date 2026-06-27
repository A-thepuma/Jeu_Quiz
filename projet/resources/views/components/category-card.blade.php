@props(['id', 'name', 'description', 'icon', 'count'])

<a href="/quiz/{{ $id }}"
    class="group p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300">

    <div class="flex items-start justify-between mb-4">
        <div class="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center text-xs font-medium tracking-wide">
            {{ $icon }}
        </div>
        <span class="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-light">
            {{ $count }} questions
        </span>
    </div>

    <p class="text-sm font-light mb-1">{{ $name }}</p>
    <p class="text-xs text-gray-400 font-light leading-relaxed">{{ $description }}</p>

    <div class="mt-4 flex items-center gap-1 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
        Play
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </div>
</a>