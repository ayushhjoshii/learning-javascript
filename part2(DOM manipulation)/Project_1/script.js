let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];
/**
 * - Things that we will be doing in this project:
 *  1. sare user show karna
 *  2. filter karna har baar input karne pe
 *  3. show karna filtered users ko
 */
let cardsContainer = document.querySelector(".cards");
function showUsers(arr){
    arr.forEach(function(user){
        // Create the main card container
        const card = document.createElement('div');
        card.classList.add('card');

        // Create and configure the image element
        const img = document.createElement('img');
        img.src = user.pic;
        img.alt = 'profile_pic';
        img.classList.add('bg-img');
        card.appendChild(img);

        // Create the blurred layer div
        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer');
        card.appendChild(blurredLayer);

        // Create the content container
        const content = document.createElement('div');
        content.classList.add('content');

        // Create the heading element
        const h3 = document.createElement('h3');
        h3.textContent = user.name;
        content.appendChild(h3);

        // Create the paragraph element
        const p = document.createElement('p');
        p.textContent = user.bio;
        content.appendChild(p);

        // Append the content container to the card
        card.appendChild(content);

        // (Optional) Append the card to an existing element in your document, e.g.:
        cardsContainer.appendChild(card);
    });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    let query = inp.value.toLowerCase();
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(query);
    });
    
    cardsContainer.innerHTML = "";
    if(newUsers.length === 0){
        const noMatch = document.createElement('p');
        noMatch.textContent = "No Matches Found!";
        noMatch.classList.add("nullCase");
        cardsContainer.appendChild(noMatch);
    }else{
        showUsers(newUsers);
    }
    
});
