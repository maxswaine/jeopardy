import { Category, Question } from "../types/types";

const chanukah: Question[] = [
  {
    value: 100,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    value: 200,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    value: 300,
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
  },
  {
    value: 100,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    value: 200,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
];

const christmas1: Question[] = [
  {
    value: 200,
    question:
      "One in three men wait until this day to do their Christmas shopping.",
    answer: "What is Christmas Eve?",
  },
  {
    value: 400,
    question:
      "This tradition, now associated with Christmas, began in Ancient Greece as a blessing of fertility in wedding ceremonies.",
    answer: "What is kissing under the mistletoe?",
  },
  {
    value: 600,
    question:
      "In Germany, this frightening anti-Santa Claus with goat’s hooves and horns punishes children who misbehave instead of bringing them gifts.",
    answer: "Who (or what) is Krampus?",
  },
  {
    value: 800,
    question:
      "This is the family name of Tiny Tim and his father Bob in Dickens’s “A Christmas Carol.”",
    answer: "What is Cratchit?",
  },
  {
    value: 1000,
    question:
      "The tradition of using a decorated tree as a symbol of Christmas began in this European country.",
    answer: "What is Germany?",
  },
];

const christmas2: Question[] = [
  {
    value: 200,
    question:
      "The total number of gifts given in the song “The 12 Days of Christmas”",
    answer: "What are 364 gifts?",
  },
  {
    value: 400,
    question:
      "In the film “The Nightmare Before Christmas”, Jack calls Father Christmas by this name.",
    answer: "Sandy Claws",
  },
  {
    value: 600,
    question:
      "In this country, it has become traditional for families across the country to eat KFC as their Christmas dinner.",
    answer: "Japan",
  },
  {
    value: 800,
    question: "Which company invented the idea that Santa Claus’ suit is red?",
    answer: "Coca-cola",
  },
  {
    value: 1000,
    question: "Which popular Christmas beverage is also called 'milk punch'?",
    answer: "Eggnog",
  },
];

const christmasCategory: Category = {
  name: "Christmas Part 1",
  questions: christmas1,
};

const christmasCategory2: Category = {
  name: "Christmas Part 2",
  questions: christmas2,
};

const chanukahCategory: Category = {
  name: "Chanukah Questions",
  questions: chanukah,
};

export const jeopardyQuestions: Category[] = [
  christmasCategory,
  christmasCategory2,
];
