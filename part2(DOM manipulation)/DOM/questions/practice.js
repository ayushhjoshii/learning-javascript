// 1. select all elements from <li> elements and print their text using loop.
let lis = document.querySelectorAll("li");
lis.forEach(val => console.log(val.textContent));

console.log("\nusing another syntax: ");
for(i = 0; i < lis.length; i++){
    console.log(lis[i].textContent);
}

// 2. Add a title attribute to div dynamically
let div = document.querySelector("div");
div.setAttribute("title", "some unimportant info");

// 3. highlight every even element in the list
let li = document.querySelectorAll("ol li:nth-child(2n)");
for(i = 0; i < li.length; i++){
    li[i].classList.add("highlight");
}

// 4. set the font style of all elements of a paragraph to 18px using .style
let p = document.querySelectorAll("p");
p.forEach(el => {
    el.style.fontSize = "18px";
});