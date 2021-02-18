import React, {Component} from 'react';
import Question from './question/question'
import './QuizMain.css';
import Answer from './answer/answer'
export default class Quiz extends Component {
  // initating the state

  state = {
    questions: {

      1: '1. Looking at the “Additional Customer Information” what prediction can you make?',
      2: '2. What is the status of this individual’s driver’s license?',
      3: '3. If you were working with this client on March 1, 2019, how many active suspensions/revocations would this client be facing?',
      4: '4. From which court do these client’s revocations originate from?',
      5: '5. Assuming that the date is March 1, 2020, how many active suspensions/revocations does this client have?',

    },
    answers: {
    1: {
      1: 'The driver has a suspension/revocation for failure to pay a forfeiture',
      2: 'The driver has a suspension/revocation for operating while suspended',
      3: 'The driver has a suspension/revocation for operating while intoxicated',
    },
    2: {
      1: 'Expired',
      2: 'Revoked',
      3: 'Suspended',
    },
    3: {
      1: 'Three',
      2: 'Two',
      3: 'One',
    },
      4:{
      1: 'State circuit court',
      2: 'Municipal court',   
},
      5: {
        1: 'Three',
        2: 'Two',
        3: 'One',
      }
      
  },
    correctAnswers: {
      1: '3',
      2: '2',
      3: '1',
       4: '2',
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
                              {/* <p>1. The answer is C. The driver has a suspension/revocation for operating while intoxicated. The requirement for a BAC under .02 and an ignition interlock device indicates an infraction related to alcohol. </p>
                              <p>2. The answer is B. Revoked. You should always check the status listed at the top of the Abstract. Remember, even if the status is revoked, there may also be current suspensions too.</p>
                              <p>3. The answer is A. Three. This client is facing (1) a one-year revocation ending on October 3, 2019 for implied consent refusal; (2) a nine-month revocation ending on July 4, 2019 for operating while intoxicated; and (3) an indefinite revocation for failure to appear at an alcohol assessment that began on February 19, 2019. None of these revocations have ended by March 1, 2019. </p>
                              <p>4: The answer is B. Municipal court. You can see this in the “Authority” line for each revocation. In a nonredacted Abstract, you would also see the case number for each revocation</p>
                              <p>5: The answer is C. One. This client is facing only an indefinite revocation for failure to appear at an alcohol assessment that began on February 2, 2019. The other two revocations on this Abstract (a one-year revocation ending on October 3, 2019 for implied consent refusal and a nine-month revocation ending on July 4, 2019 for operating while intoxicated) have already run.</p> */}
                              <p>Thank you!</p>

                          </div>
                      )
                  }
              </div>
          );
      }
}
