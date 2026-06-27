<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\QuizController;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/questions', [QuestionController::class, 'index']);
Route::get('/quiz/{category}', [QuizController::class, 'show']);