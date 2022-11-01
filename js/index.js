const container = document.querySelector(".container");
const toggle = document.querySelector(".dark-theme");

toggle.addEventListener("click", () =>{
  container.classList.toggle("dark")
})