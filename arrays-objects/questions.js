// 1. use .map() to square each number
let arr = [12, 3, 5, 16];
let sqArr = arr.map(function(val){
    return val * val;
});
console.log(`arr: ${arr} \nsqArr: ${sqArr}`);

// 2. filter all numbers greater than 10.(here i am using an arrow function)
let filArr = arr.filter(val => {
    return val > 10;
});
console.log(`filArr: ${filArr}`);

// 3. use .reduce() to sum up an array.
let sum = arr.reduce((accumulator, val) => {
    return accumulator + val;
}, 0);
console.log(`sum: ${sum}`);

// 4. Destructure the key "first_name" as a variable called firstName.
const user = {
    "first-name": "Sakshi"
};
let {"first-name" : firstName} = user;
console.log(firstName);

// 5. Use Object.entries() to print all key-value pairs
const course = {
    title: "JavaScript",
    duration: "4 weeks"
};
Object.entries(course).forEach(val => {
    console.log(`${val[0]} : ${val[1]}`);
});