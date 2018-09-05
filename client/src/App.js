import React, { Component } from 'react';

import socket, {CONNECTION_SUCCESS, NEW_MESSAGE} from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: null
    }
  }
  componentDidMount = () => {
    socket.on(CONNECTION_SUCCESS, message => {
      this.setState({message})
    })
    socket.on(NEW_MESSAGE, message => {
      this.setState({newMessageResponse: message})
    })    
  }
  send = () => {
    console.log("asdf")
    socket.emit(NEW_MESSAGE, "dsafjldskjfa skldjfaslkdjf alksdjfkalsdjl")
  }
  render() {
    const {message,newMessageResponse} = this.state;
    return (
      <div className="App">
        {message}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {newMessageResponse}
        <button onClick={this.send}>click to send a new message</button>
      </div>
    );
  }
}

export default App;
