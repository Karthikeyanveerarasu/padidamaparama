import Btraversal from "../../Source/Tree/Btraversal";
import BtreeStrct from "../../Source/Tree/BtreeStrct";
import Binsert from "../../Source/Tree/Binsert";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function BinartTree() {
  const Binsertimage = "https://share.sketchpad.app/23/741-ad47-2e58c0.png";
  const final = "https://onlinegdb.com/IQVZm27Ow";
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Binary Tree</h2>
        </div>
        <p class="mt-3">
          A binary tree is a hierarchical data structure composed of nodes,
          where each node can have at most two children. It starts with a root
          node and branches out to left and right child nodes. The left child
          node is typically smaller (in a binary search tree) or represents the
          left subtree, while the right child node is larger or represents the
          right subtree. This structure allows for efficient searching,
          insertion, and deletion operations on the tree.
        </p>
        <h3 class="lead">TYPES :</h3>
        <p class="mt-2">
          There are several types of binary trees, each with its own unique
          characteristics. Here are some common types of binary trees:
        </p>
        <ol>
          <li class="my-2">
            {" "}
            <b class="text-uppercase">Full Binary Tree </b>: A full binary tree
            is a tree in which every node has either zero or two children. In
            other words, each node has exactly zero or two child nodes.
          </li>
          <li class="my-2">
            <b class="text-uppercase">Complete Binary Tree : </b>A complete
            binary tree is a binary tree in which all levels are completely
            filled except possibly the last level, which is filled from left to
            right. It means that all nodes are as left as possible in each
            level.
          </li>
          <li class="my-2">
            <b class="text-uppercase">Perfect Binary Tree:</b> A perfect binary
            tree is a full binary tree in which all levels are completely filled
            with the maximum number of nodes possible.
          </li>
          <li class="my-2">
            <b class="text-uppercase">Balanced Binary Tree:</b> A balanced
            binary tree is a binary tree in which the height difference between
            the left and right subtrees of any node is at most 1. It ensures
            that the tree is balanced and helps to maintain efficient search and
            insert operations.
          </li>
          <li class="my-2">
            {" "}
            <b class="text-uppercase">A binary search tree : </b> (BST) is a
            binary tree in which the nodes are ordered or sorted. For any node,
            all the nodes in its left subtree have values less than the node's
            value, and all the nodes in its right subtree have values greater
            than the node's value. BSTs allow efficient searching, insertion,
            and deletion operations.
          </li>
        </ol>
        <div className="text-center container">
          <h2 class="text-uppercase mt-4">Code</h2>
        </div>
        <strong>
          {" "}
          <span className="title fs-bold">
            {" "}
            <b>This is the basic Structure of Binary Tree :</b>{" "}
          </span>
          <BtreeStrct />
        </strong>
        <div class="text-center">
          {" "}
          <div class="alert alert-danger  text-center" role="alert">
            recursion plays a major role in tree so, recursion knowledege is
            must !
          </div>
        </div>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Insertion</h2>
        </div>
        <Binsert />
        <img src={Binsertimage} class="img-fluid" alt="Responsive image" />
        Explanation :
        <p className="mt-3">
          initially the insert create a root and calls the two argument function
          then the recursion comes to play ask the user for left or right entry
          of the particular node first left node is filled then right Node.
        </p>
        <div class="title text-center mt-5">
          <h2 class="text-uppercase">Traversal</h2>
        </div>
        <div class="mt-3">
          In binary tree traversal, there are three main techniques: inorder,
          preorder, and postorder. These techniques define the order in which
          the nodes of the tree are visited. Here's a brief explanation of each
          traversal technique:
          <br />
          <br />
          <b>Inorder Traversal</b> : In an inorder traversal, the left subtree
          is visited first, then the current node is visited, and finally, the
          right subtree is visited. In a binary search tree (BST), the inorder
          traversal visits the nodes in ascending order. This traversal is
          commonly used to retrieve data from a BST in sorted order.
          <br />
          <br />
          <b>Preorder Traversal </b>: In a preorder traversal, the current node
          is visited first, then the left subtree is visited, and finally, the
          right subtree is visited. Preorder traversal is useful for creating a
          copy of the tree or when the tree structure needs to be preserved
          while traversing.
          <br />
          <br />
          <b>Postorder Traversal</b>: In a postorder traversal, the left subtree
          is visited first, then the right subtree is visited, and finally, the
          current node is visited. Postorder traversal is commonly used in
          deleting nodes from a tree or performing certain calculations.
          <br />
          <br />
        </div>
        Example :
        <br />
        <div class="text-center">
          <img
            src="https://share.sketchpad.app/23/84d-1d2e-977104.png"
            class="img-fluid example"
            alt="Responsive image"
          />
        </div>
        <p class="mt-5">
          Inorder Traversal: Inorder traversal visits the left subtree, then the
          current node, and finally the right subtree. Applying inorder
          traversal to the above tree would give the following sequence: 4, 2,
          5, 1, 6, 3, 7.
          <br />
          <br />
          Preorder Traversal: Preorder traversal visits the current node first,
          then the left subtree, and finally the right subtree. The preorder
          traversal of the tree would be: 1, 2, 4, 5, 3, 6, 7.
          <br />
          <br />
          Postorder Traversal: Postorder traversal visits the left subtree
          first, then the right subtree, and finally the current node. The
          postorder traversal of the tree would be: 4, 5, 2, 6, 7, 3, 1.
        </p>
        <Btraversal />
        <div className="text-center mt-4">
          <a href={final} target="_blank">
            <button class="binary_tree">Code here</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
