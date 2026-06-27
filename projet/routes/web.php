<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Accueil')->name('accueil');
Route::inertia('/login', 'Connexion/Login')->name('login');
Route::inertia('/register', 'Connexion/SignUp')->name('register');
Route::inertia('/jouer', 'Jeu/Jouer')->name('jouer');
Route::inertia('/quiz/{categoryId}', 'Quiz')->name('quiz');
Route::inertia('/classement', 'Classement/classement')->name('classement');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
