import { Todo } from '../todo/todo';
import { dialog } from './button';
import { assignTodoList } from './assignTodo';
import { header, projects } from './assignTodoVar';
import { displayToDOM } from './display-todo';
import { getFromLocalStorage } from './localStorage';

export const newTodo = document.querySelector('#new-todo');

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const resetBtn = document.querySelector('#reset');

export function newTodoHandler() {
  const userTodo = new Todo({
    title: title.value,
    date: dueDate.value,
    description: description.value,
    priority: priority.value,
  });
  assignTodoList(userTodo);
  header.textContent = projects.textContent;
  displayToDOM(getFromLocalStorage('projects'));
  dialog.close();
  resetBtn.click();
}
