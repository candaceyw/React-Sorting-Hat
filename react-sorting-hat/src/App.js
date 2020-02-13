import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Quiz from './components/Quiz';
import Landing from './components/Landing'
import { quizData } from './components/quizData'
import { quizResults } from './components/quizResults';


class App extends Component {
  constructor(){
    super();
      this.state={
        tallyResults: []
      }
  }

  


  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hogwarts</h1>
          <Landing/>
          <Quiz quizData={quizData}/>
          <Results quizResults={quizResults}/> 
      </div> 
    );
  }
}

export default App;
