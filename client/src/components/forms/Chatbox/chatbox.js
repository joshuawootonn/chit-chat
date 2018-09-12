import React, { Component } from 'react';

import {Button,Input} from 'antd'

class Chatbox extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" />
        <Button type="primary">Send</Button>
      </div>
    );
  }
}

export default Chatbox;