let date = new Date();
let currentyear = date.getFullYear();
let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;
document.getElementById("year").innerHTML = currentyear;

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}