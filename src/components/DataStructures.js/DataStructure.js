import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { TiArrowUnsorted } from "react-icons/ti";
import { AiOutlineMergeCells } from "react-icons/ai";
import { TbBinaryTree, TbChartBubble } from "react-icons/tb";
import { FcTreeStructure } from "react-icons/fc";
import { BsListNested, BsLink45Deg, BsInputCursorText } from "react-icons/bs";
import { FaCircleNotch, FaSortAmountDownAlt } from "react-icons/fa";
import "../Tech.css";
export default function DataStructures() {
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
                    <BsListNested className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Singly Linked List</h6>{" "}
                    <span>1 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/singlelist")}
                  >
                    Learn now
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
                    <BsLink45Deg className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Doubly Linked List</h6>{" "}
                    <span>4 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/doublelist")}
                  >
                    Learn now
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
                    <FaCircleNotch className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Circular Linked List</h6>{" "}
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/circularlist")}
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
                    <FcTreeStructure className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Binary Tree</h6>{" "}
                    <span>10 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/tree")}
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
                    <TbBinaryTree className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Binary Search Tree</h6>{" "}
                    <span>5 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/btree")}
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
                    <FaSortAmountDownAlt className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Insertion Sort</h6>{" "}
                    <span>3 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/insertionsort")}
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
                    <BsInputCursorText className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Selection Sort</h6>{" "}
                    <span>3 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/selectionsort")}
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
                    <TbChartBubble className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Bubble Sort</h6>{" "}
                    <span>6 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/bubblesort")}
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
                    <AiOutlineMergeCells className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Merge Sort</h6>{" "}
                    <span>12 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/merge")}
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
                    <TiArrowUnsorted className="fs-3 icon-rotate" />
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Quick Sort</h6>{" "}
                    <span>10 days ago</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/quicksort")}
                  >
                    Learn now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
