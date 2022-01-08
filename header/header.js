//Variabler
const header = document.querySelector("header")
const menuIcon = document.querySelector(".menuIcon");
const menuIcon2 = document.querySelector(".menuIcon2");
const slidermenu = document.querySelector(".slidermenu");
const body = document.querySelector("body")



// Husk at skrive kommentar//
menuIcon.addEventListener("click", () => {
    console.log("hambuger")
    slidermenu.classList.toggle("skjult");
    slidermenu.classList.toggle("tilsyne");
  menuIcon.classList.toggle("gone");
  menuIcon2.classList.toggle("gone");
  body.classList.toggle("stopScroll");

});


menuIcon2.addEventListener("click", () => {
    console.log("kryds");
    slidermenu.classList.toggle("skjult");
    slidermenu.classList.toggle("tilsyne");
    menuIcon.classList.toggle("gone");
    menuIcon2.classList.toggle("gone");
    body.classList.toggle("stopScroll");
});


