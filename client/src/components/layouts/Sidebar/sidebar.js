import React, { Component } from 'react'

import {Layout} from 'antd'

const {Sider} = Layout;

class Sidebar extends Component {
  render () {
    console.log(this.props);
    return (
      <Sider>
        left sidebar
      </Sider>
    )
  }
}

export default Sidebar


// <Layout>
//   <Header>header</Header>
//   <Layout>
//     <Sider>left sidebar</Sider>
//     <Content>main content</Content>
//     <Sider>right sidebar</Sider>
//   </Layout>
//   <Footer>footer</Footer>
// </Layout>