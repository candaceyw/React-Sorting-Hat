import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Quiz from './components/Quiz';
import Landing from './components/Landing'

const quizData = [
  {
    'question': 'What best describes you?',
    'answer1': 'Brave',
    'answer2': 'Whitty',
    'answer3': 'Loyal',
    'answer4': 'Cunning',

},

{
  'question': 'Which pet do you choose?',
  'answer1': 'Owl',
  'answer2': 'Cat',
  'answer3': 'Tod',
  'answer4': 'None, I can\'t be trusted to care for a pet',

},


{
  'question': 'You catch someone cheating, what do you do?',
  'answer1': 'Tell the professor - Cheating is wrong!',
  'answer2': 'Nothing, it did not affect me!',
  'answer3': 'Try to talk the student into confessing',
  'answer4': 'Praise the cheater for cheating the system',

},

{
  'question': 'Which describes you with friends?',
  'answer1': 'I surround myself with lots of friends',
  'answer2': 'I have very few close friends that I trust with my life',
  'answer3': 'I\'m carful with making new friends',
  'answer4': 'I make friends with people who can help me succeed',

},

{
  'question': 'Which skill are you most proud of?',
  'answer1': 'My ability to absorb new Information',
  'answer2': 'My ability to make new friends',
  'answer3': 'My ability to get what I want',
  'answer4': 'My ability to keep secrets',

},

{
  'question': 'Remember, the sorting hat listens to preferences. Which House do you feel you identify with most?',
  'answer1': 'Gryffindor',
  'answer2': 'Hufflepuff',
  'answer3': 'Ravenclaw',
  'answer4': 'Slytherin',

},

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
