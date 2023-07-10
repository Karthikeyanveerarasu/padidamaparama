import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Cstrct = () => {
  const javaCode = `
  public class MyClass {
    public static void main(String args[]) {
     Cll list=new Cll();
    }
}

class Cll {
    Node head;
    Node tail;
  
    class Node {
        int val;
        Node next;
      
        public Node(int val) {
            this.val = val;
        }
        
        public Node(int val, Node next) {
            this.val = val;
            this.next = next;
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

export default Cstrct;
