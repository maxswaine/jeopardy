import { Category, Question } from "../Types/types";

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
    }
  ];

  const christmas: Question[] = [
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
      }
    ]

    const christmasCategory: Category = { name: "Christmas Questions", questions: christmas };
    const chanukahCategory: Category = { name: "Chanukah Questions", questions: chanukah };
      
    export const jeopardyQuestions: Category[] = [chanukahCategory, christmasCategory];