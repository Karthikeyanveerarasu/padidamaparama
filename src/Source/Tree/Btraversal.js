import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Btraversal = () => {
  const javaCode = `
  import java.util.*;
  public class MyClass {
      public static void main(String args[]) {
          Scanner sc=new Scanner(System.in);
        BinaryTree tree=new BinaryTree();
        tree.insert(sc); ///////////////insertion
        tree.preOrderTraversal();
      }
  }
   class BinaryTree{
      Node root;
      public void insert(Scanner sc){
          System.out.println("Enter the root Node:");
          int val=sc.nextInt();
          root= new Node(val);
          insert(sc,root);
      }
      private void insert(Scanner scanner,Node node){
           System.out.println("do you want to enter left of "+ node.value);
                  boolean left=scanner.nextBoolean();
                  if(left){
                                      System.out.println("enter the value to enter left of "+ node.value);
                                      int val=scanner.nextInt();
                                      node.left=new Node(val);
                                      insert(scanner,node.left);
  
                  }
                   System.out.println("do you want to enter right of "+ node.value);
                  boolean right=scanner.nextBoolean();
                  if(right){
                                      System.out.println("enter the value to enter right of "+ node.value);
                                      int val=scanner.nextInt();
                                      node.right=new Node(val);
                                      insert(scanner,node.right);
  
                  }
  
      }
  public void preOrderTraversal() {
          System.out.println("Preorder Traversal:");
          preOrderTraversal(root);
      }
  
      private void preOrderTraversal(Node node) {
          if (node == null) {
              return;
          }
  
          System.out.print(node.value + " ");
          preOrderTraversal(node.left);
          preOrderTraversal(node.right);
      }
  
      public void inOrderTraversal() {
          System.out.println("Inorder Traversal:");
          inOrderTraversal(root);
      }
  
      private void inOrderTraversal(Node node) {
          if (node == null) {
              return;
          }
  
          inOrderTraversal(node.left);
          System.out.print(node.value + " ");
          inOrderTraversal(node.right);
      }
  
      public void postOrderTraversal() {
          System.out.println("Postorder Traversal:");
          postOrderTraversal(root);
      }
  
      private void postOrderTraversal(Node node) {
          if (node == null) {
              return;
          }
  
          postOrderTraversal(node.left);
          postOrderTraversal(node.right);
          System.out.print(node.value + " ");
      }
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

export default Btraversal;
