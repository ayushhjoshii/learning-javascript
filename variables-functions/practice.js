/* ============================================
   1. VARIABLE DECLARATIONS: var, let, const
============================================ */

var an = 12;
console.log(an);

/**
 * var:
 * 1. Gets attached to the global object (window in browsers).
 * 2. Function-scoped (ignores block {} boundaries).
 * 3. Can be re-declared with the same name without error.
 *
 * let:
 * 1. Block-scoped (confined to the nearest {}).
 * 2. Cannot be re-declared in the same scope.
 *
 * const:
 * 1. Block-scoped like let.
 * 2. Cannot be reassigned after initialization.
 * 3. Must be initialized at the time of declaration.
 */

let b = 2;
const pi = 3.14;

/* ============================================
   2. HOISTING & TEMPORAL DEAD ZONE (TDZ)
============================================ */

/**
 * Hoisting: JS moves variable/function DECLARATIONS to the top 
 * of their scope during the compile phase (before code execution).
 * The initialization (assigning a value) stays in place.
 *
 * - var: Declaration is hoisted AND automatically initialized with `undefined`.
 *        So accessing it before assignment gives `undefined`, not an error.
 *
 * - let/const: Declaration is hoisted BUT NOT initialized.
 *        The variable exists in a "Temporal Dead Zone" (TDZ) from the start 
 *        of the block until its actual line of initialization.
 *        Accessing it during this TDZ period throws a ReferenceError.
 */

let x = 10;
{
    let x = 20; // different variable due to block scoping
    console.log("Inside: " + x); // 20
}
console.log("Outside: " + x); // 10

/* ============================================
   3. DATA TYPES: Primitive vs Reference
============================================ */

/**
 * 1. Primitive types: store the actual value.
 *    Examples: string, number, boolean, null, undefined, symbol, bigint
 *    - Copying a primitive copies its actual value.
 *    - Changing the copy does NOT affect the original.
 *
 * 2. Reference types: store a reference (memory address) to the value.
 *    Examples: object {}, array [], function ()
 *    - Copying a reference type copies the reference, not the actual data.
 *    - Changing the copy DOES affect the original (since both point to the same data).
 *
 * Notes on specific primitives:
 * - Strings can use single quotes '', double quotes "", or backticks `` (template literals).
 * - Numbers can be integers (12) or decimals (12.3) — JS has only one "number" type.
 * - Booleans are just true or false.
 * - Symbols create guaranteed-unique values, often used as object property keys
 *   to avoid naming collisions with existing properties/variables in libraries.
 */

/* ============================================
   4. DYNAMIC TYPING & typeof
============================================ */

/**
 * JS is dynamically typed: a variable's type can change at runtime.
 */
let a = 12;
a = true;
a = "hello";
a = undefined;
a = null;

/**
 * `typeof` operator returns the type of a value as a string.
 */
console.log("Type: " + typeof "hello");    // string
console.log("Type: " + typeof null);       // object (known JS quirk/bug)
console.log("Type: " + typeof undefined);  // undefined
console.log("Type: " + typeof NaN);        // number (NaN is technically a number type)

/* ============================================
   5. TYPE COERCION
============================================ */

/**
 * Type Coercion: JS automatically converts a value's type 
 * depending on the operation being performed.
 */
console.log("5" + 1); // "51" -> number converted to string, then concatenated
console.log("5" - 1); // 4   -> string converted to number because "-" only works for subtraction

/* ============================================
   6. TRUTHY & FALSY VALUES
============================================ */

/**
 * JS treats every value as either "truthy" or "falsy" in a boolean context.
 *
 * Falsy values (only these): 0, "", null, undefined, NaN, false, document.all
 * Everything else is truthy (including "0", "false", [], {} — these are truthy!)
 *
 * Use !! before a value to quickly convert it to its boolean equivalent.
 */
console.log(!!123); // true

/* ============================================
   7. OPERATORS
============================================ */

/**
 * Types of operators:
 * 1. Arithmetic: +  -  *  /  %  **
 * 2. Comparison: ==  ===  !=  !==  <=  >=  <  >
 * 3. Assignment: =  +=  -=  *=  /=  %=
 * 4. Logical: &&  ||  !
 * 5. Unary: +  -  !  typeof  ++  --
 * 6. Ternary: condition ? valueIfTrue : valueIfFalse
 */

console.log(12 == 12);    // true
console.log(12 == "12");  // true  -> "==" checks value only (loose equality), converts types
console.log(12 === "12"); // false -> "===" checks value AND type (strict equality)
// Similarly: != is loose inequality, !== is strict inequality

// Unary + converts a value to a number (or NaN if not convertible)
console.log(+"5");     // 5
console.log(+"hello"); // NaN

/* ============================================
   8. typeof QUIRKS & instanceof
============================================ */

