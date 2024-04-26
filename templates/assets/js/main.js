// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
var flag = localStorage.getItem('savedNumber');

list.forEach((item) => item.addEventListener("click", activeLink));
// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

console.log(flag);
if (flag == "0") {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}
toggle.onclick = function () {
  main.style.transition = '0.5s'
  navigation.style.transition = '0.5s'

  if (flag == "0")
    flag = "1";
  else
    flag = "0";
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  localStorage.setItem('savedNumber', flag);
  setTimeout(function () {
    main.style.transition = '0.0s'
    navigation.style.transition = '0.0s'
  }, 500);
}



