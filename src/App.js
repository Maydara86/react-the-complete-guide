import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Mohamed', age: 32},
      {name: 'Bady', age: 31},
      {name: 'Wadah', age: 32}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: 'Bady', age: 31},
        {name: 'Wadah', age: 31}
      ]
    })
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
          {this.state.persons.map(person => {
            return <Person name={person.name} 
            age={person.age} />}
          )}
        </div>
      );
      // persons = (
      //   <div>
      //     <Person 
      //     name={this.state.persons[0].name} 
      //     age={this.state.persons[0].age} />
      //     <Person 
      //     name={this.state.persons[1].name} 
      //     age={this.state.persons[1].age}
      //     click={this.switchNameHandler.bind(this, 'Zouba')}
      //     changed={this.nameChangedHandler}>Hobbies: Racing</Person>
      //     <Person 
      //     name={this.state.persons[2].name} 
      //     age={this.state.persons[2].age} />
      //   </div>
      // );
    }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show Names</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this Work?'));;
  }
}

export default App;
