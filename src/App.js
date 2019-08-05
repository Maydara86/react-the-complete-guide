import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persones: [
      {name: 'Mohamed', age: 32},
      {name: 'Bady', age: 31},
      {name: 'Wadah', age: 32}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked!')
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persones[0].name} age={this.state.persones[0].age} />
        <Person name={this.state.persones[1].name} age={this.state.persones[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persones[2].name} age={this.state.persones[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this Work?'));;
  }
}

export default App;
