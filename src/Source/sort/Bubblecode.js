import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Bubblecode = () => {
  const javaCode = `
  public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        // Perform n-1 iterations
        for (int i = 0; i < n - 1; i++) {
            // Each iteration moves the largest element to the end
            for (int j = 0; j < n - i - 1; j++) {
                // Swap adjacent elements if they are in the wrong order
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 12, 3};
        
        System.out.println("Array before sorting:");
        printArray(arr);
        
        bubbleSort(arr);
        
        System.out.println("Array after sorting:");
        printArray(arr);
    }
    
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}

output : 
Array before sorting:
5 2 8 12 3 
Array after sorting:
2 3 5 8 12 

  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default Bubblecode;
