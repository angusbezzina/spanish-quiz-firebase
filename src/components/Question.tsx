import React, { useState } from "react";
import { FormattedQuestion } from '../helpers/questionsHelper';

import { QuestionStyles } from '../styles/QuestionStyles';

type QuestionProps = {
  question: FormattedQuestion;
  changeQuestion: (score: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, changeQuestion }) => {
  const [classToApply, setClassToApply] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer: number) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === question.answer ? "correct" : "incorrect";
    setClassToApply(classToApply);
    const bonus = selectedAnswer === question.answer ? 100 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {question.answerChoices.map((choice: string, index: number) => (
        <QuestionStyles
          key={index}
          correct={selectedAnswer === index && classToApply}
          onClick={() => {
            checkAnswer(index);
          }}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p className="choice-text" dangerouslySetInnerHTML={{ __html: choice }} />
        </QuestionStyles>
      ))}
    </div>
  );
}

export default Question;
