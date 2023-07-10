import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";
const DeleteSlist = () => {
  const javaCode = `
  public void deletefirst(){
    head=head.next;
}
  public void deleteLast(){
    if(size<=1){
       return deletefirst();
        
    }
    Node secondlast=get(size-2);
  
    tail=secondlast;
    tail.next=null;
   
}
  `;

  return (
    <SyntaxHighlighter language="java" style={tomorrowNight}>
      {javaCode}
    </SyntaxHighlighter>
  );
};
export default DeleteSlist;
