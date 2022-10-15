import Todo from './Todo.js';

const $todoList = document.querySelector('ul');

let todos = [];

window.Todo = Todo; // for use in the HTML page

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('todos'))
        todos = ((JSON.parse(localStorage.getItem('todos'))));

    todos.forEach(item => {
        addOnPage(item);
    });
})

/** @param {HTMLLIElement} item  - li todo element */
window.doneTodo = function(item) {
    item.classList.toggle('done');
    todos.map(element => {
        if (element.id == item.id)
            element.done = true;
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}

/** @param {HTMLLIElement} item - li item */
window.deleteTodo = function(item) {
    item.remove();
    todos.splice(todos.findIndex(element => element.id == item.id), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

/** @param {Todo} item - Todo item - text from input */
window.addTodo = function(item) {
    addOnPage(item);
    todos.push(item);
    localStorage.setItem('todos', JSON.stringify(todos));
}

window.addOnPage = function(item) {
    let li = document.createElement('li');
    li.classList.add('todo-item');
    li.id = item.id;

    if (item.done)
        li.classList.add('done');

    let p = document.createElement('p');
    p.innerText = item.text;

    let controlDiv = document.createElement('div');
    controlDiv.classList.add('controls');

    let doneSpan = document.createElement('span');
    doneSpan.setAttribute('onclick', 'doneTodo(this.parentNode.parentNode)')

    let deleteSpan = document.createElement('span');
    deleteSpan.setAttribute('onclick', 'deleteTodo(this.parentNode.parentNode)')

    let doneI = document.createElement('i');
    doneI.classList.add('fas', 'fa-check');

    let deleteI = document.createElement('i');
    deleteI.classList.add('fas', 'fa-xmark');

    doneSpan.appendChild(doneI);
    deleteSpan.appendChild(deleteI);

    controlDiv.appendChild(doneSpan);
    controlDiv.appendChild(deleteSpan);

    li.appendChild(p);
    li.appendChild(controlDiv);

    $todoList.appendChild(li);
}