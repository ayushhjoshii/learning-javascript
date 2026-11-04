// 1. Object oriented programming in JS
/**
 * - when we call a function using the new keyword, then
 *   the this keyword inside the function acts as an empty
 *   object.
 * - Now here we are creating a blueprint for objects.
 */
function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = "Hey how are you ?";
        h1.style.color = color;
        document.body.append(h1);
    };
}

let pencil1 = new CreatePencil("Natraj", 20, "black", "natraj");
let pencil2 = new CreatePencil("Doms", 25, "hotpink", "doms");