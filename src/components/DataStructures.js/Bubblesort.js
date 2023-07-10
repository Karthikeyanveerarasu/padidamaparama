import Bubblecode from "../../Source/sort/Bubblecode";
import Selectioncode from "../../Source/sort/Selectioncode";
import Footer from "../Footer";
import Navbar from "../Navbar";

const image = "https://www.productplan.com/uploads/bubble-sort-1024x683-2.png";
export default function Bubble() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Bubble sort</h2>
        </div>
        <br />
        <p>
          Bubble sort is another simple comparison-based sorting algorithm. It
          repeatedly compares adjacent elements in the array and swaps them if
          they are in the wrong order, gradually moving the larger elements
          towards the end of the array. This process is similar to bubbles
          rising to the surface.
          <br />
          <br />
          Here's how the bubble sort algorithm works:
          <br />
          <br />
          1. Start with an unsorted array of elements.
          <br />
          <br />
          2. Compare adjacent elements in the array.
          <br />
          <br />
          3. If the elements are in the wrong order (e.g., the current element
          is greater than the next element for ascending order), swap them.
          <br />
          <br />
          4. Continue this process, iterating through the array and comparing
          adjacent elements, until no more swaps are needed.
          <br />
          <br />
          5. After each pass through the array, the largest element "bubbles" up
          to its correct position at the end.
          <br />
          <br />
          6. Repeat steps 2 to 5 until the entire array is sorted.
          <br />
          <br />
          Bubble sort can be implemented with two nested loops. The outer loop
          controls the number of passes through the array, and the inner loop
          performs the comparisons and swaps.
          <br />
          <br />
          Bubble sort has a time complexity of O(n^2), where n is the number of
          elements in the array. It is a simple algorithm to understand and
          implement, but it is not the most efficient for large input sizes.
          However, it can be useful in situations where the input array is
          already partially sorted or when simplicity is more important than
          performance.
        </p>
        <div class=" text-center mt-4">
          {" "}
          <img
            src={image}
            width="500"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">code</h2>
          <Bubblecode />
        </div>
      </div>
      <Footer />
    </>
  );
}
