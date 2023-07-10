import ClassCode from "../../Source/Reactcode/Classcode";
import Constrctor from "../../Source/Reactcode/Constrctor";
import FunCom from "../../Source/Reactcode/Funcom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ReactComponent() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">React Components</h3>
        <p className="mt-3">
          In React, a component is a reusable and self-contained piece of code
          that encapsulates a specific functionality or UI. Components are the
          building blocks of React applications, allowing you to create modular
          and maintainable code.
        </p>
        <h3 className="mt-3">Types</h3>
        <p className="mt-3">
          {" "}
          There are two types of components in React: functional components and
          class components.
        </p>
        <ol>
          <li>Functional Component</li>
          <li>Class Component</li>
        </ol>
        <h3 className="mt-3">Functional Component</h3>
        <p className="mt-3">
          Functional components are JavaScript functions that return JSX
          (JavaScript XML) to define the component's structure and UI. They are
          simple and lightweight, primarily used for presentational purposes.
          Here's an example of a functional component:
        </p>
        <FunCom />
        <h3 className="mt-5">Class Component</h3>
        <p class="mt-3">
          {" "}
          When creating a React component, the component's name must start with
          an upper case letter.
          <br />
          <br />
          The component has to include the <b> extends React.Component </b>
          statement, this statement creates an inheritance to React.Component,
          and gives your component access to React.Component's functions.
          <br />
          <br />
          The component also requires a <b> render() method </b>, this method
          returns HTML.
        </p>{" "}
        <ClassCode />
        <h3 className="mt-5">Constructor</h3>
        <p class="mt-3">
          If there is a constructor() function in your component, this function
          will be called when the component gets initiated.
          <br />
          <br />
          The constructor function is where you initiate the component's
          properties.
          <br />
          <br />
          In React, component properties should be kept in an object called
          state.
        </p>
        <Constrctor />
      </div>
      <Footer />
    </>
  );
}
