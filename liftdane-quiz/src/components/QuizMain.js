import React, {Component} from 'react';
import Question from './question/question'
import './QuizMain.css';
import Answer from './answer/answer'
export default class Quiz extends Component {
  // initating the state

  state = {
    questions: {

      1: 'What is the minimum age requirement for a drivers license in the state of Wisconsin?',
      2: 'What is the capital of Wisconsin?',
      3: 'How often do people get a speeding ticket on I-90?'

    },
    answers: {
    1: {
      1: '16',
      2: '18',
      3: '21',
    },
    2: {
      1: 'Madison',
      2: 'Milwaukee',
      3: 'Oconto',
    },
    3: {
      1: 'Once every 30 mins',
      2: 'Once every 2 hours',
      3: 'Once every 3 hours',
    }
  },
    correctAnswers: {
      1: '1',
      2: '1',
      3: '2',


    },

    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
  }

  checkAnswer = answer => {
    const{correctAnswers, step, score} = this.state;
    if (answer === correctAnswers[step]){
      this.setState({
        score: score+1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
        });
    } else {
      this.setState({
          correctAnswer: 0,
          clickedAnswer: answer

      });
    }


  }

  // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
          let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
          return(
              <div className="Content">
                  {step <= Object.keys(questions).length ?
                      (<>
                          <Question
                              question={questions[step]}
                          />
                          <Answer
                              answer={answers[step]}
                              step={step}
                              checkAnswer={this.checkAnswer}
                              correctAnswer={correctAnswer}
                              clickedAnswer={clickedAnswer}
                          />
                          <button
                          className="NextStep"
                          disabled={
                              clickedAnswer && Object.keys(questions).length >= step
                              ? false : true
                          }
                          onClick={() => this.nextStep(step)}>Next</button>
                      </>) : (
                          <div className="finalPage">
                              <h1>You have completed the quiz!</h1>
                              <p>Your score is: {score} of {Object.keys(questions).length}</p>
                              <p>Thank you!</p>
                          </div>
                      )
                  }
              </div>
          );
      }
}
