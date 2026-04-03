# Jeu_Quiz

# Quiz Game Laravel + Vue.js

Application de quiz en ligne avec :
- API REST réalisée avec **Laravel 10+**
- Front‑end réalisé en **Vue.js 3 (mode composition API)**
- Base de données **SQLite** (fichier `database.sqlite`)
- Administration des questions / réponses
- Plusieurs catégories (sport, culture, jeux vidéo, etc.)
- Scoreboard avec pseudo et enregistrement des résultats

---

## 🧑‍💻 Contributeurs

- André – Backend Laravel, API, tests unitaires/fonctionnels
- Nassim – Frontend Vue.js, UI, tests E2E

---

## 📦 Stack technique

- **Backend** : Laravel 10+ (PHP 8.2+)
- **Frontend** : Vue.js 3 (Composition API) + Vite
- **Base de données** : SQLite (fichier `database.sqlite`)
- **Tests** : PHPUnit (unitaires/fonctionnels), Tests E2E (type Pest / Cypress / Playwright selon ton choix)
- **CI/CD** : GitHub Actions (pipeline CI + coverage + analyse PHPStan)
- **Outils** : Pint (formateur PHP), ESLint (formateur JS)

---

## 🚀 Installation en local

### 1. Prérequis

- PHP 8.2 ou supérieur
- Composer
- Node.js 18+ / npm
- SQLite (extension `pdo_sqlite` activée dans `php.ini`)

### 2. Récupérer le projet

```bash
git clone https://github.com/TON_USERNAME/quiz-laravel-vue.git
cd quiz-laravel-vue
```

### 3. Installer les dépendances backend

```bash
composer install
```

### 4. Installer les dépendances frontend

```bash
npm install
```

### 5. Configurer l’environnement

Créer le fichier `.env` et générer la clé d’application :

```bash
cp .env.example .env
php artisan key:generate
```

### 6. Préparer SQLite

- Vérifier que l’extension `sqlite` est activée dans `php.ini`.
- Dans le `.env`, s’assurer que la base est configurée en SQLite :

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

Créer le fichier SQLite s’il n’existe pas :

```bash
touch database/database.sqlite
```

---

## 🧪 Initialisation de la base de données et des données de test

### 1. Lancer les migrations

```bash
php artisan migrate
```

### 2. Lancer les seeders (jeu de données de test)

```bash
php artisan db:seed
```

Vous pouvez aussi lancer les migrations + seeders en une commande :

```bash
php artisan migrate:fresh --seed
```

---

## 🧪 Lancement des tests

### 1. Tests unitaires & fonctionnels (PHPUnit)

```bash
php artisan test
```

ou, si tu utilises Pest :

```bash
./vendor/bin/pest
```

### 2. Tests E2E (ex. Cypress ou Playwright)

**Exemple avec Cypress** :

```bash
npm run build
npm run dev
# dans un autre terminal
npx cypress run
```

Adapte la commande suivant ton choix d’outil (Cypress, Playwright, etc.).

Documentation des choix de tests (à détailler dans le README selon ton projet) :
- Tests unitaires : modèles `Question`, `Answer`, `Score`, `Category`, etc.
- Tests fonctionnels : routes API (`/api/questions`, `/api/scores`, `/api/categories`)
- Tests E2E : flux complet d’un quiz (choix de catégorie, réponse, enregistrement du pseudo et score)

---

## 🏃‍♂️ Lancer l’application

### Backend (serveur Laravel)

```bash
php artisan serve
```

L’API est disponible sur `http://localhost:8000/api`.

### Frontend (Vue.js via Vite)

```bash
npm run dev
```

Le frontend est disponible sur `http://localhost:5173`.

---

## 🎮 Structure des fonctionnalités

- **API Laravel**
  - Gestion des catégories (`/api/categories`)
  - Gestion des questions / réponses (`/api/questions`)
  - Enregistrement des scores (`/api/scores`)
  - Récupération du scoreboard (`/api/scores` – tri par meilleur score)

- **Interface Vue.js**
  - Écran d’accueil : choix de la catégorie
  - Affichage question / réponses (un seul choix par question)
  - Page de résultat avec score et pseudo
  - Tableau des scores (scoreboard) avec top X joueurs

