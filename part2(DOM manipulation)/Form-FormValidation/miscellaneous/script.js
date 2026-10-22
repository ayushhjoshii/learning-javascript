// 1. Form Validation
/**
 * - Here we'll learn to tell when the input information
 *   by the user is actually valid or not.
 */
let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }else{
        document.querySelector("#hide").style.display = "none";
    }
});

// 2. Inline validation
/**
 * - Checking if the information a user enters into a form
 *   is correct instantly, while they are still filling it
 *   out, rather than waiting until they click the "Submit"
 *   button.
 * - This can be implemented using html/js/....etc. at multiple
 *   levels, so that if one level get's bypassed the other can
 *   be flagged. (eg.:- "required" in html)
 */

// 3. Pattern attribute
/**
 * - Used to set, what kind of input values can be accepted
 *   inside an input box. for eg.:- in html there is an
 *   attribute called pattern="[a-z]{3,8}" (this means that
 *   all characters from a to z are allowed an there must be
 *   between 3 to 8 characters).
 */

// 4. RegEx
/**
 * - Short form form Regular Expression.
 * - It is a sequence of special charcters that defines a search
 *   or formatting pattern. think og it as a highly specific
 *   template for text.
 * - But this RegEx can be found on the internet and on AI and
 *   doesn't needs to be written manually.
 */
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let ans = regex.test("a@a.a");
console.log(ans);
