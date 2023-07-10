import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ddelete = () => {
  const javaCode = `
  public class MyClass {
    public static void main(String args[]) {
     Dl list=new Dl();
     list.insertFirst(5);
       list.insertLast(1000);
       list.insert(0,2);
        list.display();
        
        list.deleteAtIndex(1);
        list.display();
    }
}
class Dl{
  Node head;
    Node tail;
    int size;
    public Dl(){
        this.size=0;
    }
    //insertfirst
    public void insertFirst(int val){
        Node node=new Node(val);
        node.next=head;
        node.prev=null;
        if(head!=null){
             head.prev=node;
        } 
        head=node;
        if (tail == null) {
            tail = head;
        }
        size+=1;
    }
    //insertlast
   public void insertLast(int val) {
    Node node = new Node(val);
    
    if (tail == null) {
        // The list is currently empty, so the new node becomes both head and tail
        head = node;
        tail = node;
    } else {
        // Append the new node after the current tail
        node.next = null;
        tail.next = node;
        node.prev = tail;
        tail = node;
    }
    size+=1;
}
///insert at index
public void insert(int val, int index) {
    if (index < 0 || index > size) {
        // Invalid index, do nothing
        return;
    }
    
    if (index == 0) {
        insertFirst(val);
        return;
    }
    
    if (index == size) {
        //System.out.println("last ocuurs");
        insertLast(val);
        return;
    }
    
    Node newNode = new Node(val);
    Node current = head;
    int currentIndex = 0;

    while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
    }

    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    
    size++;
}
    public void deleteFirst() {
        if (head == null) {
            return;
        }

        head = head.next;

        if (head == null) {
            tail = null;
        } else {
            head.prev = null;
        }

        size -= 1;
    }

    public void deleteLast() {
        if (tail == null) {
            return;
        }

        tail = tail.prev;

        if (tail == null) {
            head = null;
        } else {
            tail.next = null;
        }

        size -= 1;
    }

    public void deleteAtIndex(int index) {
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
        int currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        size -= 1;
    }

    ///forward display
    public void display(){
          Node temp=head;
        while(temp!=null){
            System.out.print(temp.val +"=>");
            temp=temp.next;
        }
        System.out.println("END");
    }
    //display in reverse 
    public void displayreverse(){
        Node temp=tail;
        while(temp!=null){
              System.out.print(temp.val +"=>");
            temp=temp.prev;
        }
          System.out.println("Start");
    }
    class Node{
          int val;
        Node next;
        Node prev;
        public Node(int val){
            this.val=val;
        }
        public Node(int val,Node next,Node prev){
            this.val=val;
            this.next=next;
            this.prev=prev;
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

export default Ddelete;
