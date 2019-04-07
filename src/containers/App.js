import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
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
      showPersons : false,
      showCockpit : true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
    
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons){
      persons = (
          <Persons 
          persons={this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />   
      );

    }

    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showCockpit:false})}}> click </button>
      {this.state.showCockpit ?
      <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        toggle={this.togglePersonshandler}
      /> : null }
       {persons}
      </div>
    );
  }
}

export default App;
