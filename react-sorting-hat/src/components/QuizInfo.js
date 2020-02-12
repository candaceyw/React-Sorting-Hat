import React from 'react';

const QuizInfo = props => {
 

    return(
        <div>
            <h3>{props.item.question}</h3>
            <form>

                <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="option"
                        value="option1"
                        className="form-check-input"/> 
                        {props.item.answer1}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="option"
                        value="option2"
                        className="form-check-input"/> 
                        {props.item.answer2}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="option"
                        value="option3"
                        className="form-check-input"/> 
                        {props.item.answer3}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="option"
                        value="option4"
                        className="form-check-input"/> 
                        {props.item.answer4}
                    </label>
                </div>


            </form>
        </div>
    )
}

export default QuizInfo;