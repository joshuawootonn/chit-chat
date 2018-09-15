import React, { Component } from "react";

import { Formik } from "formik";

import socket, { CONNECTION_SUCCESS, NEW_MESSAGE } from "api";
import ChatboxForm from "components/forms/Chatbox";

class ChatboxContainer extends Component {
  render() {
    return (
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values,{resetForm }) => {
          socket.emit(NEW_MESSAGE, values.message);
          resetForm();
        }}
        render={props => {
          console.log(props.values);
          return <ChatboxForm {...props}  />;
        }}
      />
    );
  }
}

export default ChatboxContainer;
