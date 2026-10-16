// 1. Arrays
/**
 * - In JS, arrays can hold elements of different datatypes,
 * like the first element can be an integer, other can be
 * a floating number, then boolean, and even string. All 
 * under the same array.
 * 
 * - If we try to search for an element that do not exist we'll
 * get "undefined".
 * 
 */
let marks = [1, 2, 3, 4, "hello"];
marks[3] = "world";
marks.pop();
marks.shift();
marks.unshift("What?")
marks.push(3.14);
console.log(marks);

// arrays can also be created like this:
let arr = new Array();

// 2. Methods in arrays
/**
 * - If we write anything like arrayname.something(), it
 * is a method.
 * eg.:- .push(), .pop(), .unshift() etc.
 * 
 * 1. .push() adds a value to the end.
 * 2. .pop() removes a value from the end.
 * 3. .shift() removes a value from the front.
 * 4. .unshift() adds a value to the front.
 * 5. .splice(fromWhere, howmany) is used to remove
 *     specific number of elements from some place.
 *     We can also add elements if we put 0 as no. of
 *     elements to be removed, and values to be added,
 *     inside "" after that.
 * 6. .slice(from, one_place_after_till) gets a copy
 *     of an existing array for a particular range inside
 *     a new array. It doesn't affect the original array.
 * 7. .reverse() reverse the original array.
 * 9. .sort() used to sort the array in ascending or descending
 *     order. We have to pass a function inside the sort parameters
 *     with parameters a, b. Then return a - b for ascending order, 
 *     and b - a for descending order.
 * 10. .forEach() runs like a for loop and iterates every value.
 * 11. .map() is only used when we want to create a new array
 *      on the basis of an existing array.
 * 12. .filter() is used to create new array which contains only
 *      filtered elements after a condition.
 * 13. .reduce() is used to reduce all the values from an array
 *      down to a single value.
 * 14. .find() returns first elements that satisfy the condition.
 * 15. .some() return true or false if atleast once the condition
 *      is satisfied.
 * 16. .every() does the same thing as some() but only returns true
 *      if all elements follow the condition.
 * - sort, map, filter, reduce, foreach accepts a function always.
 * - if we just write .sort() it still sorts in ascending order
 *   but only if the values inside are string type not the numeric
 *   type. Because if the values inside are of numeric type then it'll
 *   simply convert each value to a string type which is a problem, so
 *   for numeric values we must write a compare function inside it.
 * - we can also chain these functions like nums.sort().reverse(),
 *   like here it will sort and the reverse it, so finally it will
 *   be sorted but in descending order.
 */
let nums = [123, 3, 44, 103, 9];
//Sort
let sr = nums.sort(function(a, b){
    return a - b;
});

//forEach
nums.forEach(function(val){
    console.log(val);
});

//map
let newNums = nums.map(function(val){
    return val + 1;
});
console.log(newNums); //[ 4, 10, 45, 104, 124 ]

//filter
let filteredNums = nums.filter(function(val){
    if(val > 94) return true;
}); //[103, 123]
console.log(filteredNums);

//reduce
let reducedVal = nums.reduce(function(accumulator, val){
    return accumulator + val; // Whatever we return is saved in accumulator each time.
}, 0); // here 0 is the initial value of accumulator.

console.log(reducedVal);

//find
let testArr = [
    {id: 1, key: 1},
    {id: 2, key: 9},
    {id: 3, key: 2}
];
let findInTestArr = testArr.find(function(val){
    return val.key === 9;
});
console.log(findInTestArr);

//some
let any = nums.some(function(val){
    return val > 850;
});
console.log(any);

//Destructuring of an array
let names = ["Ayush", "Joshi"];
let [firstname, lastname] = names;
console.log(`firstname: ${firstname}`);
console.log(`lastname: ${lastname}`);

//merge two arrays using spread operator
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(`a: ${a} \nb: ${b} \nc: ${c}`);