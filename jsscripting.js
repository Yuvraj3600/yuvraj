// Array Challenges

// Challenge 1
const arr = [10, 20, 30, 40, 50];
arr.reverse();     // Reverses the array: [50, 40, 30, 20, 10]
arr.unshift(60);    // Adds 60 to the start: [60, 50, 40, 30, 20, 10]
arr.push(5);       // Adds 5 to the end: [60, 50, 40, 30, 20, 10, 5]
console.log("Challenge 1:", arr);  // Output: [60, 50, 40, 30, 20, 10, 5]

// Challenge 2
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [50, 60, 70, 80, 90, 100];
const arr3 = [...arr1, ...arr2];  // Combines arr1 and arr2
const uniqueArray3 = arr3.filter((item, index) => arr3.indexOf(item) === index); 
// Filters unique values
console.log("Challenge 2:", uniqueArray3);  // Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Object Challenges

const library = [
 {
   title: "Moby Dick",
   author: "Herman Melville",
   status: {
     own: true,
     reading: false,
     read: false,
   },
 },
 {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   status: {
     own: true,
     reading: false,
     read: false,
   },
 },
 {
   title: "The Catcher in the Rye",
   author: "J.D. Salinger",
   status: {
     own: true,
     reading: false,
     read: false,
   },
 },
];

// You finished reading all of the books. Set the read value for all of them to true using dot notation.
library.forEach((book) => {
  book.status.read = true;
});
console.log("Library after reading all books:", library);

// Destructure the title from the first book and rename the variable to firstBook
const { title: firstBook } = library[0];
console.log("First book:", firstBook);  // Output: "Moby Dick"

// Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log("Library JSON:", libraryJSON);

// Practice Exercises

// 01. Calculate the average marks of the class
const marks = [75, 88, 54, 47, 66, 72];
// Calculate the sum of all marks
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
// Calculate the average
const averageMarks = totalMarks / marks.length;
console.log("Average marks:", averageMarks);  // Output: 67

// 02. Apply 10% off on the prices array
const prices = [350, 745, 400, 950, 150];
// Apply 10% discount on each item
const discountedPrices = prices.map((price) => price * 0.9);
console.log("Discounted prices:", discountedPrices);  // Output: [315, 670.5, 360, 855, 135]

// Modify the Companies Array
let companies = ["Tesla", "Apple", "Uber", "Google", "Facebook", "Netflix"];
// a. Remove the first company (Tesla)
companies.shift();  // Removes "Tesla"
// b. Replace Uber with Lyft
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
  companies[uberIndex] = "Lyft";  // Replaces "Uber" with "Lyft"
}
// c. Add Amazon at the end
companies.push("Amazon");
console.log("Modified companies array:", companies);  
// Output: ["Apple", "Lyft", "Google", "Facebook", "Netflix", "Amazon"]