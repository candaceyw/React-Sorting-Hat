import React from 'react';
import QuizInfo from './QuizInfo'

const Quiz = props => {

    return(
    props.quizData.map( 
        (question,i) => 
            <QuizInfo item={question} key={i}/>
        
    ))
}

export default Quiz;