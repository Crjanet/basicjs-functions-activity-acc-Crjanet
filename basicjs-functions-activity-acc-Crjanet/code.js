// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Functions           */
/***********************/

// ----------------------------------------------------------------------------------------------
// Exercise One 
// - Return the number 5 from this function.
//
// Write your code here 👇

let getNumberFive = function() {
  return 5;
}

// ----------------------------------------------------------------------------------------------
// Exercise Two
// - Complete the function named "add" which accepts the two parameters/inputs (a and b), adds them 
//   together, and returns their sum as output.
// - For example, calling add(2, 4) should return a result of 6.
//
// Write your code here 👇


let add = function(a, b) {
  if (sum = a + b);
  return sum;
}
// ----------------------------------------------------------------------------------------------
// Exercise Three
// - Complete the function named "multiply" which accepts the three parameters/inputs (x, y, and z),
//   multiplies them together, and returns their product as output.
// - For example, calling multiply(4, 5, 6) should return a result of 120. 
//
// Write your code here 👇

let multiply = function(x, y, z) {
  if (sum = x * y * z);
  return sum;
}

// ----------------------------------------------------------------------------------------------
// Exercise Four
// - Complete the function named "concatenate" which accepts two parameters/inputs (message and text).  
// - Add the text to the end of the message, and then return the complete string as output.
//
// Write your code here 👇

let concatenate = function(message, text) {
  let sentence = message + text
  return sentence;
}

// ----------------------------------------------------------------------------------------------
// Exercise Five
// - Complete the function named "areaOfTriangle" which accepts two parameters/inputs
//   (base and height). The function will calculate the area of a triangle where "base"
//   is the length of the triangle's base and "height" is the length of the triangle's
//   height.
// - The area of a triangle can be found using the following equation:
//   Area of a triangle = length of base * length of height / 2
// - Return as output the string "The total area of the triangle is " and concatenate
//   to the end the area of the triangle from above.
// - Example: If the value of the base parameter is 5 and the value of the height
//   parameter is 10, then the total area will be 25 and the output string to be returned 
//   will be, "The total area of the triangle is 25"
// 
// Write your code here 👇

let areaOfTriangle = function(base, height) {
  let total =  base * height;
  let response = "The total area of the triangle is";
  if (sum = response + " " + (total / 2));
  return sum;
}

// ----------------------------------------------------------------------------------------------
// Exercise Six
// - Remember that you have defined a function named "concatenate" above.
// - Below, edit the function "greet" which accepts one parameter/input (name)
//   and already contains a "message" string (do not change it).
// - USE the "concatenate" function above to combine the "message" and "name", INSTEAD
//   of the "+" operator, then return the output.
// - Example: If the value of the "name" parameter is "Devon", then the output of
//   the "greet" function should be "Hello, Devon".
//
// Write your code here 👇

let greet = function (name) {
  let message = "Hello, "
  let saying = message .concat(name);
  return saying;
}

// ----------------------------------------------------------------------------------------------
// Exercise Seven
// - Remember that you have defined a function named "add" above.
// - Complete the assignment statement below ("let sum") so that "sum" becomes 
//   an alternate way to run the "add" function. USE the "add" function/variable 
//   to complete this.
// - In other words, we want to make "sum" a SECOND name (an alias) for "add".
//   The functions "sum" and "add" should be completely interchangeable.
// - HINT: Do not use the "+" operator. Use the "add" function already defined.
// - Example: add(839, 3) and sum(839, 3) should return the same result.
//
// - Fun Fact: There ARE common built-in functions which are known by multiple names.
//
// Write your code here 👇
let sumOfNumbers = function (add) {
  let sum = a, b;
  if (total = sum += add);
  return total;
}
/* 
LEAVE THE FOLLOWING CODE UNMODIFIED:
*/

export {
  getNumberFive,
	add,
	multiply,
	concatenate,
	areaOfTriangle,
  greet,
  sum,
}