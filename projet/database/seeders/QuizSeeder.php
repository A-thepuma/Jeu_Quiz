<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Question;
use App\Models\Reponse;

class QuizSeeder extends Seeder
{
    public function run(): void
    {
        $json = file_get_contents(
            database_path('data/questions.json')
        );

        $data = json_decode($json, true);

        foreach ($data as $categoryName => $questions) {

            $category = Category::create([
                'name' => $categoryName
            ]);

            foreach ($questions as $questionData) {

                $question = Question::create([
                    'category_id' => $category->id,
                    'question' => $questionData['question']
                ]);

                foreach ($questionData['reponses'] as $reponseData) {

                    Reponse::create([
                        'question_id' => $question->id,
                        'reponse' => $reponseData['texte'],
                        'isCorrect' => $reponseData['correct']
                    ]);
                }
            }
        }
    }
}