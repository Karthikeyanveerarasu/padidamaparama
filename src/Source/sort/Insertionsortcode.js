import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Insertionsortcode = () => {
  const javaCode = `
  import java.util.*;
  public class MyClass {
      public static void main(String args[]) {
        int arr[]={5,4,3,2,1};
        for(int i=1;i<arr.length;i++){  // iterate for 1 ..... n
            int key=arr[i];     // key is current i element
            int j=i-1;               // j is i-1 iterate from i-1 ..... 0
            while(j>=0 && arr[j]>key){
                arr[j+1]=arr[j];   // swap the larger with smaller
                j--;
            }
            arr[j+1]=key; /// atlast swap the key
        }
        System.out.println(Arrays.toString(arr));
      }
  }
  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default Insertionsortcode;
