document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create new task item
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  // Task Text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append to task item
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  // Add to task list
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
}