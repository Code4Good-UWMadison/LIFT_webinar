import React, {Component} from 'react';
import Question from './question/question'
import './QuizMain.css';
import Answer from './answer/answer'
export default class Quiz extends Component {
  // initating the state

  state = {
    questions: {

      1: '1.	What is the current status of this individual’s driver’s license?',
      2: '2.	What caused this individual’s first suspension, according to this Abstract?',
      3: '3.	Assuming that the date is October 1, 2020, how many active suspensions/revocations does this client have?',
      4: '4.	Assuming that the date is November 8, 2019, how many active suspensions/revocations does this client have?',
      5: '5.	What effect do past (i.e., expired) suspensions for failure to pay forfeiture have on this individual?',

    },
    answers: {
    1: {
      1: 'Expired',
      2: 'Revoked',
      3: 'Suspended',
    },
    2: {
      1: 'Driver record, or points',
      2: 'Operating without driver license',
      3: 'Failure to pay forfeiture',
    },
    3: {
      1: 'Two',
      2: 'One',
      3: 'None',
    },
    4: {
      1: 'Two',
      2: 'One',
      3: 'Three',
    },
    5: {
      1: 'No effect',
      2: 'They cannot get a drivers license',
      3: 'The debts still exist',
    },
  },
    correctAnswers: {
      1: '3',
      2: '1',
      3: '2',
      4: '1',
      5: '3',


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
                          style={{marginTop: 15 + "px"}}
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
                              {/* <p>1: The answer is C. Suspended. The top of the Abstract states this status with the abbreviation “SUS.” Critically, the Abstract also shows in purple font that no license was issued for this driver. A driver who has never had a driver’s license may have to address a suspension before getting a license at all.</p>
                              <p>2: The answer is A. Driver record. This individual’s first suspension can be found by scrolling to the bottom of the Abstract to read it chronologically. The first suspension occurred on August 24, 2016 as a result of points accrued from the following violations: operating without driver license (3 points); operating without driver license (6 points); and operating without driver license; (6 points). Thus, not having a driver’s license at all led to tickets that led to a suspension.</p>
                              <p>3: The correct answer is B. One. Only the most recent suspension, a one-year suspension beginning on November 7, 2019, is still in effect.</p>
                              <p>4: The correct answer is A. Two. The most recent suspension, a one-year suspension beginning on November 7, 2019, is still in effect and the 265-day suspension beginning April 11, 2019 is in effect until January 1, 2020. </p>
                              <p>5: The correct answer is C. The debts still exist. Although the suspensions themselves have run they are not active––the underlying forfeitures still have not been paid and could result in collections actions. </p> */}
                              <p>Thank you!</p>
                          </div>
                      )
                  }
              </div>
          );
      }
}
