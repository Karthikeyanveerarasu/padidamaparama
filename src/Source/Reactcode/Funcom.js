import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
// This is a functional component
const FunCom = () => {
  const notify = () => toast.success("Copied");
  const code = `
		import React from 'react';
		import ReactDOM from 'react-dom';

		// This is a functional component
		const Welcome = () => {
			return <h1>Hello World!</h1>
		}

		ReactDOM.render(
			<Welcome />,
			document.getElementById("root")
		);
	`;

  return (
    <div>
      <Toaster />
      <div className="bg-dark p-2 mt-3">
        <CopyToClipboard text={code}>
          <button class="Btn ms-auto" onClick={notify}>
            <span class="text">Copy</span>
            <span class="svgIcon">
              <svg
                fill="white"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
              </svg>
            </span>
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language="jsx"
        customStyle={{ margin: "0", padding: "0" }}
        style={darcula}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export default FunCom;
