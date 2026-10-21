// 1. mouseover and mouseout
/**
 * - This allows to make changes based where the mouse is hovering.
 */
let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function(val){
    abcd.style.backgroundColor = "yellow";
});
abcd.addEventListener("mouseout", function(val){
    abcd.style.backgroundColor = "red";
});

//2. mousemove
/**
 * - As the mouse moves it makes some changes.
 * - Here clientX and clientY are the coordinates of the places where the
 *   mouse is hovering over. As the names suggest, clientX is for x coordinate
 *   and clientY is for the y coordinate.
 */
const halfWidth = abcd.offsetWidth / 2;

window.addEventListener("mousemove", function(val){
    abcd.style.top = val.clientY - halfWidth + "px";
    abcd.style.left = val.clientX - halfWidth + "px";
});

// 3. Event Object
/**
 * - An event object is a built-in object automatically created
 *   by the browser, as soon as an event occurs in the Document
 *   Object Model(DOM).
 * - It is simply the parameter that is written inside the function()
 *   whenever we add an event listener.
 */