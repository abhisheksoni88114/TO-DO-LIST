const addForm = document.addfrm;
const text = addForm.add;
const ul = document.querySelector(".todos");
const del = document.querySelectorAll(".delete");
const addItem = (item) => {
  let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
  ul.innerHTML += str;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "I") e.target.parentElement.remove();
});

let refreshTodo = (text) => {
  let listItems = ul.children;
  for (let item of listItems) {
    if (item.innerText.toLowerCase().indexOf(text) == -1) {
      item.classList.add("filtered");
    } else item.classList.remove("filtered");
  }
};
let search = document.querySelector(".search input");
search.addEventListener("keyup", (e) => {
  let text = search.value;
  refreshTodo(text.toLowerCase().trim());
});
