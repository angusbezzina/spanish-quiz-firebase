import { useState, useEffect, useCallback } from "react";
import Question from "./Question";
import { loadQuestions } from "../helpers/questionsHelper";
import HUD from "./HUD";
import { RouteComponentProps } from 'react-router-dom';
import SaveScoreForm from "./SaveScoreForm";

import { LoaderStyles } from '../styles/LoaderStyles';
import { HomeLinkStyles } from '../styles/ButtonStyles';



const Game: React.FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    loadQuestions("Spanish").then(setQuestions).catch(console.error);
  }, []);

  const scoreSaved = () => {
    history.push("/");
  };

  const changeQuestion = useCallback(
    (bonus: number = 0): void => {
      if (questions.length === 0) {
        setDone(true);
        return setScore(score + bonus);
      }

      const randomQuestionIndex = Math.floor(Math.random() * questions.length);
      const currentQuestion = questions[randomQuestionIndex];
      const remainingQuestions = [...questions];
      remainingQuestions.splice(randomQuestionIndex, 1);

      setQuestions(remainingQuestions);
      setCurrentQuestion(currentQuestion);
      setLoading(false);
      setScore(score + bonus);
      setQuestionNumber(questionNumber + 1);
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setLoading,
      setCurrentQuestion,
      setQuestionNumber,
    ]
  );

  useEffect(() => {
    if (!currentQuestion && questions.length) {
      changeQuestion();
    }
  }, [currentQuestion, questions, changeQuestion]);

  return (
    <>
      {loading && !done && <LoaderStyles />}

      {!loading && !done && currentQuestion && (
        <div>
          <HUD score={score} questionNumber={questionNumber} />
          <Question
            question={currentQuestion}
            changeQuestion={changeQuestion}
          />
          <HomeLinkStyles to="/">Home</HomeLinkStyles>
        </div>
      )}

      {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
    </>
  );
}

export default Game;
