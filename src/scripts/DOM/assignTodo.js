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

let hasChanged;
let sum = 0;

function countChanger(counter) {
  if (counter.textContent >= 100) {
    counter.textContent = '99+';
  }
}

function displayTodoListCount(todoObj, e) {
  if (todoObj.count.textContent <= 0) {
    header.textContent = e.target.textContent;
  } else {
    header.textContent =
      e.target.textContent + ` (${todoObj.count.textContent})`;
  }
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

  hasChanged = true;
  updateTodoCount(hasChanged);
}

export function updateTodoCount(variable) {
  if (variable) {
    todoListArray.forEach((todoObj) => {
      todoObj.count.textContent = todoObj.list.length;
      if (todoObj.count.textContent > 0) {
        sum++;
      }
    });
    totalTodoCount.textContent = sum;
    totalTodoCount.style.visibility = 'visible';
  }
}

countChanger(totalTodoCount);

Array.from(todoCounts).map((todoCount) => countChanger(todoCount));

// Show the exact amount of todo for each todo-list and display the todo
todoListArray.forEach((todoObj) => {
  todoObj.name.addEventListener('click', (e) => {
    displayToDOM(todoObj.list);
    displayTodoListCount(todoObj, e);
  });
});
