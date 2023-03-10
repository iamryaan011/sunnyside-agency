const menu = document.getElementById("hamburguer-menu");
const ul = document.getElementById("ul");

menu.addEventListener("click", () => {
  ul.classList.toggle("active");
});
