let todoList = [] ;

TodoList();

function TodoList() {

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
    const todoText = todoList[i];
    const {todo, todoDate} = todoText;
   
    const html = `
        <div>${todo}</div> 
        <div>${todoDate}</div>
        <button onclick="
            todoList.splice(${i}, 1)
            TodoList();
        " class="delete-todo">Delete</button>
    `;
    todoListHTML += html;
}

document.querySelector('.todo-list').innerHTML = todoListHTML;
}





function addToList() {
    const input = document.querySelector('.input-element');
    const todo = input.value;

    const dateInput  = document.querySelector('.todo-date-input');
    const todoDate = dateInput.value;

    todoList.push({todo, todoDate});

    input.value = '';
    dateInput.value = '';
   
    TodoList();
}