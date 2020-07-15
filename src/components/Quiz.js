import React from "react";
import StarRatings from "react-star-ratings";
import Question from "../components/Questions";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswereOptions";
import MultiProgressBar from "./MultiProgressBar";

function Quiz(props) {
  //0 for hidden
  //1 for correct
  //2 for incorrect

  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        index={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div key={props.questionId} className="quiz-story">
      <StarRatings rating={3} starDimension="20px" starSpacing="1px" />
      <QuestionCount
        counter={props.counter}
        viewreults={props.viewreults}
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      {props.answerStatus === 0 ? null : (
        <h1>
          {props.answerStatus === 1
            ? "Correct!"
            : "Sorry! your answer is incorrect."}
        </h1>
      )}
      <div className="bottom-footer">
        {props.counter > 0 ? (
          <button className="Previous-btn" onClick={props.setPreviousQuestion}>
            Previous
          </button>
        ) : (
          <div></div>
        )}

        {props.counter < 4 ? (
          <button className="next-btn" onClick={props.setNextQuestion}>
            Next
          </button>
        ) : (
          <div></div>
        )}
        <div style = {{width:'50%',position:"relative",marginTop:"20px",marginLeft:"150px"}}>
          <MultiProgressBar progress1={props.progress1} progress2={props.progress2} progress3={props.progress3}/>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
