// 1. This keyword

// -> Global scope : window
console.log(this);

// -> Inside function : window
function abcd(){
    console.log(this);
}
abcd();

// -> Inside Method(Method is a function inside an object): object (only if not an arrow function )
let obj = {
    name: "harsh",
    car: "santro",
    sayName: function(){
        console.log(this.name);
    }
};
obj.sayName();

// -> Inside Event Handler
let heading = document.createElement("h1");
heading.textContent = "Hello Ayush";
document.querySelector("body").appendChild(heading);
document.querySelector("h1").addEventListener("click", function(){
    this.style.color = "red";
    console.log(this.textContent = "Ayush said hi :)");
});

// -> class : blank object when called with new keyword.
class Abcd{
    constructor(){
        console.log("heyhe");
        this.a = 12;
    }
}

let val = new Abcd(); // "new" keyword creates a blank object

// call apply bind
//while calling the function we can set the value of of "this"

function abcd(a, b, c){
    console.log(this.car);
}
abcd.call(obj, 1, 2, 3); // when called like this, "this" refers to obj1. so first we'll have to give the value for "this", and then parameters.

// In case of apply, everything works similar to the bind, but we pass only two parameters, first is the value of "this" and then an array of all other parameters.
let obj1 = {
    name: "jagat",
    age: 28,
    car: "lamborghini"
}
abcd.apply(obj1, [1, 2, 3]);

// Bind unlike call and apply, doesn't runs the function, instead it creates a copy of that function where the default of "this" is set to the passed object.
let fnc = abcd.bind(obj, 1, 2, 3);
fnc();