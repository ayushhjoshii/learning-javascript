// 1. 
/**
 * - Steps to add an event Listener:
 *   1. select the paragraph using the querySelector
 *   2. using the syntax of:
 *      element_name.addEventListener("action_name", function(){
 *          any_reaction;
 *      })
 * - To remove any eventListener:
 *      p.removeEventListener("action", function_name);
 * 
 */
let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "green";
    p.style.backgroundColor = "black";
});
function dblclick(){
    p.style.color = "red";
    p.style.backgroundColor = "yellow";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick", dblclick);

// 2. Common Events
/**
 * - some of the common events are:
 *   1. click
 *   2. input
 *   3. change
 *   4. submit
 *   5. mouseover
 *   6. keyup
 */
let inp = document.querySelector("input");
inp.addEventListener("input", function(evt){
    if(evt.data !== null) console.log(evt.data);
});