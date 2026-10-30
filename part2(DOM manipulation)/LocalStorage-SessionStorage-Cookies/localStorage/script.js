/**
 * - localStorage -> To store data inside the browser such
 *   that the data doesn't get deleted even after browser
 *   is closed.
 * - sessionStorage -> stores the data temporrily, meaning
 *   that the data, goes away as soon as the tab is closed.
 * - cookies -> it also stores the data inside a property of 
 *   the browser known as "cookie". This concept is only for 
 *   less or light amount of data. 
 */
// 1. localStorage
/**
 * - Means we are talking to the database of browser.
 * - We have to study 4 things:
 *      1. store - setItem
 *      2. data fetch - getItem
 *      3. remove - removeItem
 *      4. update - just use setItem
 * - There is also an option of ".clear()" to clear all 
 *   the existing stored data.
 * - We cannot store anything other than a string in the
 *   localStorage, whether it be an array or an object, all
 *   of that gets converted to the string.
 * - So we use JSON.stringify(), to convert anything to string 
 *   before actually using it.
 * - Then we can use JSON.parse() to get the actual form
 *   factor of what we stored as a string.
 */
localStorage.setItem("name", "ayush");//("kis_naam_se?", "jo_store_karna_hai")
let val = localStorage.getItem("name");
localStorage.setItem("friends", JSON.stringify(["akarsh", "mrityunjay", "ayush", "sakshi"])); 
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);

// 2. sessionStorage
/**
 * - The data here is only temporarily stored. Although the data still
 *   remains after the page is refreshed, but as soon as the tab is
 *   closed and reopened, the data disappears.
 * - It has all the same features of set, get, clear, remove as the 
 *   localStorage.
 */

// 3. cookies
/**
 * - cookies is used only to store lesser amount of data in
 *   browser, but it is permanent.
 * - cookies can only store upto approx 4kb, whereas localStorage
 *   can store data upto 5Mb.
 * - Whatever we store in the cookies will automatically go
 *   to the server at the time of reload.
 * - We can create a cookie using, document.cookie = "key=value"
 */
document.cookie = "password=jmanc";
document.cookie = "age=22";

 
