import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'iuhyb', name: 'Mohamed', age: 32},
      {id: 'jbn', name: 'Bady', age: 31},
      {id: 'adbaf', name: 'Wadah', age: 32}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          changed={this.nameChangedHandler}
          clicked={this.deletePersonHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <CockPit
        persons={this.state.persons}
        show={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
