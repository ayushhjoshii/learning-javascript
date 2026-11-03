# 1. Scope

- Scope defines that till where can a function or a variable be used, like from where till where.
- Scope are of 3 types:
     1. functional scope
     2. global scope
     3. block scope
- Anything written in open is considered to be in global scope.
- Those things written inside curly braces are considered block scope except in functions are block scope.
- As the name suggests, functional scope means, accessible inside the function.

# 2. Execution Context

- Whenever JS executes global code or calls a function, it creates an Execution Context. This context is created and managed in two phases: the Memory Phase(where hoisting occurs and variables are initialized to undefined) and the Execution Phase (where code is executed line by line).
- Execution Context is a container/environment (an abstract data structure) that stroes variables, functions and the value of this for the current scope.
- One more thing about this execution context is that it is abstract which means that we can't see it.

# 3. Lexical Scoping vs Dynamic Scoping

- Lexical Scoping means that accessibility depends on where it's written.
- Dynamic Scoping means that accessibility depends on where it is called from.
- JavaScript follows Lexical Scoping.

# 4. Closure

- A Closure is a function that "remembers" its outer variables and keeps access to them, even long after the outer function has finished runnning. So basically in all of this, the Closure function is the one that's present inside because it is the one that actually closes after the outer function finishes.
- Whenever a function ends, all the variables declared inside it are also ended, but in case of a closure, a backlink is formed for the outer function and the variables inside it. The name of that backlink is [[environment]]
- For example:
```javascript
function createCounter(){
 let count = 0;
 return function(){
     count++;
     console.log(count);
 }
}
const myCounter = createCounter(); // we are not calling the function directly because nothing will happen and just a function will be returned, which here we are saving inside a variable and then calling that.
myCounter(); // output: 1
myCounter(); // output: 2
myCounter(); // output: 3
```

# 5. Encapsulation

- Encapsulation is the practice of hiding inner data and logic, exposing onlly what is necessary. In JS, closures enables encapsulation by creating private variables that only specific inner functions can access.
- For example:
```javascript
function clickLimiter(){
 let click = 0;
 return function (){
     if(click < 5){
         click++;
         console.log(`clicked ${click} times`);
     }else{
         console.log("limit exceeded, try after some time");
     }
 };
}
let limClik = clickLimiter();
limClik(); // output: 1
limClik(); // output: 2
limClik(); // output: 3
limClik(); // output: 4
limClik(); // output: 5
limClik(); // output: limit exceeded, try after some time
```