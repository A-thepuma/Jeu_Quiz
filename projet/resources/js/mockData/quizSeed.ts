export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    count: number;
}

export interface Question {
    id: number;
    categoryId: string;
    text: string;
    options: string[];
    correctIndex: number;
}

export const categories: Category[] = [
    {
        id: "general",
        name: "General knowledge",
        description: "Questions variées sur des sujets divers.",
        icon: "globe-2",
        count: 15,
    },
    {
        id: "science",
        name: "Science",
        description: "Questions sur la physique, la chimie et la biologie.",
        icon: "atom",
        count: 15,
    },
    {
        id: "tech",
        name: "Technology",
        description: "Questions sur l'informatique et l'innovation.",
        icon: "laptop-code",
        count: 15,
    },
    {
        id: "geography",
        name: "Geography",
        description: "Questions sur les pays et capitales.",
        icon: "map",
        count: 15,
    },
    {
        id: "movies",
        name: "Movies",
        description: "Questions sur le cinéma.",
        icon: "clapperboard",
        count: 15,
    },
    {
        id: "history",
        name: "History",
        description: "Questions historiques.",
        icon: "landmark",
        count: 15,
    },
];

export const questions: Question[] = [
    // ================= GENERAL =================
    {
        id: 1,
        categoryId: "general",
        text: "What is the largest ocean?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctIndex: 1,
    },
    {
        id: 2,
        categoryId: "general",
        text: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
    },
    {
        id: 3,
        categoryId: "general",
        text: "What color do you get by mixing blue and yellow?",
        options: ["Green", "Purple", "Orange", "Red"],
        correctIndex: 0,
    },
    {
        id: 4,
        categoryId: "general",
        text: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Elephant", "Lion", "Bear"],
        correctIndex: 2,
    },
    {
        id: 5,
        categoryId: "general",
        text: "What is the boiling point of water?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        correctIndex: 1,
    },
    {
        id: 6,
        categoryId: "general",
        text: "Which language is spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        correctIndex: 1,
    },
    {
        id: 7,
        categoryId: "general",
        text: "How many days are in a leap year?",
        options: ["365", "366", "364", "367"],
        correctIndex: 1,
    },
    {
        id: 8,
        categoryId: "general",
        text: "What is the tallest animal?",
        options: ["Elephant", "Horse", "Giraffe", "Camel"],
        correctIndex: 2,
    },
    {
        id: 9,
        categoryId: "general",
        text: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2,
    },
    {
        id: 10,
        categoryId: "general",
        text: "Which month has 28 days?",
        options: ["February", "January", "All months", "June"],
        correctIndex: 2,
    },
    {
        id: 11,
        categoryId: "general",
        text: "What gas do humans breathe in?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
        correctIndex: 0,
    },
    {
        id: 12,
        categoryId: "general",
        text: "Which sport uses a racket?",
        options: ["Football", "Basketball", "Tennis", "Boxing"],
        correctIndex: 2,
    },
    {
        id: 13,
        categoryId: "general",
        text: "What is the opposite of hot?",
        options: ["Warm", "Cold", "Dry", "Soft"],
        correctIndex: 1,
    },
    {
        id: 14,
        categoryId: "general",
        text: "How many hours are in a day?",
        options: ["12", "18", "24", "36"],
        correctIndex: 2,
    },
    {
        id: 15,
        categoryId: "general",
        text: "What shape has 3 sides?",
        options: ["Square", "Triangle", "Circle", "Hexagon"],
        correctIndex: 1,
    },

    // ================= SCIENCE =================
    {
        id: 16,
        categoryId: "science",
        text: "What planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Venus", "Saturn"],
        correctIndex: 0,
    },
    {
        id: 17,
        categoryId: "science",
        text: "What is H2O?",
        options: ["Hydrogen", "Oxygen", "Water", "Helium"],
        correctIndex: 2,
    },
    {
        id: 18,
        categoryId: "science",
        text: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctIndex: 2,
    },
    {
        id: 19,
        categoryId: "science",
        text: "What force keeps us on the ground?",
        options: ["Magnetism", "Gravity", "Electricity", "Wind"],
        correctIndex: 1,
    },
    {
        id: 20,
        categoryId: "science",
        text: "Which organ pumps blood?",
        options: ["Brain", "Liver", "Heart", "Lung"],
        correctIndex: 2,
    },
    {
        id: 21,
        categoryId: "science",
        text: "What is the center of an atom called?",
        options: ["Electron", "Proton", "Nucleus", "Ion"],
        correctIndex: 2,
    },
    {
        id: 22,
        categoryId: "science",
        text: "What vitamin comes from sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctIndex: 3,
    },
    {
        id: 23,
        categoryId: "science",
        text: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Go", "Gd"],
        correctIndex: 1,
    },
    {
        id: 24,
        categoryId: "science",
        text: "How many bones are in the adult body?",
        options: ["206", "201", "300", "150"],
        correctIndex: 0,
    },
    {
        id: 25,
        categoryId: "science",
        text: "Which planet is closest to the sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctIndex: 1,
    },

    // ================= TECH =================
    {
        id: 26,
        categoryId: "tech",
        text: "What does CPU stand for?",
        options: [
            "Central Process Unit",
            "Central Processing Unit",
            "Computer Personal Unit",
            "Core Process Utility",
        ],
        correctIndex: 1,
    },
    {
        id: 27,
        categoryId: "tech",
        text: "Which company created Windows?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctIndex: 2,
    },
    {
        id: 28,
        categoryId: "tech",
        text: "What language is mainly used for web pages?",
        options: ["Python", "C++", "HTML", "Java"],
        correctIndex: 2,
    },
    {
        id: 29,
        categoryId: "tech",
        text: "What does RAM mean?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Access Machine",
            "Run Access Module",
        ],
        correctIndex: 0,
    },
    {
        id: 30,
        categoryId: "tech",
        text: "Which device is used to point on a computer?",
        options: ["Keyboard", "Mouse", "Printer", "Monitor"],
        correctIndex: 1,
    },

    // ================= GEOGRAPHY =================
    {
        id: 31,
        categoryId: "geography",
        text: "What is the capital of France?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        correctIndex: 0,
    },
    {
        id: 32,
        categoryId: "geography",
        text: "Which continent is Egypt in?",
        options: ["Asia", "Europe", "Africa", "America"],
        correctIndex: 2,
    },
    {
        id: 33,
        categoryId: "geography",
        text: "What is the largest country?",
        options: ["USA", "China", "Russia", "Canada"],
        correctIndex: 2,
    },
    {
        id: 34,
        categoryId: "geography",
        text: "Which ocean borders California?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctIndex: 1,
    },
    {
        id: 35,
        categoryId: "geography",
        text: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Kyoto", "Osaka"],
        correctIndex: 1,
    },

    // ================= MOVIES =================
    {
        id: 36,
        categoryId: "movies",
        text: "Who directed Titanic?",
        options: [
            "Steven Spielberg",
            "James Cameron",
            "Christopher Nolan",
            "Ridley Scott",
        ],
        correctIndex: 1,
    },
    {
        id: 37,
        categoryId: "movies",
        text: "Which movie features Iron Man?",
        options: ["Avengers", "Batman", "Superman", "Avatar"],
        correctIndex: 0,
    },
    {
        id: 38,
        categoryId: "movies",
        text: "Who played Harry Potter?",
        options: [
            "Tom Holland",
            "Daniel Radcliffe",
            "Robert Pattinson",
            "Rupert Grint",
        ],
        correctIndex: 1,
    },
    {
        id: 39,
        categoryId: "movies",
        text: "What is the highest-grossing movie?",
        options: ["Titanic", "Avatar", "Avengers", "Frozen"],
        correctIndex: 1,
    },
    {
        id: 40,
        categoryId: "movies",
        text: "Which movie has the quote 'I am your father'?",
        options: ["Matrix", "Star Wars", "Batman", "Alien"],
        correctIndex: 1,
    },

    // ================= HISTORY =================
    {
        id: 41,
        categoryId: "history",
        text: "Who discovered America?",
        options: ["Columbus", "Newton", "Napoleon", "Einstein"],
        correctIndex: 0,
    },
    {
        id: 42,
        categoryId: "history",
        text: "When did World War II end?",
        options: ["1945", "1939", "1918", "1960"],
        correctIndex: 0,
    },
    {
        id: 43,
        categoryId: "history",
        text: "Who was the first President of the USA?",
        options: [
            "George Washington",
            "Abraham Lincoln",
            "John Adams",
            "Thomas Jefferson",
        ],
        correctIndex: 0,
    },
    {
        id: 44,
        categoryId: "history",
        text: "Which wall fell in 1989?",
        options: ["China Wall", "Berlin Wall", "Hadrian Wall", "Stone Wall"],
        correctIndex: 1,
    },
    {
        id: 45,
        categoryId: "history",
        text: "Who was Napoleon?",
        options: [
            "Scientist",
            "King",
            "French Emperor",
            "Explorer",
        ],
        correctIndex: 2,
    },
];