- **Écran d’administration**
  - Ajout / édition / suppression de catégories
  - Ajout / édition / suppression de questions
  - Assignation de réponses et de la bonne réponse
  - Visualisation des scores (lecture seule)

---

## 🧩 Gestion du projet & conventions

- Chaque fonctionnalité est développée sur une **branche dédiée** (feature branch).
- Une **Pull Request (PR)** est associée à chaque branche avant merge vers `main`.
- Les commits suivent un style simple mais clair (ex. `feat: add question management API`).
- Respect des conventions de nommage Laravel (Snake Case pour les tables, CamelCase pour les classes PHP, etc.).
- Respect des conventions de nommage Vue.js (composants en PascalCase, fichiers `.vue`).

---

## 🧪 Tests – justifications

- **Tests unitaires** : vérifient que chaque modèle et service fonctionne correctement (ex. validation d’une question, comptage de points).
- **Tests fonctionnels** : vérifient que les routes API retournent les bons codes HTTP et format de réponse.
- **Tests E2E** : vérifient le bon parcours utilisateur (choix catégorie → réponse aux questions → sauvegarde du pseudo / score).

---

## 🔄 Pipeline CI / GitHub Actions

Un pipeline CI est configuré via GitHub Actions (fichier `.github/workflows/ci.yml`).

Les étapes principales :
1. Installation de PHP et Composer
2. Installation de Node.js et npm
3. Préparation de la base SQLite
4. Lancement des migrations
5. Lancement des tests unitaires / fonctionnels
6. Lancement des tests E2E
7. Exécution de PHPStan (analyse de code PHP)
8. Affichage du % de coverage (via PHPUnit / Pest)

Le README est tagué avec le **status du pipeline** et le **coverage** sur la branche `main`.

Exemple de badge (à personnaliser avec ton repo) :

```markdown


```

---

## 🧹 Formateurs & analyse de code

- **Pint** : formateur de code PHP, intégré dans le projet.
  - Fichier : `pint.json` ou `.pint.json`
  - Exécution : `vendor/bin/pint` ou automatique via GitHub Actions.

- **ESLint** : formateur de code JavaScript/Vue.
  - Fichier : `.eslintrc.cjs` et `.eslintignore`
  - Exécution : `npm run lint` ou enregistrement automatique dans VSCode (via extension ESLint).

- **PHPStan** : analyse statique du code PHP.
  - Fichier : `phpstan.neon` ou `phpstan.php`
  - Exécution dans le pipeline CI : `php artisan phpstan:run` ou `phpstan analyse`.

---

## 🧩 Points bonus réalisés

- [x] Mise en place d’un **pipeline CI sur GitHub**  
- [x] Tag dans le README affichant le **% de coverage** et le **status du pipeline** sur `main`  
- [x] Installation et configuration d’un **formateur** (Pint + ESLint) avec formatage automatique à la sauvegarde dans VSCode  
- [x] Ajout d’une **analyse PHPStan** dans le pipeline CI  

---

## 📂 Organisation du projet

- `app/Http/Controllers/Api/` – Contrôleurs API (questions, catégories, scores)
- `app/Models/` – Modèles Eloquent (Question, Answer, Category, Score)
- `database/migrations/` – Migrations
- `database/seeders/` – Seeders (données de test)
- `tests/` – Tests unitaires / fonctionnels
- `tests/E2E/` – Tests end‑to‑end
- `resources/js/` – Code Vue.js (composants Vue 3, composables, routes)
- `resources/views/` – Vues Blade minimales (si besoin de pages de base)

---

## 📄 Documentation

- Laravel : [https://laravel.com](https://laravel.com)  
- Vue.js : [https://vuejs.org](https://vuejs.org)  
- ESLint : [https://eslint.org](https://eslint.org)  

---

## 📌 Remarques

- Il est préférable d’avoir **moins de fonctionnalités bien testées** que beaucoup de fonctionnalités à moitié terminées.  
- Le projet doit montrer une **bonne factorisation** du code, des **commentaires** explicites lorsque nécessaire, et **éviter la duplication**.  