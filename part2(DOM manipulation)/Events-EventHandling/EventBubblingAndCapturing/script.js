// 1. Event Bubbling
/**
 * - Event Bubbling to the phenomenon in JavaScript where,
 *   some element is supposed to have an eventListener but
 *   it doesn't have any listener of it's own, then as soon
 *   as the event is triggered, it will try to find the
 *   listener on it's parent element, and so on move upwards.
 * 
 * - But even if the element where event is happening, has it's
 *   own listener, then also all the parent's Listeners will be
 *   triggered, no matter what.
 */
document.querySelector("#nav").addEventListener("click", function(){
    alert("clicked");
});
/**
 * - We are applying an eventListener to the parent ul instead of li
 *   and whenever we will click the li it will be crossed.
 */
document.querySelector("ul").addEventListener("click", function(val){
    val.target.classList.toggle("lt");
});

// 2. Event Capturing
/**
 * - Whenever we raise an event, the flow of event occurs
 * in two phases:
 * - phase1: event moves from top level to the bottom
 * - phase2: event moves from the raised element to the parent.
 * - first the phase 1 occurs always but by default it is off
 *   but if we switch it on the we'll get answers from phase1
 *   first.
 * - The capture phase can be turned on by writing "true", after
 *   the function definition in the eventListener.
 * - Therefore, event capturing is exact opposite of event bubbling.
 */
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("#show");

btn.addEventListener("click", function(){
    console.log("button clicked");
}, true);
c.addEventListener("click", function(){
    console.log("c clicked");
}, true);
b.addEventListener("click", function(){
    console.log("b clicked");
}, true);
a.addEventListener("click", function(){
    console.log("a clicked");
}, true);