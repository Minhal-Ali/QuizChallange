import React, { Component } from "react";
import quizQuestions from "./api/questions";
import Quiz from "./components/Quiz";
// import Result from "./components/Result";
//import logo from './svg/logo.svg';
import "./index.css";
import "./app.css";
import ProgressBar from "../src/components/ProgressBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      allQuestions: [],
      answer: "",
      selectedAnswers: {},
      result: "",
      correctAnswerCounter: 0,
      answerStatus: 0,
      progress: 0,
      progress1: 0,
      progress2: 0,
      progress3: 0,
      color: "grey",
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewreults = this.viewreults.bind(this);
  }

  handleAnswerSelected(e) {
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(e.target.value);
    console.log(
      "for selected question number " +
        (_self.state.counter + 1) +
        " answer is " +
        (index + 1) +
        " selected"
    );
    var Qindex = _self.state.counter;
    // create map and store all selecred answers with quiz Questions
    obj[Qindex] = index;
    _self.setState({ selectedAnswers: obj });

    if (quizQuestions[_self.state.counter].answerindex === index) {
      this.setState({ answerStatus: 1 });
      this.setState({
        correctAnswerCounter: this.state.correctAnswerCounter + 1,
      });
    } else {
      this.setState({ answerStatus: 2 });
    }
    if (_self.state.counter + 1 === 5) {
      this.setState({ progress: (_self.state.counter + 1 / 5) * 100 });
    }
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      allQuestions: quizQuestions,
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const correctAnswers=this.state.correctAnswerCounter;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
      answerStatus: 0,
    });
    this.setState({progress: (counter / 5) * 100 });
    this.setState({progress1:((correctAnswers/5)*100)});
    this.setState({progress2:(((correctAnswers)/counter)*100)});
    var remaingAnswers = 5 - counter;
    this.setState({progress3:((( remaingAnswers+correctAnswers)/5)*100)});
  }
  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
      answerStatus: 0,
    });
    this.setState({ progress: (((counter/ 5) )* 100) });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        viewreults={this.viewreults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer={this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        answerStatus={this.state.answerStatus}
        progress1={this.state.progress1}
        progress2={this.state.progress2}
        progress3={this.state.progress3}
      />
    );
  }

  viewreults(e) {
    e.preventDefault();
    this.setState({ result: true });
  }
  // decide to render result or quiz
  render() {
    return (
      <div className="App">
        <ProgressBar progress={this.state.progress} color={this.state.color} />
        <div className="App-header">
          <h2>Quiz Assignment :</h2>
        </div>
        {this.renderQuiz()}
      </div>
    );
  }
}

export default App;
