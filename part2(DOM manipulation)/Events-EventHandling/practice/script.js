// 1. Live Character Counter
/**
 * - So let's start by building a live character counter
 *   which counts the number of characters counted.
 */
let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(val){
    let left = 20 - inp.value.length;
    span.textContent = left;
    if(left < 0) span.style.color = "red";   
    else span.style.color = "";
});