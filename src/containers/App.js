import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';

class App extends Component {

  state = {
    persons : [
      {
        id: '1',
        name: "Nisar",
        age: 29
      },
      {
        id: '2',
        name: "Vikus",
        age: 30
      },
      {
        id: '3',
        name: "Shanky",
        age: 30
      }
    ],
    showPersons : false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      persons : [
        {
          id: '1',
          name: newName,
          age: 30
        },
        {
          id: '2',
          name: "Vikus",
          age: 30
        },
        {
          id: '3',
          name: "Shanky",
          age: 30
        }
      ]
    }
  );
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    });

  }

  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    }
    );
  }

  deletePersonHandler = (personIndex) => {
    // fetch all persons and update new state
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }

   maxScoreSightseeingPair = function(A) {
    let max = 0;
    for(let i = 0 ; i < A.length - 1 ; i++){
      for(let j = i + 1 ; j < A.length ; j++){
        let current = A[i] + A[j] + i - j;
        if(current > max){
          current = max;
        }
      }
    }
    return max;
};

  render() {

    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
       </div>
         
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
       <h1> Hi, I'm a react App </h1>
       <p className={assignedClasses.join(' ')}> This is really working </p>
       <button
       className={btnClass}
       onClick={this.togglePersonshandler}> Toggle Persons </button>
       {persons}
      </div>
    );
  }
}

export default App;