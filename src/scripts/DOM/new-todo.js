import { Todo } from "../todo";
import { dialog } from "./button";
import { displayTodo } from "./display-todo";
// import { importantTodos } from "../todo-lists/important.js";
// import { todayTodos } from "../todo-lists/today.js";
// import { upcomingTodos } from "../todo-lists/upcoming.js";
// import { allProjects } from "../todo-lists/projects.js";
export const newTodo = document.querySelector('#new-todo');

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');

const resetBtn = document.querySelector('#reset');

export function newTodoHandler () {
    const userTodo = new Todo({
        title: title.value,
        date: dueDate.value,
        description: description.value,
        priority: priority.value
    });
    dialog.close();
    resetBtn.click();
}