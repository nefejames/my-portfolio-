const burger = document.getElementById("burger");
const closeNav = document.getElementById("close-nav");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.style.transform = "translateY(0)";
});

closeNav.addEventListener("click", () => {
  nav.style.transform = "translateY(-100%)";
});
