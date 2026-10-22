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
 * - Change event works when there is a change in the input, select
 *   or textarea
 * - If we are having problem adding an event listener to an element,
 *   then we can simply console.log it and then we will find where that
 *   value is present that we want to access and we'll find it.
 */
let inp = document.querySelector("input");
inp.addEventListener("input", function(evt){
    if(evt.data !== null) console.log(evt.data);
});

let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", function(detail){
    console.log(detail.target.value);
    /**
     * - so therefore whenever we see a change the select tag, an event
     *   is triggered and therefore we change the heading, and simultaneously
     *   also print the value details of that element in the console.
     */
    device.textContent = `${detail.target.value} Selected`;
});
/**
 * - Suppose we want to change what is written on the screen based on the keys 
 *   that we press. The screen that we see is called a "window". So therefore,
 *   we have to apply the event listener to the window because we are typing
 *   directly on the screen and not in any input box.
 */

let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(dets){
    console.log(dets.key);
    h1.textContent = dets.key;
    if(h1.textContent === ' ') h1.textContent = "spc"
});

/**
 * - If we want to create a button that looks good, and is functional at the
 *   same time, then we would have to make the by-default button shown by html,
 *   and create a new attractive one and make it work as our primary button.
 * - In that case we would have to link the actual button to the button that we
 *   created.
 */

let btn = document.querySelector("#btn");
let fileInp = document.querySelector("#inpBtn");
btn.addEventListener("click", function(val){
    fileInp.click();
});
fileInp.addEventListener("change", function(dets){
    console.log(dets.target.files[0].name);
    const fileName = dets.target.files[0];
    if(fileName) btn.textContent = fileName.name;
});

/**
 * - Now we are trying to create a form in which we will
 *   collect the information and as soon the submit button
 *   is clicked, we want to have a card with all the details.
 * - Now we noticed that each and every time this submit
 *   button is clicked, the page reloads and all the info
 *   that we inputted into the box gets refreshed. Therefore,
 *   we need to tell it not to reload the webpage again and
 *   again.
 */
let form = document.querySelector("form");
let inputs = document.querySelectorAll("#ip");

let main2 = document.querySelector("#main2");
form.addEventListener("submit", function(dets){
    dets.preventDefault();//This prevents the reload of page.
    console.log(inputs);
    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    )

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(image);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main2.appendChild(card);
    inputs.forEach(function(val){
        if(val.type !== "submit") val.value = "";
    });
});

