import Props from "../../Source/Reactcode/Props";
import Propscode from "../../Source/Reactcode/Propscode";
import Propsexample from "../../Source/Reactcode/Propsexample";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ReactProps() {
  return (
    <>
      <Navbar />
      <div class="container">
        <h3 className="mt-4">React Props</h3>
        <p className="mt-3">
          In React, "props" is short for "properties" and refers to a mechanism
          for passing data from a parent component to its child components.
          Props are used to provide configuration or data to components and
          allow them to customize their behavior or display based on the values
          passed to them.
          <br />
          <br />
          Props are read-only, meaning that a component receiving props cannot
          modify the values directly. Instead, they are passed down from a
          parent component and used within the receiving component to render the
          appropriate content or behavior.
        </p>
        <br />
        <b>Here are some key points about props in React:</b>
        <ol className="mt-3">
          <li>
            Props are passed as attributes to child components when they are
            used in the JSX. For example:
            <div>
              <Propscode />
            </div>
            <li>
              Props are accessible within the receiving component via the props
              object. For functional components, props are passed as a
              parameter, whereas in class components, they are accessed using
              this.props. For example:
            </li>
            <div>
              <Propsexample />
            </div>
          </li>
        </ol>
        <h3 className="mt-4">Example</h3>
        <Props />
      </div>
      <Footer />
    </>
  );
}
