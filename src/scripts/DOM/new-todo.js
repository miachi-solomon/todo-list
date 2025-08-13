import { Todo } from '../todo/todo';
import { dialog } from './button';
import { assignTodoList } from './assignTodo';
import { header, todoListArray } from './assignTodoVar';
import { displayToDOM } from './display-todo';

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
  // console.log(header.textContent);
  todoListArray.forEach((todoObj) => {
    if (todoObj.name.textContent == header.textContent) {
      displayToDOM(todoObj.list);
    }
  });
  dialog.close();
  resetBtn.click();
}
