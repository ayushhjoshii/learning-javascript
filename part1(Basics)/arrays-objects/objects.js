// 1. Objects
/**
 * - If we are talking about many entities, then we use arrays
 *   but if we are talking about the same entity's features, we
 *   use object, that's the difference between both.
 * 
 * - For objects we use curly braces instead of square brackets.
 * - we can access properties of object using dot followed by name
 *   of the property. we can also use square brackets with the property
 *   name inside it within inverted commas (either single or double).
 */
let role = "SWE";//This works as computed property inside the obj.
let obj = {
    name: "Ayush",
    age: 25,
    salary: "$50000",
    [role]: "Ayush"
};
console.log(obj);
console.log(obj.age);
console.log(obj["salary"]);

// 2. Nested objects
const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    }
};
console.log(`longitude: ${user.address.location.lng}`);//this is called deep access.

/**
 * - we can also destructure the object so as to avoid writing this long deep access
 *   statement again and again.
 */
let {lat, lng} = user.address.location;
// now we can simply access lng or lat without using a long syntax.
console.log(`lat: ${lat} \nlng: ${lng}`);

// 3. forIn loop
let user1 = {
    name: "Ayush",
    age: 25,
    email: "joshi@hotmail.com"
};
for(let key in user1){
    console.log(`${key} : ${user1[key]}`);
}
/**
 * - Object.keys(object_name) returns
 *   an array of key_names.
 * - Object.entries(object_name) returns
 *   an array of arrays containing [key, value].
 */
// 4.Making copy if an obj
let copyObj = {...obj};
console.log(copyObj);
/**
 * - copy of an object can also be made using 
 *   Object.assign({}, toBeCopied_objectname)
 *   but it is not mostly used and spread operator
 *   is preferred.
 */
let copyObjAgain = Object.assign({price: "priceless"}, obj); //Here {} is an empty object.
console.log(copyObjAgain);

// 5. Deep Cloning
/**
 * - When we create a nested object, and we try to create
 *   clone of it using the spread operator, it makes the
 *   copy of it but it on top level but the nested property
 *   is not really a copy but a reference of it. So if we
 *   make any changes in the copy object it reflects on
 *   the original object.
 * - JSON.stringify(obj_name) converts object to string.
 * - JSON.parse(obj_string) converts it back to object.
 * - Now to solve this problem we do this:
 */
let user1Copy = JSON.parse(JSON.stringify(user1));

// 6. Optional Chaining and computed properties
/**
 * - This is done to avoid getting error in our code and
 *   handle it beforehand through optional chaining.
 * - Suppose that in future someone changes the name of
 *   a property, now everywhere it is being used will 
 *   throw a problem which can cause massive crash in our
 *   code, to avoid we use optional chaining, which in case
 *   property isn't found returns "undefined" instead of an
 *   error.
 */
console.log(user?.address?.location);
