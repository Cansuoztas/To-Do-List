const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const todo = document.querySelector("#todo");
const remove = `<button>Remove</button>`;
const altdiv = document.querySelector(".altdiv");
const icon = document.getElementById("icon");

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let lists = localStorage.getItem("lists");
localStorage.setItem("lists", JSON.stringify(todo));

btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Birşey Giriniz");
  } else {
    todo.innerHTML += `<div class="altdiv" id="altdiv">
    <i  id="icon" class="fa-regular fa-square-full checked icon"></i>
    <p class="par">${input.value}</p>
    <div class="günler">${day}.${month}.${year}  
    <button class="remove" style=" font-weight: 600;">REMOVE</button></div></div>`;
  }
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

todo.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("remove") &&
    e.target.parentElement.parentElement.classList.contains("checked")
  ) {
    e.target.parentElement.parentElement.remove();
  } else {
    alert("Görevi Tamamlamadan Silemezsiniz");
  }
});
