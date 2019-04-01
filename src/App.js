import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>

          {
            this.state.persons.map((person,index) => {
              return <Person 
                name={person.name} 
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event,person.id)}
                  />
            }
            )
          }

          {/*
       This can be replaced with map function in JS
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler}
       changed={this.nameChangedHandler}
       />
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
        */}
       </div>
         
      );
    }

    return (
      <div className="App">
       <h1> Hi, I'm a react App </h1>
       <p> This is really working </p>
       <button
       style = {style} 
       onClick={this.togglePersonshandler}> Switch </button>
       {persons}
      </div>
    );
  }
}

export default App;
