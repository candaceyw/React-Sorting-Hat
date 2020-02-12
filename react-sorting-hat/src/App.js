import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Quiz from './components/Quiz';
import Landing from './components/Landing'

const quizData = [
  {
    'question': 'What best describes you?',
    'answer1': 'Brave',
    'answer2': 'Clever',
    'answer3': 'Loyal',
    'answer4': 'Cunning',


}
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hogwarts</h1>
          <Landing/>
          <Quiz quizData={quizData}/>
          <Results />
      </div> 
    );
  }
}

export default App;
