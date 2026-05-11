<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Accueil')->name('accueil');
Route::inertia('/connexion', 'Connexion/Login')->name('connexion');
Route::inertia('/inscription', 'Connexion/SignUp')->name('inscription');
Route::inertia('/classement', 'Classement')->name('classement');
Route::inertia('/jouer', 'Jeu/Jouer')->name('jouer');
