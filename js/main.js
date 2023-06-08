const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

let tasks = [];

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
    };

    tasks.push(newTask);

    const cssClass = newTask.done ? 'task-title task-title--done' : 'task-title';

    const taskHTML = `<li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
    <span class="${cssClass}">${newTask.text}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li>`;
    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    taskInput.value = '';
    taskInput.focus();

    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
};

function deleteTask(e) {
    if (e.target.dataset.action !== 'delete') return;

    const parentNode = e.target.closest('.list-group-item');

    const id = Number(parentNode.id);
    // const index = tasks.findIndex((task) => task.id === id);
    tasks = tasks.filter((task) => task.id !== id);

    tasks.splice(index, 1)

    parentNode.remove();

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
};

function doneTask(e) {
    if (e.target.dataset.action !== 'done') return;

    const parentNode = e.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
};