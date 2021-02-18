import React from 'react';
import './answer.css';

const Answer = (props) => {
    let explains = [
        " The answer is C. Suspended. The top of the Abstract states this status with the abbreviation “SUS.” Critically, the Abstract also shows in purple font that no license was issued for this driver. A driver who has never had a driver’s license may have to address a suspension before getting a license at all.",
        " The answer is A. Driver record. This individual’s first suspension can be found by scrolling to the bottom of the Abstract to read it chronologically. The first suspension occurred on August 24, 2016 as a result of points accrued from the following violations: operating without driver license (3 points); operating without driver license (6 points); and operating without driver license; (6 points). Thus, not having a driver’s license at all led to tickets that led to a suspension.",
        " The correct answer is B. One. Only the most recent suspension, a one-year suspension beginning on November 7, 2019, is still in effect.",
        " The correct answer is A. Two. The most recent suspension, a one-year suspension beginning on November 7, 2019, is still in effect and the 265-day suspension beginning April 11, 2019 is in effect until January 1, 2020. ",
        " The correct answer is C. The debts still exist. Although the suspensions themselves have run they are not active––the underlying forfeitures still have not been paid and could result in collections actions."
    ];
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === qAnswer ?
                'correct' :
                props.clickedAnswer === qAnswer ?
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));

        return (
            <>
                <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                    {answers}
                </ul>
                <div>
                    {
                        props.correctAnswer ?
                        'Correct Answer!' :
                        props.clickedAnswer ? 'Incorrect Answer!' : ''
                    }
                </div>
                <div>
                    { props.clickedAnswer ? explains[props.step - 1] : "" }
                </div>
            </>
        );
}

export default Answer;
