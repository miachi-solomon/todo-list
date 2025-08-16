import { isToday } from 'date-fns';
import {
  header,
  todoCounts,
  totalTodoCount,
  todoListArray,
} from './assignTodoVar';
import { displayToDOM } from './display-todo';
import { getFromLocalStorage, saveArrToLocalStorage } from './localStorage';

function countChanger(counter) {
  if (counter.textContent >= 100) {
    counter.textContent = '99+';
  }
}

function displayTodoListHeader(e) {
  header.textContent = e.target.textContent;
}

export function assignTodoList(userTodo) {
  let a = getFromLocalStorage('projects');
  let b = getFromLocalStorage('important');
  let c = getFromLocalStorage('today');
  let d = getFromLocalStorage('upcoming');
  a.push(userTodo);
  saveArrToLocalStorage('projects', a);

  if (userTodo.priority == 'High') {
    b.push(userTodo);
    saveArrToLocalStorage('important', b);
  }
  if (isToday(userTodo.date) == true) {
    c.push(userTodo);
    saveArrToLocalStorage('today', c);
  } else {
    d.push(userTodo);
    saveArrToLocalStorage('upcoming', d);
  }
  updateTodoCount();
}

export function updateTodoCount() {
  let todoObjCount = 0;
  todoListArray.forEach((todoObj) => {
    todoObj.count.textContent = getFromLocalStorage(todoObj.store).length;
    let count = parseInt(todoObj.count.textContent);
    todoObjCount += count;
  });
  totalTodoCount.textContent = todoObjCount;
  totalTodoCount.style.visibility = 'visible';
}

// If the count is 100, change the count to 99+
countChanger(totalTodoCount);
Array.from(todoCounts).map((todoCount) => countChanger(todoCount));
// Show the exact amount of todo for each todo-list and display the todo
todoListArray.forEach((todoObj) => {
  todoObj.name.addEventListener('click', (e) => {
    displayToDOM(getFromLocalStorage(todoObj.store));
    displayTodoListHeader(e);
  });
});
