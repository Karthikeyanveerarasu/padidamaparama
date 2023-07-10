import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";
const InsertfirstSlist = () => {
  const javaCode = `
  public class MyClass {
    public static void main(String args[]) {
    li list=new li();
    list.insertfirst(3);
    list.insertfirst(8);
    list.display();
    }
}
class li{
     Node head;
     Node tail;
     int size;
    public li(){
        this.size=0;
    }
    ///method call
    public void insertfirst(int val){
        //we no need next node so use first constructor
        Node node = new Node(val); ///// it assign next node to null
        node.next=head;
        head=node;
        if(tail==null){
            tail=node;
        }
        size+=1;
    }
      public void display() {
        Node temp = head; ////// do not iterate head because head is to be at first..so create temp
        while (temp != null) {
            System.out.print(temp.value + " => ");
            temp = temp.next;
        }
        System.out.println("End");
    }
    public class Node{
         int value;
         Node next;
         public Node(int value){
             this.value=value;
         }
         public Node(int value,Node next){
             this.value=value;
             this.next=next;
         }
    }
}
output :
8 => 3 => End
  `;

  return (
    <SyntaxHighlighter language="java" style={tomorrowNight}>
      {javaCode}
    </SyntaxHighlighter>
  );
};
export default InsertfirstSlist;
