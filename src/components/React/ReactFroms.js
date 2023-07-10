import Rfroms from "../../Source/Reactcode/Forms/Rforms";
import Rimport from "../../Source/Reactcode/Forms/Rimport";
import Rstate from "../../Source/Reactcode/Forms/Rstate";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ReactFroms() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">React Froms</h3>
        <p className="mt-3"></p>
        <ol>
          <li className="mt-3">Import React and useState:</li>
          <Rimport />
          <li className="mt-3">
            Create a functional component called <b> SimpleForm</b>
          </li>
          <li className="mt-3">Define state variables for the form inputs:</li>
          <Rstate />
          <li className="mt-3">Render the form and its inputs:</li>
          <Rfroms />
        </ol>
      </div>
      <Footer />
    </>
  );
}
