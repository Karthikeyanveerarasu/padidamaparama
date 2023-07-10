import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Binsert = () => {
  const javaCode = `
  import java.util.*;
  public class MyClass {
      public static void main(String args[]) {
          Scanner sc=new Scanner(System.in);
        BinaryTree tree=new BinaryTree();
        tree.insert(sc); ///////////////insertion
        tree.display();///////////////display
      }
  }
   class BinaryTree{
      Node root;
      public void insert(Scanner sc){
          System.out.println("Enter the root Node:");
          int val=sc.nextInt();
          root= new Node(val);
          insert(root,sc);
      }
      private void insert(Node node,Scanner sc){
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
      public void display() {
      display(root, "");
  }
  //////////////////////display optional just for view purpose ///////////////////////
  
  private void display(Node node, String indent) {
      if (node == null) {
          return;
      }
  
      System.out.println(indent + "+-- " + node.value);
      
      if (node.left != null || node.right != null) {
          if (node.left != null) {
              prettyDisplay(node.left, indent + "|   ");
          } else {
              System.out.println(indent + "|");
          }
  
          if (node.right != null) {
              prettyDisplay(node.right, indent + "    ");
          } else {
              System.out.println(indent + "|");
          }
      }
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

  output : 
Enter the root Node:
15
do you want to enter left of 15
true
enter the value to enter left of 15
12
do you want to enter left of 12
false
do you want to enter right of 12
true
enter the value to enter right of 12
2
do you want to enter left of 2
false
do you want to enter right of 2
false
do you want to enter right of 15
false
+-- 15
|   +-- 12
|   |
|       +-- 2
|

  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default Binsert;
