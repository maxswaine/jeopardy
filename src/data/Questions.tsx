import { Category, Question } from "../types/types";

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
    answer: "Who is Sandy Claws",
  },
  {
    value: 600,
    question:
      "In this country, it has become traditional for families across the country to eat KFC as their Christmas dinner.",
    answer: "What is Japan?",
  },
  {
    value: 800,
    question: "This company invented the idea that Santa Claus’ suit is red?",
    answer: "What is Coca-cola?",
  },
  {
    value: 1000,
    question: "This popular Christmas beverage is also called 'milk punch'?",
    answer: "What is Eggnog?",
  },
];

const chanukah: Question[] = [
  {
    value: 200,
    question: "In English, Chanukah is also known by this name.",
    answer: "What is the Festival of Lights?",
  },
  {
    value: 400,
    question: "These spinning tops are used during Chanukah",
    answer: "What are Driedels",
  },
  {
    value: 600,
    question: "This is the amount of branches on a Menorah",
    answer: "What is 9?",
  },
  {
    value: 800,
    question:
      "The Hebrew letters on a driedel translate to this English phrase...",
    answer: "What is `A great miracle happened there?`",
  },
  {
    value: 1000,
    question:
      "The Jewish army that revolted against the Greeks was known by this name...",
    answer: "Who are the Maccabees",
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
  chanukahCategory,
];
