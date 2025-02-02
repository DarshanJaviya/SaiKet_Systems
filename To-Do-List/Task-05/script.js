const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  } else {
    alert("Task cannot be empty!");
  }
});

function addTask(taskText) {
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  listItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="todo-buttons">
      <button class="completed-btn">Done</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  const completedButton = listItem.querySelector(".completed-btn");
  const editButton = listItem.querySelector(".edit-btn");
  const deleteButton = listItem.querySelector(".delete-btn");

  completedButton.addEventListener("click", () => markTaskCompleted(listItem));
  editButton.addEventListener("click", () => editTask(listItem));
  deleteButton.addEventListener("click", () => deleteTask(listItem));

  todoList.appendChild(listItem);
}

function markTaskCompleted(listItem) {
  todoList.removeChild(listItem);
  alert("Task marked as completed!");
}

function editTask(listItem) {
  const taskText = listItem.querySelector(".task-text");
  const newTask = prompt("Edit Task:", taskText.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    taskText.textContent = newTask.trim();
  }
}

function deleteTask(listItem) {
  todoList.removeChild(listItem);
}
