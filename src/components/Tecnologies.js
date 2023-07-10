import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaReact, FaBootstrap, FaJava, FaNodeJs } from "react-icons/fa";
import "./Tech.css";
import Footer from "./Footer";
export default function Technologies() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-3">
        <div className="row gy-3 my-3">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card p-3 mb-2 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaReact className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">React For Beginners</h6>{" "}
                    <span>1 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Design</span>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/reactcourse")}
                  >
                    <AiFillUnlock /> Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card h-100 p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaJava className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Data Structures</h6>{" "}
                    <span>4 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Core</span>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/dsconcepts")}
                  >
                    <AiFillUnlock /> Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card h-100 p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaNodeJs className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Express js</h6> <span>2 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Backend</span>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button className="btn btn-dark" disabled>
                    {" "}
                    <AiFillLock /> Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card h-100 p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <FaBootstrap className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Bootstrap</h6> <span>2 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>design</span>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button className="btn btn-dark" disabled>
                    {" "}
                    <AiFillLock /> Learn now
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
