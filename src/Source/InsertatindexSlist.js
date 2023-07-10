import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";
const InsertatindexSlist = () => {
  const javaCode = `
  public void insert(int val,int index){
    if(index==0){
        insertfirst(val);
        return;
    }
    if(index==size){
        insertlast(val);
        return;
    }
    Node temp=head;
    for(int i=0;i<index-1;i++){
        temp=temp.next;
    }
    Node node=new Node(val,temp.next);
    temp.next=node;
    size++;
}
  `;

  return (
    <SyntaxHighlighter language="java" style={tomorrowNight}>
      {javaCode}
    </SyntaxHighlighter>
  );
};
export default InsertatindexSlist;
