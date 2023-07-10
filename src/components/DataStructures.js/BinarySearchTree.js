import Bstree from "../../Source/Tree/Bstree";
import Footer from "../Footer";
import Navbar from "../Navbar";
const final = "https://www.jdoodle.com/iembed/v0/JNd";
export default function BinarySearchTree() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Binary Search Tree</h2>
        </div>
        <p className="mt-5">
          A binary search tree (BST) is a type of binary tree that satisfies the
          following properties:
          <br /> <br />
          1. Every node in the BST has a value.
          <br /> <br />
          2. The values in the left subtree of a node are less than the value of
          that node.
          <br /> <br />
          3. The values in the right subtree of a node are greater than the
          value of that node.
          <br /> <br />
          4. Both the left and right subtrees of a node are themselves binary
          search trees.
          <br /> <br />
          In simple terms, a BST is a tree data structure in which the values
          are organized in a specific order. The order allows for efficient
          searching, insertion, and deletion of nodes. It provides an efficient
          way to perform operations like finding the minimum or maximum value,
          searching for a specific value, or iterating over the values in a
          sorted order.
          <br /> <br />
          The binary search tree's structure is based on the concept of divide
          and conquer, where each node acts as a root for its own subtree. By
          comparing the value being searched for with the values in each node,
          the search process can efficiently narrow down the search space by
          recursively traversing the left or right subtree based on the
          comparison result.
          <br /> <br />
          The BST's order property also enables operations like inserting new
          nodes, deleting existing nodes, and performing various traversals
          (in-order, pre-order, post-order) to visit and process nodes in a
          specific order.
          <br /> <br />
          Overall, a binary search tree is a powerful data structure that
          provides efficient searching, insertion, deletion, and traversal
          operations, making it a valuable tool in many algorithms and
          applications.
        </p>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Code</h2>
          <Bstree />
          <p className="mt-4">
            <br /> <br />
            1. `public void search(int value)`: This function is used to search
            for a specific value in the binary search tree (BST). It calls the
            `searchNode` function and passes the root node and the value to
            search for. If the node is found, it prints a message indicating
            that the node is found with the given value. If the node is not
            found, it prints a message indicating that no element is found.
            <br /> <br />
            2. `public void insert(int value)`: This function is used to insert
            a new node with the given value into the BST. It calls the
            `insertnode` function and passes the root node and the value to
            insert. The `insertnode` function recursively finds the appropriate
            position for the new node based on its value, ensuring that the BST
            property is maintained.
            <br /> <br />
            3. `public void displayInOrder()`: This function displays the nodes
            of the BST in ascending order. It calls the private `displayInOrder`
            function and passes the root node. The `displayInOrder` function
            recursively traverses the BST in an in-order manner (left subtree,
            current node, right subtree) and prints the value of each node.
            <br /> <br />
            4. `public void preorder()`: This function performs a preorder
            traversal of the BST and prints the value of each node. It calls the
            private `preorder` function and passes the root node. The `preorder`
            function recursively traverses the BST in a preorder manner (current
            node, left subtree, right subtree) and prints the value of each
            node.
            <br /> <br />
            5. `public void postorder()`: This function performs a postorder
            traversal of the BST and prints the value of each node. It calls the
            private `postorder` function and passes the root node. The
            `postorder` function recursively traverses the BST in a postorder
            manner (left subtree, right subtree, current node) and prints the
            value of each node.
            <br /> <br />
            6. `public void deleteNode(int value)`: This function is used to
            delete a node with the given value from the BST. It calls the
            private `delete` function and passes the root node and the value to
            delete. The `delete` function handles different cases based on the
            number of children the node has. It recursively finds the node to
            delete, maintains the BST property, and adjusts the tree
            accordingly.
            <br /> <br />
            7. `private Node findSuccessor(Node node)`: This function finds the
            successor node of a given node in the BST. The successor is the node
            with the smallest value in the right subtree of the given node. It
            takes a node as input and iteratively traverses the left subtree
            until it reaches the leftmost node, which is the successor node.
            <br /> <br />
            In addition to these functions, the code also includes a class
            `Node` that represents a node in the BST. Each node contains a
            value, a reference to the right child node, and a reference to the
            left child node. The `Bst` class represents the binary search tree
            and includes the necessary functions to manipulate and traverse the
            tree.
          </p>
          <div className="text-center mt-4">
            <a href={final} target="_blank">
              <button class="binary_tree">Code here</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
