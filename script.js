// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Loads tasks from Local Storage and adds them to the DOM
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save to avoid duplicates
    }

    /**
     * Saves an array of tasks to Local Storage
     * @param {string[]} tasks - Array of task strings
     */
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Adds a new task to the list and optionally saves it to Local Storage
     * @param {string} taskText - The text of the task to add
     * @param {boolean} save - Whether to save the task to Local Storage (default: true)
     */
    function addTask(taskText, save = true) {
        // Create the task list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        classList.add('remove-btn');

        // Add remove functionality
        removeBtn.onclick = () => {
            taskList.removeChild(li);

            // Remove from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            saveTasks(updatedTasks);
        };

        // Append button and task to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            saveTasks(storedTasks);
        }
    }

    /**
     * Handle adding task from input field
     */
    function handleAddTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        addTask(taskText); // Defaults to save = true
        taskInput.value = '';
    }

    // Add event listener for Add Task button
    addButton.addEventListener('click', handleAddTask);

    // Add event listener for "Enter" key
    taskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    });

    // Load saved tasks when page is ready
    loadTasks();
});
