<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;


class QuizController extends Controller
{
    public function show($categoryId)
{
    $category = Category::with('questions.reponses')
        ->find($categoryId);

    if (!$category) {
        return response()->json([
            'error' => 'Catégorie introuvable'
        ], 404);
    }

    $questions = $category->questions->map(function ($q) {
        $options = $q->reponses->pluck('reponse')->values();
        $correctIndex = $q->reponses->search(fn($r) => $r->isCorrect);

        return [
            'id' => $q->id,
            'categoryId' => $q->category_id,
            'text' => $q->question,
            'options' => $options,
            'correctIndex' => $correctIndex,
        ];
    });

    return response()->json([
        'category' => [
            'id' => $category->id,
            'name' => $category->name,
        ],
        'questions' => $questions,
    ]);
}
}