/**
 * `typeof` gives misleading results in a few cases:
 * 1. typeof null         -> "object"  (should logically be "null", but it's a long-standing JS bug)
 * 2. typeof []           -> "object"  (arrays are technically objects in JS)
 * 3. typeof NaN          -> "number"  (NaN stands for "Not a Number" but its type IS number)
 *
 * To correctly check reference types, use `instanceof`:
 * [] instanceof Array   -> true
 *
 * Note: `instanceof` only works reliably with reference types (objects, arrays, functions),
 * not with primitives.
 */

/* ============================================
   9. FUNCTIONS: Declaration Styles
============================================ */

/**
 * 1. Function Declaration (Statement):
 *    function abc() { }
 *    - Hoisted completely (can be called before it's defined in code).
 *
 * 2. Function Expression:
 *    let fnc = function() { };
 *    - NOT hoisted the same way; can't be called before this line runs.
 *
 * 3. Arrow Function:
 *    let fnc = () => { };
 *    - Shorter syntax; does not have its own `this` (uses the surrounding scope's `this`).
 */

/* ============================================
   10. DEFAULT PARAMETERS & REST/SPREAD OPERATOR
============================================ */

/**
 * Default Parameters: provide a fallback value for a parameter 
 * in case no argument is passed during the function call.
 * Example: function greet(name = "Guest") { }
 *
 * Rest Operator (...) — used in function parameters:
 * -Collects multiple arguments into a single array, so that we don't
 *  have to worry about the number of parameters to pass.
 * -Rest parameter must always be the last parameter.
 *
 * Spread Operator (...) — used with arrays/objects:
 * Expands an array/object into individual elements/properties.
 *
 * Same syntax (...), different purpose depending on where it's used!
 */

//rest
function abcd(...val) {
    console.log(val); // collects all arguments into an array
}
abcd(12, 4, 5, 22, 54, 0);

//spread
const arr = [1, 2, 3, 4, 5];
console.log(arr);//prints the whole array as is.
console.log(...arr); //breakes the array into individual elements.

/* ============================================
   11. FIRST-CLASS & HIGHER-ORDER FUNCTIONS
============================================ */

/**
 * First-Class Functions: In JS, functions are treated like any other value.
 * They can be:
 * - Stored in variables
 * - Passed as arguments to other functions
 * - Returned from other functions
 * - Store it inside data structures like arrays, objects
 *
 * Higher-Order Function (HOF): A function that either:
 * - Accepts another function as a parameter, OR
 * - Returns a function
 */

/* ============================================
   12. PURE vs IMPURE FUNCTIONS
============================================ */

/**
 * Pure Function:
 * - Given the same input, it ALWAYS returns the same output.
 * - Does NOT modify anything outside its own scope (no side effects).
 * - Does NOT depend on external/outer variables — only uses its own parameters.
 *
 * Impure Function:
 * - May produce different outputs for the same input.
 * - Modifies external state or variables (has side effects).
 */

let val = 10;

// pure function example — only depends on its own parameter
function pureAdd(num) {
    return num + 1;
}

// Impure — modifies the external `val` variable (side effect)
function impureIncrement() {
    return ++val;
}

console.log(pureAdd(val));      // 11 (val remains unchanged)
console.log(impureIncrement()); // 11 (val itself gets changed to 11 now!)

/* ============================================
   13. CLOSURES
============================================ */

/**
 * Closure: A function that "remembers" variables from its outer (parent) 
 * function's scope, even after the parent function has finished executing.
 */
function closureFn() {
    let a = 12;
    return function () {
        console.log(a); // inner function "closes over" variable `a`
    };
}
const innerFn = closureFn();
innerFn(); // 12

/* ============================================
   14. LEXICAL SCOPING
============================================ */

/**
 * Lexical Scoping: A function's access to variables is determined by 
 * WHERE it is physically written in the code (its nesting), not by 
 * where/how it is called.
 *
 * In simple terms: an inner function can access variables of its 
 * outer function(s), but NOT the other way around.
 */
function lex() {
    let a = 12;
    function defg() {
        let b = 13;
        console.log(a); // ✅ can access outer variable `a`
        function ghij() {
            let c = 14;
            console.log(a, b); // ✅ can access both outer variables `a` and `b`
        }
        ghij();
    }
    defg();
    // console.log(b); // ❌ Error: `b` is not accessible here (outside its scope)
}
lex();

/* ============================================
   15. IIFE (Immediately Invoked Function Expression)
============================================ */

/**
 * IIFE: A function that runs immediately as soon as it's defined, 
 * without needing to be called separately.
 * Commonly used to create an isolated scope (avoid polluting global scope).
 */
(function () {
    console.log("IIFE executed immediately!");
})();

/* ============================================
   16. FUNCTION HOISTING
============================================ */

/**
 * Function Declarations are fully hoisted — both the declaration 
 * AND the function body are moved up. This allows calling the 
 * function BEFORE its definition appears in the code.
 */

console.log(getScore(19, 42, 32, 23)); // Works fine due to hoisting!

function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total += val;
    });
    return total;
}