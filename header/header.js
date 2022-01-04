//Variabler
const menuIcon = document.querySelector(".menuIcon");
const menuIcon2 = document.querySelector(".menuIcon2");
const slidermenu = document.querySelector(".slidermenu");




// Husk at skrive kommentar//
menuIcon.addEventListener("click", () => {
    console.log("hambuger")
    slidermenu.classList.toggle("hidded");
  menuIcon.classList.toggle("gone");
  menuIcon2.classList.toggle("gone");

});


menuIcon2.addEventListener("click", () => {
    console.log("kryds");
    slidermenu.classList.toggle("hidded");
    menuIcon.classList.toggle("gone");
    menuIcon2.classList.toggle("gone");

});


