import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Bstree = () => {
  const javaCode = `
  import java.util.*;
  public class MyClass {
      public static void main(String args[]) {
          Bst bst=new Bst();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(55);
      bst.insert(6);
      // Display the nodes in ascending order
      bst.displayInOrder(); //inorder
      System.out.println("preorder :");
       bst.preorder();
       System.out.println("Postorder : ");
      bst.search(10);
       bst.preorder();
      }
  }
  class Bst{
      Node root;
      public Bst(){
          
      }
  ///searching
  public void search(int value){
      root=searchNode(root,value);
      
  }
  public Node searchNode(Node node,int value){
      if(node==null){
          System.out.println("no element found");
          return null;
      }
      if(node.value > value){
          searchNode(node.left,value);
      }
      else if(node.value<value){
          searchNode(node.right,value);
      }
      else{
          System.out.println("Node is found with element "+ value);
          return null;
      }
      return node;
  }
      public void insert(int value){
          root=insertnode(root,value);
      }
      public Node insertnode(Node node,int value){
          if(node==null){
              return new Node(value);
          }
         if (value < node.value) {
          node.left = insertnode(node.left, value);
      } else if (value > node.value) {
          node.right = insertnode(node.right, value);
      }
  return node;
      }
      public void displayInOrder() {
      displayInOrder(root);
  }
  
  private void displayInOrder(Node node) {
      if (node != null) {
          displayInOrder(node.left);   // Display nodes in the left subtree
          System.out.println(node.value);   // Display the current node's value
          displayInOrder(node.right);  // Display nodes in the right subtree
      }
  }
  public void preorder(){
      preorder(root);
  }
  private void preorder(Node node){
      if(node!=null){
          System.out.println(node.value); //// node value
          preorder(node.left);
          preorder(node.right);
      }
  }
  public void postorder(){
      postorder(root);
  }
  private void postorder(Node node){
      if(node!=null){
          postorder(node.left);
          postorder(node.right);
          System.out.println(node.value);
      }
  }
    public void deleteNode(int value) {
      root = delete(root, value);
      System.out.println("Node with value " + value + " deleted from the binary tree.");
    }
  private Node delete(Node current, int value) {
    if (current == null) {
      return null; // Node not found, return null
    }
  
    if (value < current.value) {
      current.left = delete(current.left, value); // Recursively search in the left subtree
    } else if (value > current.value) {
      current.right = delete(current.right, value); // Recursively search in the right subtree
    } else {
      // Node to be deleted found
  
      // Case 1: Node is a leaf node or has only one child
      if (current.left == null) {
        return current.right;
      } else if (current.right == null) {
        return current.left;
      }
  
      // Case 2: Node has two children
      // Find the successor (or predecessor)
      Node successor = findSuccessor(current.right); // Find the minimum value in the right subtree
      current.value = successor.value;
      current.right = delete(current.right, successor.value); // Recursively delete the successor node
    }
  
    return current;
  }
  
  private Node findSuccessor(Node node) {
    Node current = node;
    while (current.left != null) {
      current = current.left;
    }
    return current;
  }
      class Node{
           int value;
          Node right;
          Node left;
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

export default Bstree;
