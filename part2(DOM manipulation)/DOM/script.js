// 1. Selecting an Element in HTML
/**
 * - When we do console.log for getElementsByClassName, we get an array-like output, which is Collection
 *   of all elements with that class. 
 * - But we we don't use these in modern day, we use querySelector("tag_name/id/class_name/attribute")
 *   /querySelectorAll("tag_name").
 * - When we use getElementsByClassName or getElementById, we don't use "." or "#" to denote the class
 *   id, but inside querySelector, we have to use "." for class, and "#" for id.
 * - Using the querySelector gives the first tag that appears in html.
 * - Using the querySelectorAll gives an array of all the tags of that type.
 */
let abcd = document.getElementById("abcd");
console.dir(abcd);//console.log gives it as a tag, and .dir shows the full opening format

let efgh = document.getElementsByClassName("efgh");
console.log(efgh);

let lmno = document.querySelector("h1");
console.dir(lmno);

// 2. Text/content accessing
/**
 * - We can access the content using three of the properties:
 *   1. innerText(slower)
 *   2. textContent(faster)
 *   3. innerHTML
 * - first we see all the properties using .dir, the we see where,
 *   our content is present and using that property we change it.
 * - Using innerText and textContent we change the text, but using,
 *   inner HTML we can also change the html of that element.
 */
let h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Hi! this is Ayush Joshi";

// 3. Attribute Manipulation
/**
 * - Manipulation here simply means that we change the values using the 
 *   JavaScript.
 * - We have 3 things here:
 *   1. getAttribute: to see what is the value of an attribute
 *   2. setAttribute: for setting a new value
 *   3. removeAttribute: to remove a particular attribute from a tag
 * - We can change the attribute simply using accessing technique or we can,
 *   tag_name.setAttribute("attribute_name", "new_value");
 */
let a = document.querySelector("a");
console.dir(a);
a.setAttribute("href","https://www.google.com");
let img = document.querySelector("img");
img.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BODk1OGZkZTctY2RhNS00M2RmLTgxYjctMjU0YWVjNDBiMDYzXkEyXkFqcGc@._V1_.jpg");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

// 4. Dynamic DOM manipulation
/**
 * - We have 4 things here:
 *   1. createElement
 *   2. appendChild
 *   3. removeChild
 *   4. prepend
 * - First we simple create a new element using createElement, then we select
 *   the element and simply append or prepend it.
 * - append means it will become the last element, and prepend means first.
 */
let h2 = document.createElement("h2");
h2.textContent = "I want to work at google";
document.querySelector("body").prepend(h2);

// 5. Style updates(Changing css using js)
/**
 * - We have 2 things here:
 *   1. .style 
 *   2. classList: either add, remove or toggle the class you want(this is the more preferred way)
 */
h2.style.color = "yellow";
h2.style.backgroundColor = "black";
h2.style.fontFamily = "cursive";
h1.classList.add("first");