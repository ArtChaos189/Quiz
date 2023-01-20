import { useState } from "react";

import { Game } from "./components/Game";

import { Result } from "./components/Result";

import { questions } from "./__mocks__/questions";

import "./index.scss";

export const App = () => {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep((prev) => prev + 1);

    if (index === question.correct) {
      setCorrect((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} onClickVariant={onClickVariant} question={question} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};
