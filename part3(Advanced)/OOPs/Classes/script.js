// 1. class, constructor, methods
/**
 * - It is the same thing as constructor function but just
 *   a more polished way to write it.
 */

class CreatePencil{
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((e) => {
            if(e.style.color === this.color){
                e.remove();
            }
        });
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}
let p1 = new CreatePencil("Apsara", "apsara", 12, "black");
let p2 = new CreatePencil("Natraj", "natraj", 20, "blue");

// 2. extends, super
/**
 * - If we wants to create a new class that holds all the
 *   properties of another class plus some new properties,
 *   then we use extend keyword. Basically for inheritance.
 */
class User{

    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }
    checkRole(){
        return (`you are : ${this.role}`);
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove(); 
        })
    }
}

let u1 = new User("Ayush", "Khurram Nagar", "ayushhjoshii", "josayu127@gmail.com");
let u2 = new User("Sakshi", "kalyanpur", "sakshiiKhare", "sakshi30@gmail.com" )
let a1 = new Admin("admin1", "India", "iamadmin", "a@a.a");