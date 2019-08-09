import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Mohamed', age: 32, id: 'iuhyb'},
      {name: 'Bady', age: 31, id: 'jbn'},
      {name: 'Wadah', age: 32, id: 'adbaf'}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Mohamed', age: 32},
        {name: event.target.value, age: 31},
        {name: 'Wadah', age: 31}
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} 
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)} />}
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
