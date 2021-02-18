import React from 'react';
import './answer.css';

const Answer = (props) => {

    let explains = [                              
        " The answer is C. The driver has a suspension/revocation for operating while intoxicated. The requirement for a BAC under .02 and an ignition interlock device indicates an infraction related to alcohol.",
        " The answer is B. Revoked. You should always check the status listed at the top of the Abstract. Remember, even if the status is revoked, there may also be current suspensions too.",
        " The answer is A. Three. This client is facing (1) a one-year revocation ending on October 3, 2019 for implied consent refusal; (2) a nine-month revocation ending on July 4, 2019 for operating while intoxicated; and (3) an indefinite revocation for failure to appear at an alcohol assessment that began on February 19, 2019. None of these revocations have ended by March 1, 2019. ",
        " The answer is B. Municipal court. You can see this in the “Authority” line for each revocation. In a nonredacted Abstract, you would also see the case number for each revocation. ",
        " The answer is C. One. This client is facing only an indefinite revocation for failure to appear at an alcohol assessment that began on February 2, 2019. The other two revocations on this Abstract (a one-year revocation ending on October 3, 2019 for implied consent refusal and a nine-month revocation ending on July 4, 2019 for operating while intoxicated) have already run."];
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
