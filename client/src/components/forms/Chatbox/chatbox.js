import React, { Component } from 'react';

import {Field,Form} from 'formik'
import {Button,Input} from 'antd'

import {styleCreator} from 'helpers/style'

const styles ={
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  }
}

class Chatbox extends Component {
  render() {
    const classes = styleCreator(styles)
    
    return (
      <Form className={classes.wrapper}>
        <Field 
          name="message"
          render={({field}) => (
            <Input placeholder="Basic usage" {...field} />
          )}
        />
        <Button htmlType="submit" type="primary">Send</Button>
      </Form>
    );
  }
}

export default Chatbox;