const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
todoInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTodo();
    }
});

const allBtn = document.getElementById('select');
const todoList = document.getElementById('todoList');
allBtn.addEventListener('change' , filterTodo);
function filterTodo() {
   if (allBtn.value === "all") {
        alert(getAllTask().join("\n"));
    }

    if (allBtn.value === "complete") {
        alert(getCompletedTask().join("\n"));
    }

    if (allBtn.value === "pend") {
        alert(getPendingTask().join("\n"));
    }

}

function getAllTask() {
  const tasks = [];
  const taskElement = todoList.querySelectorAll("li span");
  taskElement.forEach((task) => {
    tasks.push(task.textContent)
  });
  return tasks;
}

function addTodo() {
  const task = getTaskText();

  if (!task) {
    return;
  }
  const todoItem = createTodoItem(task);
  todoList.appendChild(todoItem);
  clearInput();
}

function getCompletedTask() {
    const tasks = [];

    const items = todoList.querySelectorAll("li");

    items.forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        const task = item.querySelector("span");

        if (checkbox.checked) {
            tasks.push(task.textContent);
        }
    });

    return tasks;
}

function getPendingTask() {
    const tasks = [];

    const items = todoList.querySelectorAll("li");

    items.forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        const task = item.querySelector("span");

        if (!checkbox.checked) {
            tasks.push(task.textContent);
        }
    });

    return tasks;
}

function getTaskText() {
  return todoInput.value.trim();
}

function createCheckbox(todoText) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    todoText.classList.toggle("completed");
  });

  return checkbox;
}

function createTodoItem(task) {
  const li = document.createElement('li');
  const span = createTodoText(task);
  const checkbox = createCheckbox(span)
  const updateBtn = createUpdateButton(span);
  const discardBtn = createDiscardButton(li);
 
  li.appendChild(checkbox)
  li.appendChild(span);
  li.appendChild(updateBtn);
  li.appendChild(discardBtn);

  return li;
}

function createTodoText(task) {
  const span = document.createElement("span");
  span.textContent = task;
  span.classList.add("task");

  return span;
}

function createUpdateButton(todoText) {
  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';
  updateBtn.classList.add('update-btn');

  updateBtn.addEventListener('click', () => {
    const newTask = prompt('Update task:', todoText.textContent);

    if (newTask === null) {
      return;
    }

    const updatedTask = newTask.trim();

    if (!updatedTask) {
      return;
    }

    todoText.textContent = updatedTask;
  });

  return updateBtn;
}

function createDiscardButton(todoItem) {
  const discardBtn = document.createElement('button');
  discardBtn.textContent = 'Discard';
  discardBtn.classList.add('discard-btn');

  discardBtn.addEventListener('click', () => {
    todoItem.remove();
  });

  return discardBtn;
}

function clearInput() {
  todoInput.value = '';
}