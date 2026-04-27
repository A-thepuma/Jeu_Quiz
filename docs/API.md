# Documentation API Jeu Quiz

## Catégories

### GET / categories
Récupère la liste des catégories du jeu disponibles.

# "Réponse ('200 OK') : "

exemple : 
json
[
    {"id" : 1, "nom": "Sport" },
    {"id" : 2, "nom": "Géographie"}
]

## Questions

### GET /questions?category={id}
Récupère les questions liées à une catégorie.

# "Réponse ('200 OK') : "

exemple : 
json
[
  {
    "id": 1,
    "question": "Quelle est la capitale de la France ?",
    "answers": [
      { "id": 1, "answer": "Paris" },
      { "id": 2, "answer": "Lyon" }
    ]
  }
]

"Erreur 404 not found" si la catégorie n'existe pas

## Quiz & Scores

### POST /quiz/submit
Soumet les réponses pour obtenir le résultat.

exemple : 
Requete :

json
{
  "answers": [
    { "question_id": 1, "answer_id": 1 }
  ]
}

Réponse : 
json
{
  "score": 1,
  "total": 1,
  "feedback": "Bien joué !"
}

### POST /scores
Enregistre le score final d'un joueur.

exemple : 
Requete :

json
{
  "pseudo": "Fofo",
  "score": 8
}

Reponse :
{
  "message": "Score enregistré avec succès",
  "id": 42
}

### GET /scores
Récupère le classement.

Reponse:

json
[
  {
    "pseudo": "Fofo",
    "score": 8,
    "date": "2026-04-22T14:30:00Z"
  }
]


