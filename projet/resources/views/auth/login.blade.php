<x-guest-layout>
    <div class="flex flex-col min-h-screen bg-white">

        <main class="flex-grow flex items-center justify-center px-4 py-16">
            <div class="w-full max-w-md">
                <div class="p-8 md:p-10 rounded-2xl shadow-xl bg-white/70 backdrop-blur border border-gray-100">

                    <div class="mb-8">
                        <h1 class="text-3xl font-light mb-2 text-gray-900">Welcome back</h1>
                        <p class="text-sm text-gray-500 font-light">Sign in to your account.</p>
                    </div>

                    {{-- Status message (ex: après reset password) --}}
                    @session('status')
                        <div class="mb-4 text-sm text-green-600 font-light">
                            {{ $value }}
                        </div>
                    @endsession

                    <x-validation-errors class="mb-4" />

                    <form method="POST" action="{{ route('login') }}" class="space-y-6">
                        @csrf

                        <!-- Email -->
                        <div>
                            <label class="block text-sm text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value="{{ old('email') }}"
                                placeholder="ada@quizly.app"
                                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                                required autofocus autocomplete="username"
                            />
                        </div>

                        <!-- Password -->
                        <div>
                            <label class="block text-sm text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                class="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/10"
                                required autocomplete="current-password"
                            />
                        </div>

                        <!-- Remember me + Forgot password -->
                        <div class="flex items-center justify-between">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    class="rounded border-gray-300 text-black focus:ring-black/10"
                                />
                                <span class="text-sm text-gray-500 font-light">Remember me</span>
                            </label>

                            @if (Route::has('password.request'))
                                
                                    href="{{ route('password.request') }}"
                                    class="text-sm text-gray-500 hover:text-black underline-offset-4 hover:underline transition-colors"
                                >
                                    Forgot password?
                                </a>
                            @endif
                        </div>

                        <!-- Submit -->
                        <button
                            type="submit"
                            class="w-full h-11 rounded-xl bg-black text-white font-light flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                        >
                            Sign in →
                        </button>

                    </form>

                    <p class="mt-8 text-xs text-center text-gray-500">
                        Don't have an account?
                        <a href="{{ route('register') }}" class="text-black underline-offset-4 hover:underline ml-1">Create one</a>
                    </p>

                </div>
            </div>
        </main>

    </div>
</x-guest-layout>