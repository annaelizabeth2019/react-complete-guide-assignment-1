import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  
  state = {
    username: 'Anna is the #1 Queen!',
    p: [
      'paragraph one',
      'paragraph two',
      'paragraph three',
    ]
  }

  switchUsernameHandler = (event) => {
    console.log(event.target.value)
    return this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username}
        changed={this.switchUsernameHandler} />
        <UserOutput paragraph={this.state.p[0]}>This is a child</UserOutput>
        <UserOutput paragraph={this.state.p[1]} />
        <UserOutput 
        paragraph={this.state.p[2]}
        username={this.state.username} />
      </div>
    );
  } 
}

export default App;
