import React, { Component } from 'react'

import {Layout} from 'antd'

const {Sider,Content} = Layout

class Sidebar extends Component {
  render () {
    console.log(this.props);
    return (
      <Layout>
        <Sider>
          left sidebar
        </Sider>
        <Content>
          {this.props.children}
        </Content>        
      </Layout>
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