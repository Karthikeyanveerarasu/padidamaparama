import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";
const Slistcode = () => {
  const javaCode = `
    public class MyClass {
      public static void main(String args[]) {
        li list = new li();
        // basic structure //
      }
    }

    class li {
      Node head;
      Node tail;
      int size;

      public li() {
        this.size = 0;
      }

      public class Node {
        int value;
        Node next;

        public Node(int value) {
          this.value = value;
        }

        public Node(int value, Node next) {
          this.value = value;
          this.next = next;
        }
      }
    }
  `;

  return (
    <SyntaxHighlighter language="java" style={tomorrowNight}>
      {javaCode}
    </SyntaxHighlighter>
  );
};
export default Slistcode;
