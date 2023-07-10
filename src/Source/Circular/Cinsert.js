import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Cinsert = () => {
  const javaCode = `
  public class MyClass {
    public static void main(String args[]) {
   Cll list=new Cll();
   list.insertFirst(20);
   list.insertFirst(10);
   list.insertLast(200);
    list.insertFirst(2);
    list.insert(1,1);
      list.insertLast(300);
   list.display();
    }
}
class Cll{
    Node head;
   Node tail;
   int size;
   public Cll(){
       this.size=0;
   }
   //insertion first
 public void insertFirst(int val) {
    Node newNode = new Node(val);

    if (head == null) {
        head = newNode;
        tail = newNode;
        newNode.next = newNode; // Set the next reference to itself for circularity
    } else {
        newNode.next = head;
        tail.next = newNode;
        head = newNode;
    }

    size++;
}
public void insertLast(int val){
    if(tail==null){
        insertFirst(val);
        return;
    }
    Node node=new Node(val);
    tail.next=node;
    node.next=head;
    tail=node;
    size++;
}
public void insert(int val,int index){
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
    current.next = newNode;
    size++;
}
public void display(){
     if (head == null) {
                System.out.println("Circular Linked List is empty.");
                return;
            }
    Node temp=head;
    do{
        System.out.print(temp.val+"=>");
        temp=temp.next;
    }while(temp!=head);
}
    class Node{
        int val;
        Node next;
        public Node(int val){
            this.val=val;
        }
        public Node(int val,Node next){
            this.val=val;
            this.next=next;
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

export default Cinsert;
