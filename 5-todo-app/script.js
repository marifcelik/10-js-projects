import Todo from './Todo.js';

const $todoList = document.querySelector('ul');

let deneme = new Todo('deneme')

let todos = [deneme];

/** @param {HTMLDivElement} item */
window.doneTodo = function(item) {
    item.classList.toggle('done')
}

/** @param {HTMLDivElement} item */
window.deleteTodo = function(item) {
    item.remove();
}

/** @param {string} text - Todo text from input */
window.addTodo = function(text) {
    let li = document.createElement('li');
    li.classList.add('todo-li');

    let div = document.createElement('div');
    div.classList.add('todo-item');

    let p = document.createElement('p');
    p.innerText = text;

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

    div.appendChild(p);
    div.appendChild(controlDiv);

    li.appendChild(div);
    li.id = new Date().getTime();

    $todoList.appendChild(li);

    todos.push({ id: li.id, text, done: false });
}