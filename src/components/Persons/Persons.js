import React, { Component } from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component{

  /*
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }
  */

  componentWillReceiveProps(props) {
    console.log('[Persons.js] componentWillReceiveProps', props);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person,index) => {
        return <Person 
          name={person.name} 
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event,person.id)}
            /> 
      }
      )
  }
}

export default Persons;
