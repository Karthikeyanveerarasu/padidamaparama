import Selectioncode from "../../Source/sort/Selectioncode";
import Footer from "../Footer";
import Navbar from "../Navbar";

const image =
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Selection-Sort-Soni/what-is-selection-sort.png";
export default function Selection() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Selection sort</h2>
        </div>
        <br />
        <p>
          Selection sort is a simple comparison-based sorting algorithm. It
          works by dividing the input array into two parts: the sorted part and
          the unsorted part. The algorithm repeatedly selects the smallest (or
          largest) element from the unsorted part and swaps it with the first
          element of the unsorted part, gradually expanding the sorted part.
          <br /> <br />
          Here's how the selection sort algorithm works:
          <br /> <br />
          1. Start with an unsorted array of elements.
          <br /> <br />
          2. Find the minimum (or maximum) element in the unsorted part of the
          array.
          <br /> <br />
          3. Swap the minimum (or maximum) element with the first element of the
          unsorted part.
          <br /> <br />
          4. Expand the sorted part by considering the next element in the
          unsorted part.
          <br /> <br />
          5. Repeat steps 2 to 4 until the entire array is sorted.
          <br /> <br /> <br /> <br />
          The selection sort algorithm consists of two nested loops. The outer
          loop controls the iteration over the unsorted part of the array, while
          the inner loop finds the minimum (or maximum) element in the remaining
          unsorted part.
          <br /> <br />
          Selection sort has a time complexity of O(n^2), where n is the number
          of elements in the array. It is not the most efficient sorting
          algorithm, especially for large input sizes, but it is simple to
          implement and works well for small arrays or partially sorted arrays.
          <br /> <br />I hope this explanation clarifies what selection sort is
          and how it works. Let me know if you have any further questions!
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
          <Selectioncode />
        </div>
      </div>
      <Footer />
    </>
  );
}
