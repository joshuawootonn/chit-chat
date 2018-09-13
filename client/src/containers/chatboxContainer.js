import React, { Component } from "react";

import { Formik } from "formik";

import ChatboxForm from "components/forms/Chatbox";

class ChatboxContainer extends Component {
  render() {
    return (
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values,{resetForm }) => {
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
