// 1. Classical Inheritance vs Prototypal Inheritance
/**
 * - Classical Inheritance is the normal type of inheritance
 *   that we see in other languages, in which one class 
 *   inherits from another class.
 * - Prototypal Inheritance is the one where one object
 *   inherits from another object, because earlier there was
 *   no concept of class in JavaScript.
 * - Since we already know about the Classical Inheritance
 *   let's look at a few examples of prototypal inheritance.
 */
let coffee = {
    color: "dark",
    drink: function(){
        console.log("gut gut gut");
    }
};

/**
 * - So there this Object.create(), can be used to inherit
 *   properties from one object into another.
 */
let arabiataCoffee = Object.create(coffee);
console.log(arabiataCoffee);
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();
/**
 * - Instead of cloning an object using the spread Operator
 *   ({...coffee}) which creates a shallow copy with duplicate
 *   properties, we use Object.create() to establish a prototype
 *   link, allowing objects to delegate and share properties/
 *   methods throught he prototype chain.
 */
