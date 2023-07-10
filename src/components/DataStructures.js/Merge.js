import Navbar from "../Navbar";
import Footer from "../Footer";
import MergeCode from "../../Source/sort/MergeCode";
const final =
  "https://th.bing.com/th/id/OIP.bak49BrBFSMK5-92hEVSkQHaGC?w=205&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";
export default function Merge() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">merge sort</h2>
        </div>

        <p className="mt-4">
          Merge sort is a popular sorting algorithm that follows the
          divide-and-conquer approach. It divides the unsorted list into smaller
          sublists, sorts them individually, and then merges them back together
          to obtain a sorted list
        </p>
        <div class=" text-center mt-4">
          {" "}
          <img
            src={final}
            width="300"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Code</h2>
        </div>
        <div className="mt-2"></div>
        <MergeCode />
        <p className="mt-4">
          In the above code, the " mergeSort " method performs the merge sort
          algorithm. It divides the array into two halves, recursively applies
          merge sort to each half, and then merges the sorted halves using the
          merge method.
          <br />
          <br />
          The " merge " method takes the original array, along with the left and
          right subarrays, and merges them into a sorted array. It compares the
          elements from both subarrays and places them in the correct order into
          the original array.
          <br />
          <br />
          The main method demonstrates an example usage of the mergeSort method
          by sorting an array of integers.
        </p>
      </div>
      <Footer />
    </>
  );
}
