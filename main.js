// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];
let sedans = carBrands.filter(function (car) {
  return car.type === "sedan";
});
console.log(sedans);

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function rever(str){
  let result = "";
  for(let i = str.length-1; i >= 0 ; i--){
    result += str[i]
  }

  return result;
}
console.log(rever)
//function reverseString(str) {
 // return str.split("").reverse().join("");
//}
//reverseString("cat");


// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
var longestS = function (arrayOfS) {
  var stringToReturn = "";
  arrayOfS.forEach(function (currentString) {
      if (currentString.length > stringToReturn.length) {
          stringToReturn = currentString;
      }
  });
  return stringToReturn;
};

console.log(longestS(['catdd', 'hattt', 'rattt', 'dad']))
// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  return arr.reduce(function (acc, cur) {
      return acc + cur.price;
  }, 0);
}

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//Recursion is the process in which a function calls itself directly or indirectly analagous to a russian doll that stops at the smallest doll or in this instance, a base case.
//In a recursive algorithim two rules that must be met are that each recursive call (or calling of itself)
// must be a subproblem or a smaller instance of the original problem and 
//the recursive calls must eventually arise at the base case, which is solved without further recursion. 

//An example of  a recursive algorithim is a palindrome. Broadly it would work as the following: 
//1) If there is only one character in string return true.
//2) Else compare first and last characters and recur for remaining substring.

//In detailed psuedocode: If the string is made of no letters or just one letter, then it is a palindrome.
//Otherwise, compare the first and last letters of the string.
//If the first and last letters differ, then (else) the string is not a palindrome.
//Otherwise, the first and last letters are the same. Remove them from the
//string, and assess whether the string that remains is a palindrome. Take
//the answer for this smaller string and use it as the answer for the original string.



//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

//Merge Sort is a sorting algorithm, which is commonly used in computer science. 
//It is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems 
//of the same or related type, until these become simple enough to be solved directly. 
//The solutions to the sub-problems are then combined to give a solution to the original problem.
// The way it works is : Merge Sort first divides the array into equal halves and then combines them in a sorted manner.
//The pseudocode steps are:
//If it is only one element in the list it is already sorted, return.
//Divide the list recursively into two halves until it can no more be divided.
//Merge the smaller lists into new list in sorted order.
//Pros of Merge sort :Worst case , best case, average case time complexity is : o(n log(n)) which makes it very efficient .
//It starts with smaller subfiles and finishes with largest ones . As a result it doesn’t need stack. Therfore this algorithm is stable unlike “QUICKSORT” which starts with largest subfiles and finishes with small ones . It used stack and hence making it unstable.
//Some cons include: Marginally slower than quick sort in practise.
// Its space complexity is O(n) which requires extra space for storing data temporary and is Not as space efficient as block sort.
// It doesn't sort the elements if it exceeds to a certain limits.(say 100000 elements)

// Bubble sort is an infamous simple sorting algorithm that repeatedly steps through the list to be sorted,
// comparing each pair of adjacent items and swaps them if they are in the wrong order.  
//The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values 
//swap positions if the first value is greater than the second. 
//This way during each pass through the array, the largest value “bubbles up” to the top,
// and after each pass the elements furthest to the right are in the correct order. 
//An example: given the array [5,3,1,4,6] we can use bubble sort to sort the array in ascending order.
// Bubble sort will start by comparing the first pair of values, 5 & 3. 3 is smaller than 5, so it’ll swap the two values 
//and then move on to compare the next pair of values, 5 & 1. It’ll continue doing this over and over until the array is sorted:
//Bubble sort, needs a final pass through the array to ensure that no other swaps are necessary before returning the array. 
//Advantages of bubble sort include is that it is the simplest sorting approach, 
//Using an optimized approach, it can detect an already sorted array in first pass. It has a space complexity of O(1).
//Stable sort: does not change the relative order of elements with equal key
//Disadvantage include Bubble sort is a comparatively slower algorithm with an O(n^2) worst-case running time, 
//it is therefore highly ineffeicient for larger datasets 
//Another con is the loop continues to run even if the array is sorted if the code is not optimised.


/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */


//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`
