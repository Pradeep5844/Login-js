  // Login and signup switch
  const loginContainer = document.getElementById('loginContainer');
  const toDoList = document.getElementById('toDoList');
  const formTitle = document.getElementById('formTitle');
  const authButton = document.getElementById('authButton');
  const switchText = document.getElementById('switchText');

  let isLogin = true;

  switchText.addEventListener('click', () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'Login' : 'Create Account';
    authButton.textContent = isLogin ? 'Sign In' : 'Sign Up';
    switchText.textContent = isLogin ? 'Create a new account' : 'Back to Login';
  });

  authButton.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    toDoList.style.display = 'block';
  });

  // To-do list functionality
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const addTaskButton = document.getElementById('addTaskButton');

  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => li.remove());

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = '';
  });