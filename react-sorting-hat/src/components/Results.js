import React from 'react';

const Results = props => {
    return (
        <div>
            <h1>You belong in {props.quizResults.house}</h1>
            <img src={props.quizResults.image} alt='House Crest' />
            <p>{props.quizResults.quote}</p>
            <p>{props.quizResults.qualities}</p>
            <p>{props.quizResults.wizards}</p>

        </div>
    )

}

export default Results;