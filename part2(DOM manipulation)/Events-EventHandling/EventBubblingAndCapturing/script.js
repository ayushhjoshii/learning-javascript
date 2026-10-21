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
 */