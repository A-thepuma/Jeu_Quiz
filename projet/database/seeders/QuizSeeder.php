<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Question;
use App\Models\Reponse;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Catégories
        $geographie = Category::create(['name' => 'géographie']);

        // Questions - géographie
        $question = Question::create(['category_id' => $geographie->id, 'question' => 'Quelle est la capitale de Japan ?']);


        // Réponses - géographie
        $reponses = Reponse::create(['question_id' => $question->id, 'reponse' => 'Tokyo', 'isCorrect' => true,]);
        $reponses = Reponse::create(['question_id' => $question->id, 'reponse' => 'Paris', 'isCorrect' => false,]);
        $reponses = Reponse::create(['question_id' => $question->id, 'reponse' => 'Porto novo', 'isCorrect' => false,]);
        $reponses = Reponse::create(['question_id' => $question->id, 'reponse' => 'Nassimichou', 'isCorrect' => false,]);
        

    }
}
