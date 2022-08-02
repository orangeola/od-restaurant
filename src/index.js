import './style.css';

console.log("tet");

//create header with buttons
const header = document.createElement("div");
header.setAttribute('id','header');
const home = document.createElement("div");
home.setAttribute('id','home');
home.innerText = "Home";
const menu = document.createElement("div");
menu.setAttribute('id','menu');
menu.innerText = "Menu";
const contact = document.createElement("div");
contact.setAttribute('id','contact');
contact.innerText = "Contact";

home.addEventListener("click",()=> {
    console.log("home");
});

menu.addEventListener("click",()=> {
    console.log("menu");
});

contact.addEventListener("click",()=> {
    console.log("contact");
});

header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

document.getElementById("content").appendChild(header);

const info = document.createElement("div");
info.setAttribute('id','info');
info.innerText = "Hello";

document.getElementById("content").appendChild(info);

const footer = document.createElement("div");
footer.setAttribute('id','footer');
footer.innerText = "Made with HATE";

document.getElementById("content").appendChild(footer);