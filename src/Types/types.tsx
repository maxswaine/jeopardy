export type Question = {
  value: number;
  question: string;
  answer: string;
};

export type Category = {
    name: string;
    questions: Question[];
  };
  
  
