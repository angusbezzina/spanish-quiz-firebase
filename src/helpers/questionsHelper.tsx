import Airtable from "airtable";

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

export type RawQuestion = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type FormattedQuestion = {
  question: string;
  answerChoices: string[];
  answer?: number;
};

export const loadQuestions = async (baseName: string) => {
  const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

  try {
    let airTableQuestions: any = [];

    await base(baseName)
      .select({
        maxRecords: 10,
        view: "Grid view",
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const question = record.get("Question");
          const incorrectAnswers = record.get("Incorrect Answers");
          const answer = record.get("Correct Answer");
          let incorrectAnswerArray = incorrectAnswers;

          // TODO: Fix this check.
          if (typeof incorrectAnswers === "string") {
            incorrectAnswerArray = incorrectAnswers.split(", ");
          }

          const formattedQuestion = {
            question,
            incorrect_answers: incorrectAnswerArray,
            correct_answer: answer,
          };

          airTableQuestions.push(formattedQuestion);
        });

        fetchNextPage();
      });

    return convertQuestionsFromAPI(airTableQuestions);
  } catch (error) {
    console.error(error);
  }
};

const convertQuestionsFromAPI = (rawQuestions: RawQuestion[]) => {
  return rawQuestions.map((loadedQuestion) => {
    const formattedQuestion: FormattedQuestion = {
      question: loadedQuestion.question,
      answerChoices: [...loadedQuestion.incorrect_answers],
    };

    formattedQuestion.answer = Math.floor(Math.random() * 4);

    formattedQuestion.answerChoices.splice(
      formattedQuestion.answer,
      0,
      loadedQuestion.correct_answer
    );

    return formattedQuestion;
  });
};
