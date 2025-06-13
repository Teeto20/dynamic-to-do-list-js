document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText == "") {
      alert("Please enter a task.");
      return;
    } else {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove";
      deleteButton.className = "remove-btn";
      deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
      };
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  };
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
