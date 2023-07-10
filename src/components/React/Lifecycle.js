import Lcode from "../../Source/Reactcode/Lifecycle/Lcode";
import Linktag from "../../Source/routing/Linktag";
import Rsetup from "../../Source/routing/RouterSetup";
import Rsyntax from "../../Source/routing/Routingsyntax";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Lifecycle() {
  return (
    <>
      <Navbar />
      <div className="mt-3 container">
        <h3>React Life Cycle</h3>
        <p className="mt-3">
          Each component in React has a lifecycle which you can monitor and
          manipulate during its three main phases.
          <br />
          <br />
          The three phases are:<b> Mounting, Updating, and Unmounting.</b>
        </p>
        <Lcode />
        <p className="mt-3">
          <div class="alert alert-danger" role="alert">
            All those are only possible in Class component. Function component
            achieve this by <b>Useeffect </b>Hook
          </div>
        </p>
        <p className="mt-3"></p>
      </div>
      <Footer />
    </>
  );
}
