import { questions } from "../__mocks__/questions";

export const Game = ({ question, onClickVariant, step }) => {
  const preccent = (step / questions.length) * 100;

  return (
    <>
      <div className="progress">
        <div style={{ width: `${preccent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};
