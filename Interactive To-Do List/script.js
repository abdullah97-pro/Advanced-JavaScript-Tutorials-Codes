const addTask = document.querySelector('#addTask');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

addTask.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return alert('Please Enter Task');

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// Event Delegation for delete & toggle complete
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }

//   if (e.target.classList.contains("task-text")) {
//     e.target.classList.toggle("completed");
//   }

    document.querySelectorAll('ul li span.task-text').forEach(span => {
        span.classList.toggle('completed');
    });
});

