import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// This is a functional component
const Propscode = () => {
  const code = `
  <ChildComponent prop1="value1" prop2={value2} />

	`;

  return (
    <div>
      <SyntaxHighlighter language="jsx" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export default Propscode;
