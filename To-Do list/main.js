document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button style="background-color: white;" onclick="this.parentElement.remove()">✅</button>
        `;

        taskList.appendChild(li);
        newTaskInput.value = '';
    }
    addButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});