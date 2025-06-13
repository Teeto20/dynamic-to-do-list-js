document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask(taskText, save = true) {
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const removeButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "remove-btn";
    classList.add("remove-btn");
    deleteButton.onclick = () => {
      taskList.removeChild(taskItem);
      tasks = tasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }
    loadTasks();
});
