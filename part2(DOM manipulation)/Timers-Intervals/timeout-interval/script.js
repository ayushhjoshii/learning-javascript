// 1. setTimeout
/**
 * - we use this if we don't want something to happen
 *   instantly, but after some set time.
 * - It itself if a function and takes two input as a
 *   function and time in ms.
 * - Similarly there is also "setInterval" where it keep
 *   on doing a task in an interval of fixed time.
 * - There are also things like clearTimeout() and clearInterval( )
 *   which is used to clear any setInterval or clearTimeout.
 * - It takes in input a variable in which the setInterval
 *   setTimeout is set.
 */
setTimeout(function(){
    console.log("hello");
}, 5000);

let count = 10;
let interval = setInterval(function(){
    if(count >= 1) {
        count--;
        console.log(count);
    }else clearInterval(interval);
}, 1000);
