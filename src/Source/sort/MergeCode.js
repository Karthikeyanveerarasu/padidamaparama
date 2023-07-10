import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const MergeCode = () => {
  const javaCode = `
  import java.util.*;
  public class MergeSort {
      
      public static void mergeSort(int[] arr) {
          if (arr == null || arr.length <= 1)
              return;
          
          int mid = arr.length / 2;
          int[] left = new int[mid];
          int[] right = new int[arr.length - mid];
          
          System.arraycopy(arr, 0, left, 0, left.length);
          System.arraycopy(arr, mid, right, 0, right.length);
          
          mergeSort(left);
          mergeSort(right);
          merge(arr, left, right);
      }
      
      private static void merge(int[] arr, int[] left, int[] right) {
          int i = 0, j = 0, k = 0;
          
          while (i < left.length && j < right.length) {
              if (left[i] <= right[j]) {
                  arr[k] = left[i];
                  i++;
              } else {
                  arr[k] = right[j];
                  j++;
              }
              k++;
          }
          
          while (i < left.length) {
              arr[k] = left[i];
              i++;
              k++;
          }
          
          while (j < right.length) {
              arr[k] = right[j];
              j++;
              k++;
          }
      }
      
      public static void main(String[] args) {
          int[] arr = {5, 2,2, 8, 12, 3};
          
          System.out.println("Original array: " + Arrays.toString(arr));
          mergeSort(arr);
          System.out.println("Sorted array: " + Arrays.toString(arr));
      }
  }

output : 
Original array: [5, 2, 2, 8, 12, 3]
Sorted array: [2, 2, 3, 5, 8, 12]



  `;

  return (
    <SyntaxHighlighter language="java" style={dracula}>
      {javaCode}
    </SyntaxHighlighter>
  );
};

export default MergeCode;
