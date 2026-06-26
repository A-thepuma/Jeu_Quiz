<x-guest-layout>
    {{-- On crée une div unique pour que Vue prenne le contrôle de cette zone --}}
    <div id="blade-auth-container" class="flex flex-col min-h-screen bg-white">

        <my-header></my-header>

        <main class="flex-grow flex items-center justify-center px-4 py-16">
            <div class="w-full max-w-md">
                <div class="p-8 md:p-10 rounded-2xl shadow-xl bg-white/70 backdrop-blur border border-gray-100">

                    <div class="mb-8">
                        <h1 class="text-3xl font-light mb-2 text-gray-900">Welcome back</h1>
                        <p class="text-sm text-gray-500 font-light">Sign in to your account.</p>
                    </div>

                    {{-- Status message --}}
                    @session('status')
                        <div class="mb-4 text-sm text-green-600 font-light">
                            {{ $value }}
                        </div>
                    @endsession

                    <x-validation-errors class="mb-4" />

                    <form method="POST" action="{{ route('login') }}" class="space-y-6">
                        @csrf

                        <div>
                            <label class="block text-sm text-gray-700 mb-2">Email</label>
                            <input type="email" name="email" value="{{ old('email') }}" placeholder="ada@quizly.app"
                                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                                required autofocus autocomplete="username" />
                        </div>

                        <div>
                            <label class="block text-sm text-gray-700 mb-2">Password</label>
                            <input type="password" name="password" placeholder="••••••••"
                                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                                required autocomplete="current-password" />
                        </div>

                        <div class="flex items-center justify-between">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" name="remember"
                                    class="rounded border-gray-300 text-black focus:ring-black/10" />
                                <span class="text-sm text-gray-500 font-light">Remember me</span>
                            </label>

                            @if (Route::has('password.request'))
                                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    href="{{ route('password.request') }}">
                                    {{ __('Forgot your password?') }}
                                </a>
                            @endif
                        </div>

                        <button type="submit"
                            class="w-full h-11 rounded-xl bg-black text-white font-light flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                            Sign in →
                        </button>

                    </form>

                    <p class="mt-8 text-xs text-center text-gray-500">
                        Don't have an account?
                        <a href="{{ route('register') }}"
                            class="text-black underline-offset-4 hover:underline ml-1">Create one</a>
                    </p>

                </div>
            </div>
        </main>

        <my-footer></my-footer>

    </div>
</x-guest-layout>

{{-- 
  Ce script crée une instance Vue isolée, totalement séparée d'Inertia.
  Elle va simplement chercher la div #blade-auth-container et y injecter tes composants.
--}}
<script type="module">
    import { createApp } from 'vue';
    import MyHeader from './resources/js/Components/Accueil/Header.vue';
    import MyFooter from './resources/js/Components/Accueil/Footer.vue';

    const app = createApp({});
    app.component('my-header', MyHeader);
    app.component('my-footer', MyFooter);
    
    // On monte l'application sur notre conteneur spécifique
    app.mount('#blade-auth-container');
</script>