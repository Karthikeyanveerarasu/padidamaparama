import Cdelete from "../../Source/Circular/Cdelete";
import Cinsert from "../../Source/Circular/Cinsert";
import Cstrct from "../../Source/Circular/Cstrct";
import Footer from "../Footer";
import Navbar from "../Navbar";

const image =
  "https://images.contentful.com/piwi0eufbb2g/57qFZgbf95JNHwM1hMxGN5/9b2cf92826ca683501febe56d2839836/image.png";
export default function Circularist() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Circular Linked List</h2>
        </div>
        <p class="mt-3">
          A circular linked list is a data structure where the last node of the
          list points back to the first node, forming a loop or circle. It does
          not have a null or empty node at the end, unlike a regular linked
          list. This allows for efficient traversal from any point in the list
          to any other point, as there is no need to iterate from the beginning.
        </p>
        <div className="text-center">
          <img src={image} class="img-fluid" alt="Responsive image" />
          <h2 class="text-uppercase mt-4">Code</h2>
        </div>
        <strong>
          {" "}
          <span className="title fs-bold">
            {" "}
            <b>This is the basic Structure of Circular Linked list :</b>{" "}
          </span>
        </strong>
        <Cstrct />
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Insertion</h2>
        </div>
        <Cinsert />
        <strong>Explanation :</strong>
        <p>
          1. Insert First :
          <br />
          The insertFirst method begins by creating a new node with the given
          value. If the circular linked list is currently empty (i.e., head is
          null), the new node becomes both the head and tail of the list. Its
          next reference is set to itself, ensuring circularity.
          <br /> <br />
          However, if the list is not empty, the next reference of the new node
          is set to the current head. The next reference of the tail node is
          updated to point to the new node, and finally, the head reference is
          updated to the new node. This way, the new node becomes the new head,
          and the circularity is maintained.
        </p>
        <img
          src="https://share.sketchpad.app/23/c89-ae6b-9ab368.png"
          class="img-fluid"
          alt="Responsive image"
        />

        <p>
          2. Insert Last :
          <br />
          The `insertLast` method begins by creating a new node with the given
          value. If the circular linked list is empty, the new node becomes both
          the head and tail of the list. Its `next` reference is set to itself
          to establish circularity.
          <br /> <br />
          If the list is not empty, the `next` reference of the new node is set
          to the current head. The `next` reference of the current tail node is
          updated to point to the new node, creating a link between the last and
          new node. Finally, the `tail` reference is updated to point to the new
          node, making it the new last node.
          <br /> <br />
          After the necessary adjustments, the size of the circular linked list
          is incremented to reflect the addition of the new node. This ensures
          that the circular linked list is updated correctly with the new node
          inserted at the end.
          <br />
          <img
            src="https://share.sketchpad.app/23/6ec-dc7f-a6b459.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </p>
        <p>
          3.Insert at index:
          <br />
          The modified code block first checks if the index is valid (i.e.,
          greater than or equal to 0 and less than or equal to the size of the
          list). If the index is invalid, it simply returns without performing
          any insertion.
          <br /> <br />
          If the index is 0, it delegates the insertion to the `insertFirst`
          method and then returns. This handles the case of inserting at the
          beginning of the circular linked list.
          <br /> <br />
          If the index is equal to the size of the list, it delegates the
          insertion to the `insertLast` method and then returns. This handles
          the case of inserting at the end of the circular linked list.
          <br /> <br />
          For all other valid index values, it creates a new node with the given
          value and initializes a current node pointer to the head of the list.
          It iterates through the list, moving the current pointer to the node
          just before the desired index. Then, it adjusts the next references to
          insert the new node at the specified position in the circular linked
          list.
          <br /> <br />
          Finally, the size of the circular linked list is incremented to
          reflect the addition of the new node. This updated implementation
          handles the cases of inserting at different positions in the circular
          linked list based on the provided index value.
          <img
            src="https://share.sketchpad.app/23/3f1-8d92-5f9308.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </p>
      </div>
      <div class="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Deletion</h2>
        </div>
        <Cdelete />
        <strong>Explanation :</strong>
        <p>
          1. delete First :
          <br />
          <img
            src="https://share.sketchpad.app/23/2ba-b16a-4c6dd3.png"
            class="img-fluid"
            alt="Responsive image"
          />
        </p>
        2. delete last :
        <br />
        <img
          src="https://share.sketchpad.app/23/e07-4ec5-2029d4.png"
          class="img-fluid"
          alt="Responsive image"
        />
        2. delete at index :
        <br />
        <img
          src="https://share.sketchpad.app/23/483-60e3-b6bcef.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <div class="wrapper mt-3">
          <div class="text-center">
            <a href="https://www.jdoodle.com/iembed/v0/JmB" target="_blank">
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
