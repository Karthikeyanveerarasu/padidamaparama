import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Cdelete = () => {
  const javaCode = `
  public void deleteFirst(){
    if (head == null) {
          return;
      }
      head=head.next;
      tail.next=head;
      size--;
}
public void deleteLast() {
  if (head == null) {
      return;
  }
  
  if (head == tail) {
      // There is only one node in the list
      head = null;
      tail = null;
      size = 0;
      return;
  }
  
  Node current = head;
  while (current.next != tail) {
      current = current.next;
  }
  
  current.next = head;
  tail = current;
  size--;
}
public void delete(int index){
     if (index < 0 || index >= size) {
          return;
      }

      if (index == 0) {
          deleteFirst();
          return;
      }

      if (index == size - 1) {
          deleteLast();
          return;
      }
      
      Node current = head;
      Node previous = null;
      int count = 0;

      while (current.next != head && count < index) {
          previous = current;
          current = current.next;
          count++;
      }
      previous.next = current.next;
}
  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default Cdelete;
