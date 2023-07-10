import UsecontextSyntax from "../../Source/Reactcode/Hooks/Usecontext";
import UseEffectHook from "../../Source/Reactcode/Hooks/UseEffectHook";
import Userefhook from "../../Source/Reactcode/Hooks/UseRef";
import UseStateSyntax from "../../Source/Reactcode/Hooks/usestateHook";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ReactHooks() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">React Hooks</h3>
        <p className="mt-3">
          React Hooks are functions that allow you to use state and other React
          features in functional components. They were introduced in React 16.8
          as a way to write more concise and reusable code compared to class
          components.
          <br />
          Here are some commonly used React Hooks:
        </p>
        <ol className="mt-3">
          <li className="mt-3">
            <b>UseState</b>
          </li>
          <p>
            useState is a Hook that allows you to add state to functional
            components. It returns a state variable and a function to update
            that variable. Example usage:
          </p>
          <UseStateSyntax />
          <li className="mt-3">
            <b>UseEffect</b>
          </li>
          <p>
            useEffect is a Hook that allows you to perform side effects in
            functional components. It accepts a callback function as its first
            argument and an optional array of dependencies as its second
            argument. The callback function is executed after every render.
          </p>
          <UseEffectHook />
          <li className="mt-3">
            <b>UseContext</b>
          </li>
          <p>
            useContext is a Hook that allows you to access the value of a React
            context from within a functional component. It takes a context
            object as an argument and returns the current context value. Example
            usage:
          </p>
          <UsecontextSyntax />
          <li className="mt-3">
            <b>useRef</b>
          </li>
          <p>
            useRef is a Hook that returns a mutable ref object that persists
            across re-renders. It can be used to access and manipulate DOM
            elements or store any mutable value. Example usage:
          </p>
          <Userefhook />
          <li className="mt-3">
            <b>useMemo</b>
          </li>
          <p>
            useMemo is a Hook that memoizes the result of a computation and
            returns the memoized value. It is useful for optimizing performance
            by preventing unnecessary re-computations.
          </p>
          <li className="mt-3">
            <b>UseCallBack</b>
          </li>
          <p>
            useCallback is a Hook that memoizes a callback function and returns
            a memoized version of it. It is useful for preventing unnecessary
            re-creation of callback functions in child components.{" "}
          </p>
        </ol>
      </div>
      <Footer />
    </>
  );
}
