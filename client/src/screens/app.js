import React, { Component } from "react";

import { Layout } from "antd";


import socket, { CONNECTION_SUCCESS, NEW_MESSAGE } from "../api";

import {styleCreator} from 'helpers/style'
import ChatboxContainer from "containers/chatboxContainer";
import ChatlogContainer from "containers/chatlogContainer";
import SidebarContainer from 'containers/sidebarContainer'

const { Sider, Content, Footer } = Layout;


const styles ={
  wrapper: {
    height: '100vh'
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      message: null
    };
  }
  componentDidMount = () => {
    socket.on(CONNECTION_SUCCESS, message => {
      this.setState({ message });
    });
    socket.on(NEW_MESSAGE, message =>   {
      this.setState({ newMessageResponse: message });
    });
  };
  render() {
    const { message, newMessageResponse } = this.state;
    const classes = styleCreator(styles)
    return (
      <Layout className={classes.wrapper}>
        <Sider>
          <SidebarContainer />
        </Sider>
        <Layout>
          <Content>
            <ChatlogContainer />
          </Content>
          <Footer>
            <ChatboxContainer />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;

