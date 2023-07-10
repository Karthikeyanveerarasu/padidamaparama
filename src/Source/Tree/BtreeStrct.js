import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const BtreeStrct = () => {
  const javaCode = `
 public class MyClass {
    public static void main(String args[]) {
      BinaryTree tree=new BinaryTree();
    }
}
 class BinaryTree{
    Node root;
    public class Node{
        int value;
        Node left;
        Node right;
        public Node(int value){
            this.value=value;
        }
    }
}
  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default BtreeStrct;
