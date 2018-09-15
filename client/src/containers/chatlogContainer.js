import React, { Component } from "react";

import socket, { CONNECTION_SUCCESS, NEW_MESSAGE } from "api";

class ChatlogContainer extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount = () => {
    
    socket.on(CONNECTION_SUCCESS, newMessage => {
      const {messages} = this.state
      this.setState({ messages: [...messages, newMessage] });
    });
    socket.on(NEW_MESSAGE, newMessage => {
      const {messages} = this.state
      this.setState({ messages: [...messages, newMessage] });
    });
  };
  render() {
    return (
      <div>
        {this.state.messages.map(message => {
          return <div>{message}</div>;
        })}
      </div>
    );
  }
}

export default ChatlogContainer;
