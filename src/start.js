import Eskimo from './eskimo.jpg';
import setHome from './home.js';
import setMenu from './menu.js';
import setContact from './contact.js';

function removeCurrent (){
    document.getElementById("home").classList.remove("current");
    document.getElementById("menu").classList.remove("current");
    document.getElementById("contact").classList.remove("current");
}

export default function initialise() {

const content = document.createElement("div");
content.setAttribute('id','content');

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
    removeCurrent();
    setHome();
    document.getElementById("home").classList.add("current");
});

menu.addEventListener("click",()=> {
    removeCurrent();
    setMenu();
    document.getElementById("menu").classList.add("current");
});

contact.addEventListener("click",()=> {
    removeCurrent();
    setContact();
    document.getElementById("contact").classList.add("current");
});

header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

content.appendChild(header);

const info = document.createElement("div");
info.setAttribute('id','info');

const mainInfo = document.createElement("div");
mainInfo.setAttribute('id','mainInfo');
mainInfo.innerText = "Hello";

const myIcon = new Image();
myIcon.setAttribute('id','eskImg');
myIcon.src = Eskimo;
mainInfo.appendChild(myIcon);

info.appendChild(mainInfo);

content.appendChild(info);

const footer = document.createElement("div");
footer.setAttribute('id','footer');
footer.innerText = "Made with HATE";

content.appendChild(footer);
home.classList.add("current");

return content;
}