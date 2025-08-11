import { Todo } from '../todo';
import { dialog } from './button';
import { importantTodos } from '../todo-lists/important.js';
import { todayTodos } from '../todo-lists/today.js';
import { upcomingTodos } from '../todo-lists/upcoming.js';
import { allProjects } from '../todo-lists/projects.js';
import { isToday } from 'date-fns';
export const newTodo = document.querySelector('#new-todo');

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');

const resetBtn = document.querySelector('#reset');

function assignTodoList(userTodo) {
  allProjects.push(userTodo);
  userTodo.priority == 'High' ? importantTodos.push(userTodo) : 0;
  isToday(userTodo.date) == true
    ? todayTodos.push(userTodo)
    : upcomingTodos.push(userTodo);
}

export function newTodoHandler() {
  const userTodo = new Todo({
    title: title.value,
    date: dueDate.value,
    description: description.value,
    priority: priority.value,
  });
  assignTodoList(userTodo);
  dialog.close();
  resetBtn.click();
}
