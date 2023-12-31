import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const Easy = ({ easyQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  let curIndex = 0;

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  function selectedAnswer(selected) {
    setAnswered(true);
  }

  useEffect(() => {
    setCurrentQuestion(shuffle(easyQuestions));
    if (currentQuestion.length !== 0) {
      setCurrentAnswers(shuffle(currentQuestion[curIndex].answers));
    }
  }, [easyQuestions, curIndex, currentQuestion]);

  return (
    <div className="home container-sm p-5">
      {currentQuestion.length === 0 ? (
        <div className="spinner">
          <Puff color="#204963" height="60" width="60" />
          <p className="mt-3">Loading Question...</p>
        </div>
      ) : (
        <div>
          <p className="h3">{currentQuestion[curIndex].question}</p>
          <div className="btn-container p-5">
            {currentAnswers.map((a) => {
              return (
                <QuestionOption
                  key={a.id}
                  parentFunction={selectedAnswer}
                  correctness={a.correct}
                  defaultClass="btn btn-primary mt-5 p-2"
                  colors={{
                    default: "blue",
                    correct: "greenButton",
                    incorrect: "redButton",
                  }}
                  answered={answered}
                  text={a.answer}
                ></QuestionOption>
              );
            })}
          </div>
          <Link to="/">
            <button className="votd btn btn-link mt-2 p-2">Main Menu</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Easy;

function QuestionOption(props) {
  const [myColor, setMyColor] = useState(props.colors.default);

  const changeColor = () => {
    if (props.correctness) {
      setMyColor(props.colors.correct);
    } else {
      setMyColor(props.colors.incorrect);
    }
  };

  useEffect(() => {
    if (!props.haveAnswered) {
      setMyColor(props.colors.default);
    }
  }, [props.haveAnswered, props.colors.default]);

  return (
    <button
      key={props.key}
      className={`${props.defaultClass} ${myColor}`}
      onClick={() => {
        props.parentFunction(props.correctness);
        changeColor();
      }}
    >
      {props.text}
    </button>
  );
}
