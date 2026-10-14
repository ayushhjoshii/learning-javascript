/**
 * In JS, arrays can hold elements of different datatypes,
 * like the first element can be an integer, other can be
 * a floating number, then boolean, and even string. All 
 * under the same array.
 * 
 * 
 */
let marks = [1, 2, 3, 4, "hello"];
marks[3] = "world";
marks.pop();
marks.shift();
marks.unshift("What?")
marks.push(3.14);
console.log(...marks);

// arrays can also be created like this:
let arr = new Array();