import Footer from "../Footer";
import Navbar from "../Navbar";
import { FaReact, FaRoute, FaWpforms, FaRecycle } from "react-icons/fa";
import { TbComponents, TbJumpRope, TbStatusChange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
export default function React() {
  const Navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaReact className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Introduction and Installation</h6>{" "}
                    <span>10 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/reactintro")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <TbComponents className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Components</h6>{" "}
                    <span>12 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/reactcomponents")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <TbJumpRope className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Props</h6> <span>13 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/reactprops")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaRoute className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Routing</h6> <span>10 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/routing")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <TbStatusChange className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">React Hooks</h6>{" "}
                    <span>16 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/hooks")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaWpforms className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">React Forms</h6>{" "}
                    <span>10 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/reactforms")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaRecycle className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Life Cycle</h6> <span>2 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => Navigate("/lifecycle")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
