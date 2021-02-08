let navBtn = document.getElementById("menu");
let fullNav = document.querySelector(".full_nav_two");
let closeBtn = document.getElementById("close");

navBtn.addEventListener("click", function() {
  fullNav.style.transform = "translateX(0%)";
});

closeBtn.addEventListener("click", function() {
  fullNav.style.transform = "translateX(100%)";
});
