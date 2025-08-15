import {
  allProjects,
  todayTodos,
  upcomingTodos,
  importantTodos,
} from '../todo/todo-lists';
import { isToday } from 'date-fns';
import {
  header,
  todoCounts,
  totalTodoCount,
  todoListArray,
} from './assignTodoVar';
import { displayToDOM } from './display-todo';

function countChanger(counter) {
  if (counter.textContent >= 100) {
    counter.textContent = '99+';
  }
}

function displayTodoListCount(e) {
  header.textContent = e.target.textContent;
}

export function assignTodoList(userTodo) {
  allProjects.push(userTodo);

  if (userTodo.priority == 'High') {
    importantTodos.push(userTodo);
  }
  if (isToday(userTodo.date) == true) {
    todayTodos.push(userTodo);
  } else {
    upcomingTodos.push(userTodo);
  }

  updateTodoCount();
}

export function updateTodoCount() {
  let todoObjCount = 0;

  todoListArray.forEach((todoObj) => {
    todoObj.count.textContent = todoObj.list.length;
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
    displayToDOM(todoObj.list);
    displayTodoListCount(e);
  });
});
