import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Mohamed" age="32" />
        <Person name="Bady" age="31">Hobbies: Racing</Person>
        <Person name="Wadah" age="32"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this Work?'));;
  }
}

export default App;
