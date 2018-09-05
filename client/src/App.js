import React, { Component } from 'react';

import socket, {CONNECTION_SUCCESS} from './api';

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
  }
  render() {
    const {message} = this.state;
    return (
      <div className="App">
        {message}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
