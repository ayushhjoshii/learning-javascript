let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager = {
    users: [],
    init: function(){
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        console.log(this); // Now this is an object
        this.addUser();
        
        
    },
    addUser: function(){
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });
        form.reset();
        this.renderUI();
    },
    renderUI: function(){
        const container = document.querySelector(".users");
        container.innerHTML = "";
        this.users.forEach(function(user){
            // 1. Create the main card container
            const card = document.createElement('div');
            card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center";

            // 2. Create the user profile image
            const avatar = document.createElement('img');
            avatar.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200";
            avatar.src = user.photo;
            avatar.alt = "User Photo";

            // 3. Create the user name heading
            const nameHeading = document.createElement('h2');
            nameHeading.className = "text-2xl font-bold mb-1 text-blue-700";
            nameHeading.textContent = user.username;

            // 4. Create the role description paragraph
            const roleParagraph = document.createElement('p');
            roleParagraph.className = "text-purple-500 mb-2 font-medium";
            roleParagraph.textContent = user.role;

            // 5. Create the bio/interest paragraph
            const bioParagraph = document.createElement('p');
            bioParagraph.className = "text-gray-700 text-center";
            bioParagraph.textContent = user.bio;

            // 6. Assemble the elements by appending them to the main card container
            card.appendChild(avatar);
            card.appendChild(nameHeading);
            card.appendChild(roleParagraph);
            card.appendChild(bioParagraph);

            // Optional: Append the fully assembled card to the DOM (e.g., to the body or a specific container)
            container.appendChild(card);
        });
    },
    removeUser: function(){}
}
userManager.init();