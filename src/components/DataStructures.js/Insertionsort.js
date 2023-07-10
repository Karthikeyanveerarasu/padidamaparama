import Insertionsortcode from "../../Source/sort/Insertionsortcode";
import Footer from "../Footer";
import Navbar from "../Navbar";

const image =
  "https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png";
export default function Insertion() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Insertion sort</h2>
        </div>
        <br />
        <p>
          Insertion sort is a simple sorting algorithm that works similar to the
          way you sort playing cards in your hands. The array is virtually split
          into a sorted and an unsorted part. Values from the unsorted part are
          picked and placed at the correct position in the sorted part.
        </p>
        <div class=" text-center mt-4">
          {" "}
          <img
            src={image}
            width="300"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">code</h2>
          <Insertionsortcode />
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Working</h2>
          <p className="mt-3">
            Certainly! Let's go through an example step by step using the array
            5, 2, 8, 12, 3:
            <br /> <br />
            1. Initially, the array is: 5, 2, 8, 12, 3.
            <br /> <br />
            2. We start iterating from the second element (index 1) of the
            array.
            <br /> <br />
            3. The current element is `2`, and we set `j` to the previous index,
            which is 0.
            <br /> <br />
            4. Since the element at index 0 is greater than the `key` (2), we
            enter the while loop.
            <br /> <br />
            5. Inside the while loop, we shift the element at index 0 to the
            right, resulting in 5, 5, 8, 12, 3.
            <br /> <br />
            6. We decrement `j` to -1 and exit the while loop.
            <br /> <br />
            7. We assign the `key` (2) to the element at index `j + 1`, which is
            0. The array becomes 2, 5, 8, 12, 3.
            <br /> <br />
            8. Now, we move to the next iteration.
            <br /> <br />
            9. The current element is `8`, and we set `j` to the previous index,
            which is 1.
            <br /> <br />
            10. Since the element at index 1 (5) is not greater than the `key`
            (8), we exit the while loop.
            <br /> <br />
            11. We assign the `key` (8) to the element at index `j + 1`, which
            is 1. The array remains unchanged: 2, 5, 8, 12, 3.
            <br /> <br />
            12. Next iteration.
            <br /> <br />
            13. The current element is `12`, and we set `j` to the previous
            index, which is 2.
            <br /> <br />
            14. Since the element at index 2 (8) is not greater than the `key`
            (12), we exit the while loop.
            <br /> <br />
            15. We assign the `key` (12) to the element at index `j + 1`, which
            is 2. The array remains unchanged: 2, 5, 8, 12, 3.
            <br /> <br />
            16. Next iteration.
            <br /> <br />
            17. The current element is `3`, and we set `j` to the previous
            index, which is 3.
            <br /> <br />
            18. Since the element at index 3 (12) is greater than the `key` (3),
            we enter the while loop.
            <br /> <br />
            19. Inside the while loop, we shift the element at index 3 to the
            right, resulting in 2, 5, 8, 12, 12.
            <br /> <br />
            20. We decrement `j` to 2 and continue the while loop.
            <br /> <br />
            21. Inside the while loop, we shift the element at index 2 to the
            right, resulting in 2, 5, 8, 8, 12.
            <br /> <br />
            22. We decrement `j` to 1 and continue the while loop.
            <br /> <br />
            23. Inside the while loop, we shift the element at index 1 to the
            right, resulting in 2, 5, 5, 8, 12.
            <br /> <br />
            24. We decrement `j` to 0 and continue the while loop.
            <br /> <br />
            25. Since the element at index 0 (2) is not greater than the `key`
            (3), we exit the while loop.
            <br /> <br />
            26. We assign the `key` (3) to the element at index `j + 1`, which
            is 0. The array becomes 2, 3, 5, 8, 12.
            <br /> <br />
            27. The iteration is complete, and the array is sorted.
            <br /> <br />
            The sorted array is 2, 3, 5, 8, 12.
            <br /> <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
