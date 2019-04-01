import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {
        name: "Nisar",
        age: 29
      },
      {
        name: "Vikus",
        age: 30
      },
      {
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
          id: 'sdsd',
          name: newName,
          age: 30
        },
        {
          id: 'sdr',
          name: "Vikus",
          age: 30
        },
        {
          id: 'awe',
          name: "Shanky",
          age: 30
        }
      ]
    }
  );
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {
          name: 'Max',
          age: 30
        },
        {
          name: event.target.value,
          age: 30
        },
        {
          name: "Shanky",
          age: 30
        }
      ]
    }
  );
  }

  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    }
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    });
  }

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
            this.state.persons.map( (person,index) => {
              return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} change={this.nameChangedHandler} key={person.id}/>
            })
          }

          {/*
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
