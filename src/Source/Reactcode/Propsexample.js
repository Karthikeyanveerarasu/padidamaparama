import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// This is a functional component
const Propsexample = () => {
  const code = `
  // Functional component
  const ChildComponent = (props) => {
    return <div>{props.prop1}</div>;
  };
  
  // Class component
  class ChildComponent extends React.Component {
    render() {
      return <div>{this.props.prop1}</div>;
    }
  }
  
	`;

  return (
    <div>
      <SyntaxHighlighter language="jsx" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export default Propsexample;
