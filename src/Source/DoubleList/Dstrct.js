import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Dstrct = () => {
  const javaCode = `
  public class MyClass {
    public static void main(String args[]) {
     Dl list=new Dl();
    }
}

class Dl {
    Node head;
    Node tail;
  
    class Node {
        int val;
        Node next;
        Node prev;
      
        public Node(int val) {
            this.val = val;
        }
        
        public Node(int val, Node next, Node prev) {
            this.val = val;
            this.next = next;
            this.prev = prev;
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

export default Dstrct;
