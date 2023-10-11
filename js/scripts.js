let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");
let removeElem = $.querySelector('.delete')

function addNewTodo(newTodoValue) {
//   let newTodoLi = $.createElement("li");
//   newTodoLi.className =
//     "list-group-item d-flex justify-content-between align-items-center";

//   let newTodoTitleSpan = $.createElement("span");
//   newTodoTitleSpan.innerHTML = newTodoValue;

//   let newTodoTrash = $.createElement("i");
//   newTodoTrash.className = "fa fa-trash-o delete";

//   newTodoTrash.addEventListener("click", function (event) {
//     event.target.parentElement.remove();
//   });

//   newTodoLi.append(newTodoTitleSpan, newTodoTrash);

//   todoUlElem.append(newTodoLi);

  todoUlElem.insertAdjacentHTML('beforeend' , `
  
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${newTodoValue}</span>
      <i class="fa fa-trash-o delete"></i>
  </li>
  
`)

//    console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});


inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addNewTodo(newTodoValue);
    }
  }
});

removeElem.addEventListener("click" , function(){
       todoUlElem.remove()
  })