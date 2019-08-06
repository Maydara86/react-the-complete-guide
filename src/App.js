import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [personState, setPersonState] = useState({
    persones: [
      {name: 'Mohamed', age: 32},
      {name: 'Bady', age: 31},
      {name: 'Wadah', age: 32}
    ],
  });
  const [otherState, setOtherState] = useState('the variable')

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked!')
    setPersonState({
      persones: [
        {name: 'Zouba', age: 32},
        {name: 'Bady', age: 31},
        {name: 'Wadah', age: 31}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persones[0].name} age={personState.persones[0].age} />
      <Person name={personState.persones[1].name} age={personState.persones[1].age}>Hobbies: Racing</Person>
      <Person name={personState.persones[2].name} age={personState.persones[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this Work?'));;
}

export default app;
