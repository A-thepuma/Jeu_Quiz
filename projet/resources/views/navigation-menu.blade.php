<nav x-data="{ open: false }" class="bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="flex items-center justify-between h-16">

            {{-- Logo --}}
            <a href="{{ route('accueil') }}" class="flex items-center gap-2.5 shrink-0">
                <div class="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                    Q
                </div>
                <span class="text-sm font-medium tracking-wide text-gray-900">Quizly</span>
            </a>

            {{-- Nav links (centre) - desktop --}}
            <div class="hidden sm:flex items-center gap-8">
                <a href="{{ route('jouer') }}"
                   class="text-sm transition-colors {{ request()->routeIs('jouer') ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-900' }}">
                    Jouer
                </a>
                <a href="{{ route('classement') }}"
                   class="text-sm transition-colors {{ request()->routeIs('classement') ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-900' }}">
                    Classement
                </a>
                <a href="{{ route('dashboard') }}"
                   class="text-sm transition-colors {{ request()->routeIs('dashboard') ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-900' }}">
                    Dashboard
                </a>
            </div>

            {{-- Right: user + logout - desktop --}}
            <div class="hidden sm:flex items-center gap-4">

                @if (Laravel\Jetstream\Jetstream::hasTeamFeatures())
                    <x-dropdown align="right" width="60">
                        <x-slot name="trigger">
                            <button type="button" class="text-sm text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1">
                                {{ Auth::user()->currentTeam->name }}
                                <svg class="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </button>
                        </x-slot>
                        <x-slot name="content">
                            <div class="w-60">
                                <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Team') }}</div>
                                <x-dropdown-link href="{{ route('teams.show', Auth::user()->currentTeam->id) }}">{{ __('Team Settings') }}</x-dropdown-link>
                                @can('create', Laravel\Jetstream\Jetstream::newTeamModel())
                                    <x-dropdown-link href="{{ route('teams.create') }}">{{ __('Create New Team') }}</x-dropdown-link>
                                @endcan
                                @if (Auth::user()->allTeams()->count() > 1)
                                    <div class="border-t border-gray-100"></div>
                                    <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Switch Teams') }}</div>
                                    @foreach (Auth::user()->allTeams() as $team)
                                        <x-switchable-team :team="$team" />
                                    @endforeach
                                @endif
                            </div>
                        </x-slot>
                    </x-dropdown>
                @endif

                <x-dropdown align="right" width="48">
                    <x-slot name="trigger">
                        <button type="button" class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                                <img class="size-7 rounded-full object-cover" src="{{ Auth::user()->profile_photo_url }}" alt="{{ Auth::user()->name }}" />
                            @else
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span class="font-light">{{ Auth::user()->name }}</span>
                                <svg class="size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            @endif
                        </button>
                    </x-slot>
                    <x-slot name="content">
                        <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Account') }}</div>
                        <x-dropdown-link href="{{ route('profile.show') }}">{{ __('Profile') }}</x-dropdown-link>
                        @if (Laravel\Jetstream\Jetstream::hasApiFeatures())
                            <x-dropdown-link href="{{ route('api-tokens.index') }}">{{ __('API Tokens') }}</x-dropdown-link>
                        @endif
                        <div class="border-t border-gray-100"></div>
                        <form method="POST" action="{{ route('logout') }}" x-data>
                            @csrf
                            <x-dropdown-link href="{{ route('logout') }}" @click.prevent="$root.submit();">
                                {{ __('Log Out') }}
                            </x-dropdown-link>
                        </form>
                    </x-slot>
                </x-dropdown>

                {{-- Logout icon --}}
                <form method="POST" action="{{ route('logout') }}" x-data>
                    @csrf
                    <button type="submit" class="text-gray-300 hover:text-gray-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    </button>
                </form>
            </div>

            {{-- Hamburger - mobile --}}
            <div class="-me-2 flex items-center sm:hidden">
                <button @click="open = ! open" class="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">
                    <svg class="size-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    {{-- Mobile menu --}}
    <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden border-t border-gray-100">
        <div class="pt-2 pb-3 space-y-1 px-4">
            <x-responsive-nav-link href="{{ route('jouer') }}" :active="request()->routeIs('jouer')">Jouer</x-responsive-nav-link>
            <x-responsive-nav-link href="{{ route('classement') }}" :active="request()->routeIs('classement')">Classement</x-responsive-nav-link>
            <x-responsive-nav-link href="{{ route('dashboard') }}" :active="request()->routeIs('dashboard')">Dashboard</x-responsive-nav-link>
        </div>

        <div class="pt-4 pb-3 border-t border-gray-100">
            <div class="flex items-center px-4 mb-3">
                @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                    <img class="size-9 rounded-full object-cover me-3" src="{{ Auth::user()->profile_photo_url }}" alt="{{ Auth::user()->name }}" />
                @endif
                <div>
                    <div class="text-sm font-medium text-gray-800">{{ Auth::user()->name }}</div>
                    <div class="text-xs text-gray-400">{{ Auth::user()->email }}</div>
                </div>
            </div>

            <div class="space-y-1 px-4">
                <x-responsive-nav-link href="{{ route('profile.show') }}" :active="request()->routeIs('profile.show')">{{ __('Profile') }}</x-responsive-nav-link>
                @if (Laravel\Jetstream\Jetstream::hasApiFeatures())
                    <x-responsive-nav-link href="{{ route('api-tokens.index') }}" :active="request()->routeIs('api-tokens.index')">{{ __('API Tokens') }}</x-responsive-nav-link>
                @endif
                <form method="POST" action="{{ route('logout') }}" x-data>
                    @csrf
                    <x-responsive-nav-link href="{{ route('logout') }}" @click.prevent="$root.submit();">{{ __('Log Out') }}</x-responsive-nav-link>
                </form>

                @if (Laravel\Jetstream\Jetstream::hasTeamFeatures())
                    <div class="border-t border-gray-100 my-2"></div>
                    <div class="px-0 py-1 text-xs text-gray-400">{{ __('Manage Team') }}</div>
                    <x-responsive-nav-link href="{{ route('teams.show', Auth::user()->currentTeam->id) }}" :active="request()->routeIs('teams.show')">{{ __('Team Settings') }}</x-responsive-nav-link>
                    @can('create', Laravel\Jetstream\Jetstream::newTeamModel())
                        <x-responsive-nav-link href="{{ route('teams.create') }}" :active="request()->routeIs('teams.create')">{{ __('Create New Team') }}</x-responsive-nav-link>
                    @endcan
                    @if (Auth::user()->allTeams()->count() > 1)
                        <div class="border-t border-gray-100 my-2"></div>
                        <div class="px-0 py-1 text-xs text-gray-400">{{ __('Switch Teams') }}</div>
                        @foreach (Auth::user()->allTeams() as $team)
                            <x-switchable-team :team="$team" component="responsive-nav-link" />
                        @endforeach
                    @endif
                @endif
            </div>
        </div>
    </div>
</nav>