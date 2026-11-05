// 1. Constructor Function
/**
 * - when we call a function using the new keyword, then
 *   the this keyword inside the function acts as an empty
 *   object.
 * - Such functions that are run with the help of new key-
 *   word are knwo as Constructor functions. We should always
 *   make the first letter capital.
 */
function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

let pencil1 = new CreatePencil("Natraj", 10, "peachpuff", "natraj");
let pencil2 = new CreatePencil("Doms", 25, "hotpink", "doms");
let pencil3 = new CreatePencil("Faber Castle", 20, "mintcream");
let pencil4 = new CreatePencil("Apsara", 15, "tomato");

// 2. Prototypes

/**
 * - If we want to want a property that is common among
 *   all the objects then we don't write inside the 
 *   constructor function but rather we write it by using
 *   ' ConstructorFuncName.prototype.PropertyName = "" '.
 * - This is done so that this common property doesn't take
 *   extra space again and again whenever a new object is
 *   being created.
 * - Also this property can be accessed by using this :
 *   ' ObjectName.PropertyName'
 */
// CreatePencil.prototype.base = "graphite";
CreatePencil.prototype.write = function(text){
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
};