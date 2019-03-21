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
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
    this.setState({
      persons : [
        {
          name: "Nisar Shaik",
          age: 30
        },
        {
          name: "Vikus",
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

  render() {
    return (
      <div className="App">
       <h1> Hi, I'm a react App </h1>
       <p> This is really working </p>
       <button onClick={this.switchNameHandler}> Switch </button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler}/>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
