import InsertfirstSlist from "../../Source/InsertfirstSlist";
import Slistcode from "../../Source/Slistcode";
import InsertlastSlist from "../../Source/InsertlastSlist";
import InsertatindexSlist from "../../Source/InsertatindexSlist";
import DeleteSlist from "../../Source/DeleteSlist";
import DeleteindexSlist from "../../Source/DeleteindexSlist";
import Footer from "../Footer";
import "../Tech.css";
import Navbar from "../Navbar";
export default function Singlelist() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Singly Linked List</h2>
        </div>
        <div style={{ textAlign: "justify" }}>
          <p>
            A singly linked list is a linear data structure where each element
            in the list is represented by a node. Each node contains two parts:
            <u>
              {" "}
              <b> data and a reference </b>{" "}
            </u>{" "}
            &nbsp;(or link) to the next node in the sequence. The first node in
            the list is called the head, and the last node typically has a
            reference to null.
          </p>
          <br />
          <p>
            In a singly linked list, you can only traverse the list in{" "}
            <b> one direction</b>, starting from the head and following the next
            references until you reach the end of the list (where the next
            reference is null). This means that you can only move forward in the
            list and cannot traverse it in reverse or randomly access elements
            like you would in an array.
          </p>
          <p class="title">
            Here's an example to illustrate a singly linked list :
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div style={{ textAlign: "justify" }}>
          <p class="mt-4">
            The head has reference of the next node and so on, but the next node
            doesn't know any thing about the preious node so, it can be
            traversed only in one direction{" "}
          </p>
        </div>
        <div class="text-center mt-5">
          <h3 class="text-uppercase">Code</h3>
        </div>
        <div>
          <p>This is the basic Structure of Singly Linked list</p>
          <Slistcode />
        </div>
        <div class="mt-2" style={{ textAlign: "justify" }}>
          <h4>Explanation : </h4>
          <p>
            The MyClass class is the entry point of the program, containing the
            main method. It creates an instance of the li class and initializes
            it.
          </p>
          <p>
            The li class represents the linked list. It has three properties:
            <br />
            head : A reference to the first node in the list.
            <br />
            tail : A reference to the last node in the list.
            <br />
            size : The number of nodes in the list.
            <br />
            The constructor li() initializes the size to 0.
          </p>
          <p>
            The li class also has an inner class called Node, which represents a
            single node in the linked list. Each node has two properties:
            <br />
            value : The value stored in the node.
            <br />
            next : A reference to the next node in the list.
            <br />
            <br />
            The Node class has two constructors. The first constructor Node(int
            value) initializes a node with the given value and sets the next
            reference to null. The second constructor Node(int value, Node next)
            initializes a node with the given value and sets the next reference
            to the specified node.
          </p>
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Insert at first element</h2>
        </div>
        <div>
          <InsertfirstSlist />
        </div>
        <div class="mt-2" style={{ textAlign: "justify" }}>
          <h4>Explanation : </h4>
          <strong>insert first method : </strong>
          <ul class="mt-2">
            <li>
              First, a new Node object is created using the provided value:{" "}
              <b>Node node = new Node(val) </b>.
            </li>
            <li>
              The <b>next</b> reference of the newly created node is set to the
              current head of the linked list: <b>node.next = head</b>.
            </li>
            <li>
              The <b>head</b> reference is updated to point to the newly created
              node:<b> head = node</b>.
            </li>
            <li>
              If the tail is null, indicating an empty list, it is also updated
              to point to the newly created node:{" "}
              <b>if (tail == null) tail = node.</b>
            </li>
            <li>
              Finally, the size is incremented by 1 to reflect the addition of
              the new node:<b> size += 1.</b>
            </li>
          </ul>
          <strong>display method : </strong>
          <ul class="mt-2">
            <li>
              It starts by creating a temporary variable temp and assigning the
              head reference to it: Node temp = head.
            </li>
            <li>
              Then, it iterates through the list by checking if temp is not
              null.
            </li>
            <li>
              For each node in the list, it prints the value of the current
              node: System.out.print(temp.value + " => ").
            </li>
            <li>
              After printing the value, it updates the temp variable to the next
              node by setting temp = temp.next.
            </li>
          </ul>
        </div>
        <div>
          <div class="title text-center mt-5">
            <h2 class="text-uppercase">Insert at Last element</h2>
          </div>
          <InsertlastSlist />
          <strong>insert last method :</strong>
          <ul>
            <li>
              It first checks if the tail reference is null, which indicates an
              empty list. If the list is empty, it means there are no nodes in
              the list yet. In that case, it calls the insertfirst method to
              handle the insertion of the first node, passing the provided value
              as an argument. After inserting the first node, it returns from
              the insertlast method.
            </li>
            <li>
              If the list is not empty, it creates a new Node object using the
              provided value: Node node = new Node(val).
            </li>
            <li>
              The next reference of the current tail node, which previously
              pointed to null, is updated to point to the newly created node:
              tail.next = node.
            </li>
            <li>
              The tail reference is then updated to point to the newly created
              node, as it is now the last node in the list: tail = node.
            </li>
          </ul>
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Insert at index value</h2>
        </div>
        <InsertatindexSlist />
        <strong>insert method :</strong>
        <div style={{ textAlign: "justify" }}>
          <p>
            Iterate to previous index element and assign the next node to new
            node.
          </p>
          <div class="alert alert-danger" role="alert">
            you need to check for null pointer exception if you go for advanced
            code.
          </div>
        </div>
        <div>
          <div class="title text-center mt-5">
            <h2 class="text-uppercase">Delete at First and last</h2>
          </div>
          <DeleteSlist />
          <strong>Explanation</strong>
          <div style={{ textAlign: "justify" }}>
            <p>
              1. In deletefirst assign the head to next node of head .
              <br />
              2.in deletelast check the size if only one element or no element
              else we need to find the second last element and assign it to the
              tail that's solve.
            </p>
          </div>
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Delete at index value</h2>
        </div>
        <DeleteindexSlist />
        <strong>Explanation</strong>
        <div style={{ textAlign: "justify" }}>
          <p>
            check the index value first if 0 or last element if not then find
            the previous node by <b>get(index-1)</b> then assign the next value
            of previous node to the next of next node hence next.next is used to
            leave the indexed node.
          </p>
        </div>
        <div class="wrapper">
          <div class="text-center">
            <a href="https://www.jdoodle.com/iembed/v0/JkM" target="_blank">
              <button class="slist_btn">
                <svg
                  height="36px"
                  width="36px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#fdd835"
                    y="0"
                    x="0"
                    height="36"
                    width="36"
                  ></rect>
                  <path
                    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
                    fill="#e53935"
                  ></path>
                  <path
                    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
                    fill="#b71c1c"
                  ></path>
                  <path
                    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
                    fill="#01579b"
                  ></path>
                  <path
                    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
                    fill="#81d4fa"
                  ></path>
                  <path
                    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
                    fill="#212121"
                  ></path>
                  <path
                    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
                    fill="#e1f5fe"
                  ></path>
                </svg>
                <span class="now">now!</span>
                <span class="play">Code</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
