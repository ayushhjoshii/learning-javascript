// 1. Synchronous vs Asynchronous
/**
 * - sync code executes line by line in a strict sequence,
 *   blocking the program from moving forward until the
 *   current line finishes.
 * - Async code executes later, allowing the program to
 *   keep running other tasks while waiting for a background
 *   operations (like fetching data or a timer) to finish.
 */
function kuchhDerBaadChalunga(fnc){
    setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
kuchhDerBaadChalunga(function(){
    console.log("hey handsome");
});
/**
 * - If we are passing a function in another function as
 *   a parameter, then the function inside the parameter
 *   is called as a callback.
 */