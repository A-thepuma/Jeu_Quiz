<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;


class QuizController extends Controller
{
    public function show($categoryName)
    {
        try {
            // 1. On décode l'URL ("g%C3%A9ographie" -> "géographie") et on met en minuscules
            $decodedName = mb_strtolower(trim(urldecode($categoryName)), 'UTF-8');

            // 2. On retire informatiquement les accents (ex: "géographie" devient "geographie")
            $cleanNameWithoutAccents = transliterator_transliterate('Any-Latin; Latin-ASCII;', $decodedName);

            // 3. On récupère TOUTES les catégories pour faire une comparaison intelligente
            $categories = Category::all();

            // 4. On cherche celle qui correspond, avec ou sans accent
            $category = $categories->first(function ($cat) use ($decodedName, $cleanNameWithoutAccents) {
                $dbName = mb_strtolower($cat->name, 'UTF-8');
                $dbNameWithoutAccents = transliterator_transliterate('Any-Latin; Latin-ASCII;', $dbName);

                return $dbName === $decodedName || $dbNameWithoutAccents === $cleanNameWithoutAccents;
            });

            // 5. Sécurité si vraiment rien ne match
            if (!$category) {
                return response()->json(['error' => 'Catégorie introuvable en BDD'], 404);
            }

            // 6. On charge les relations
            $category->load('questions.reponses');

            // 7. On formate les questions pour Vue
            $questions = $category->questions ? $category->questions->map(function ($q) {
                $options = $q->reponses ? $q->reponses->pluck('reponse')->values() : collect([]);
                $correctIndex = $q->reponses ? $q->reponses->search(fn($r) => $r->isCorrect) : 0;

                if ($correctIndex === false) {
                    $correctIndex = 0;
                }

                return [
                    'id' => $q->id,
                    'categoryId' => $q->category_id,
                    'text' => $q->question,
                    'options' => $options,
                    'correctIndex' => $correctIndex,
                ];
            }) : collect([]);

            return response()->json([
                'category' => [
                    'id' => $category->id,
                    'name' => $category->name,
                ],
                'questions' => $questions,
            ]);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}