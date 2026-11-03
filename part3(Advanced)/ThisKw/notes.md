# 1. "This" keyword

- "this" keyword is a special keyword, because unlike other keywords retain their nature, "this" keyword can change it's nature based where it is being used.
- We will learn about:
    1. this in global scope
    2. this in function method
    3. this in event handler
    4. this in class
- "this" keyword inside the method refers to the overall object itself, and like the objectname we can use this keyword for eg: "this.age" will give the value of age variable of the object. 
- But if it is an arrow function then it will not refer to the object and will lose it's value and therefore, will again become window.
- also if another function is created inside a method, this will again loose it's value. So therefore always create the inside function as an arrow function so that the "this" keyword doesn't loose it's value.
- In eventListener also "this" refers to that on which the eventListener is added.