import Linktag from "../../Source/routing/Linktag";
import Rsetup from "../../Source/routing/RouterSetup";
import Rsyntax from "../../Source/routing/Routingsyntax";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Routing() {
  return (
    <>
      <Navbar />
      <div className="mt-3 container">
        <h3>Routing</h3>
        <p className="mt-3">
          Routing in React involves managing different views or pages within a
          single-page application. It allows you to map different URLs to
          specific components, enabling navigation between those components
          based on the URL. React Router is a popular library for handling
          routing in React applications. Here's how you can set up routing in
          React using React Router:
        </p>
        <ol>
          <li>Install React Router</li>
          <Rsyntax />
          <li className="mt-3">Setup Router</li>
          <Rsetup />
          <li className="mt-3">Use Link tag for Navigation</li>
          <Linktag />
        </ol>
        <p className="mt-3"></p>
        <p className="mt-3"></p>
      </div>
      <Footer />
    </>
  );
}
