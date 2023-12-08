const button = document.getElementById("sub");
const submenu = document.querySelector(".submenu");

const toggleClass = () => {
  submenu.classList.toggle("toggle");
};
button.addEventListener("click", toggleClass);
