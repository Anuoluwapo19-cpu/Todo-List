# Todo List

A simple, beginner-friendly Todo List application built with plain HTML,
CSS and JavaScript (no frameworks or build tools).

It allows users to add tasks, mark tasks as completed, update tasks,
delete tasks, and filter tasks by their status.

## How to run it

No installation is needed. Just open `index.html` in your browser
(double-click it, or use a tool like the VS Code "Live Server" extension
for the best experience).

## Files

- `index.html` — Contains the structure of the Todo List, including the
  input field, task list, and filter options.
- `style.css` — Contains the styling for the Todo List, including the
  layout, colors, buttons, task items, and completed-task appearance.
- `index.js` — Contains the JavaScript functionality for adding,
  updating, deleting, completing, and filtering tasks.

## Features

- Add a new task by typing it into the input field and pressing Enter.
- Mark a task as completed using the checkbox.
- Update an existing task using the Update button.
- Delete a task using the Discard button.
- Filter tasks by:
  - All
  - Completed
  - Pending
- Prevents empty tasks from being added.
- Automatically clears the input after adding a task.

## How it works

### Adding a task

Type a task into the input field and press the `Enter` key.

JavaScript reads the text from the input, creates a new task item,
and adds it to the Todo List.

### Completing a task

Each task has a checkbox.

When the checkbox is selected, the task receives the `completed` CSS
class. This gives the task a line-through effect and changes its color.

### Updating a task

Clicking the `Update` button opens a prompt where you can enter a new
task name.

The existing task is then replaced with the updated text.

### Deleting a task

Clicking the `Discard` button removes the task from the Todo List.

### Filtering tasks

The select menu allows tasks to be filtered based on their status:

- `All` — Shows every task.
- `Completed` — Shows only completed tasks.
- `Pending` — Shows only tasks that have not been completed.

## Folder structure

```text
todo-list/
├── index.html
├── style.css
└── index.js