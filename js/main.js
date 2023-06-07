const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask);

function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;
    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${taskText}</span>
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
    if (e.target.dataset.action === 'delete') {
        const parentNode = e.target.closest('.list-group-item');
        parentNode.remove();
    }
    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
};