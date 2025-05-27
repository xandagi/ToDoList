// Declare variables using const and let   const is used because these variables will not be reassigned.
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Initialize todos array using const   todos is an empty array to keep the list of tasks.
const todos = [];

// Arrow function to add a new todo    If not empty, it pushes the new task to the todos array.
const addTodo = () => {
    const todoText = todoInput.value.trim();
    
    if (todoText) {
        // Add new todo to the array
        todos.push(todoText);
        
        // Clear the input field 12f
        todoInput.value = '';
        
        // Update the displayed list
        displayTodos();
    }
};

// Arrow function to remove a todo     Removes one item from todos using its index.
const removeTodo = (index) => {
    // Remove the todo from the array
    todos.splice(index, 1);
    
    // Update the displayed list
    displayTodos();
};

// Arrow function to display todos using template literals
const displayTodos = () => {
    // Clear the current list
    todoList.innerHTML = '';
    
    // Add each todo to the list   Clears the old content of the list (todoList.innerHTML = ''). 
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="removeTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
};

// Event listener using arrow function
addBtn.addEventListener('click', addTodo);

// Allow adding todos with Enter key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});