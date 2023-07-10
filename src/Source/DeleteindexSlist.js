import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";
const DeleteindexSlist = () => {
  const javaCode = `
  public void delete(int index){
    if(index==0){
        return deletefirst();
    }
    if(index==size-1){
        return deleteLast();
    }
    Node pre=get(index-1);
    pre.next=pre.next.next;
}
public Node get(int index){
  Node node=head;
  for(int i=0;i<index;i++){
      node=node.next;
  }
  return node;
}
  `;

  return (
    <SyntaxHighlighter language="java" style={tomorrowNight}>
      {javaCode}
    </SyntaxHighlighter>
  );
};
export default DeleteindexSlist;
