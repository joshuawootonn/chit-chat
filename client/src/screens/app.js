import React, { Component } from 'react';

import {Layout} from 'antd';

import socket, {CONNECTION_SUCCESS, NEW_MESSAGE} from '../api';

import ChatboxContainer from '../containers/chatboxContainer';
import ChatlogContainer from '../containers/chatlogContainer';
import SidebarContainer from '../containers/sidebarContainer';

const {Sider,Content} = Layout

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
      <Layout>
        <Sider>
          <SidebarContainer />
        </Sider>
        <Content>
          <ChatlogContainer />
          <ChatboxContainer />
        </Content>        
      </Layout>
    );
  }
}

export default App;


// import { Layout, Menu, Icon } from 'antd';

// const { Header, Content, Footer, Sider } = Layout;

// export default () =>{

//   return (
//   <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={(broken) => { console.log(broken); }}
//       onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1">
//           <Icon type="user" />
//           <span className="nav-text">nav 1</span>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Icon type="video-camera" />
//           <span className="nav-text">nav 2</span>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Icon type="upload" />
//           <span className="nav-text">nav 3</span>
//         </Menu.Item>
//         <Menu.Item key="4">
//           <Icon type="user" />
//           <span className="nav-text">nav 4</span>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header style={{ background: '#fff', padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>
//         Ant Design ©2018 Created by Ant UED
//       </Footer>
//     </Layout>
//   </Layout>)}