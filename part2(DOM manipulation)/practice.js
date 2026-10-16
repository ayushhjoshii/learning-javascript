// 1. Selecting an Element in HTML
/**
 * - When we do console.log for getElementsByClassName, we get an array
 *   of all elements with that class. 
 * - But we we don't use these in modern day, we use querySelector("tag_name")
 */
let abcd = document.getElementById("abcd");
console.dir(abcd);

let efgh = document.getElementsByClassName("efgh");
console.log(efgh);

document.querySelector(h1);