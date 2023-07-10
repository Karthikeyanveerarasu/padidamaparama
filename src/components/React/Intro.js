import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Intro() {
  return (
    <>
      <Navbar />
      <div className="container">
        <p className="mt-3">
          <h3> What is React? </h3>
          React, sometimes referred to as a frontend JavaScript framework, is a
          JavaScript library created by Facebook.
          <br />
          <br />
          React is a tool for building UI components.
          <br />
          <br />
          <h3> How does React Work?</h3>
          React creates a VIRTUAL DOM in memory.
          <br />
          <br />
          Instead of manipulating the browser's DOM directly, React creates a
          virtual DOM in memory, where it does all the necessary manipulating,
          before making the changes in the browser DOM.
          <br />
          <br />
          React only changes what needs to be changed!
          <br />
          <br />
          React finds out what changes have been made, and changes only what
          needs to be changed.
          <br />
          <br />
          You will learn the various aspects of how React does this in the rest
          of this tutorial.
          <br />
          <br />
          <h3>React.JS History </h3>
          Current version of React.JS is V18.0.0 (April 2022).
          <br />
          <br />
          Initial Release to the Public (V0.3.0) was in July 2013.
          <br />
          <br />
          React.JS was first used in 2011 for Facebook's Newsfeed feature.
          <br />
          <br />
          Facebook Software Engineer, Jordan Walke, created it.
          <br />
          <br />
          Current version of create-react-app is v5.0.1 (April 2022).
          <br />
          <br />
          create-react-app includes built tools such as webpack, Babel, and
          ESLint.
          <br />
          <br />
          <h3>Setting up a React Environment </h3>
          If you have npx and Node.js installed, you can create a React
          application by using create-react-app.
          <br />
          <br />
          If you've previously installed create-react-app globally, it is
          recommended that you uninstall the package to ensure npx always uses
          the latest version of create-react-app.
          <br />
          <br />
          To uninstall, run this command: npm uninstall -g create-react-app.
          <br />
          <br />
          Run this command to create a React application named my-react-app:
          <br />
          <br />
          <div
            className="text-center bg-dark text-white p-3"
            style={{ borderRadius: "20px" }}
          >
            npx create-react-app my-app
            <br />
            <br />
            cd my-app
            <br />
            <br />
            npm start
          </div>
        </p>
      </div>
      <Footer />
    </>
  );
}
