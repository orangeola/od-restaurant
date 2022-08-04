import Eskimo from './eskimo.jpg';

export default function setHome() {
    document.getElementById("mainInfo").innerHTML = "";

    const mainInfo = document.getElementById("mainInfo");
    mainInfo.innerText = "Hello";

    const myIcon = new Image();
    myIcon.setAttribute('id','eskImg');
    myIcon.src = Eskimo;
    mainInfo.appendChild(myIcon);
}