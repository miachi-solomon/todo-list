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
// import { displayToDOM } from './display-todo';

function countChanger(counter) {
  if (counter.textContent >= 100) {
    counter.textContent = '99+';
  }
}

countChanger(totalTodoCount);

Array.from(todoCounts).map((todoCount) => {
  countChanger(todoCount);
});

// Show the exact amount of todo for each todo-list
todoListArray.forEach((todoObj) => {
  todoObj.name.addEventListener('click', (e) => {
    if (!todoObj.count.textContent) {
      header.textContent = e.target.textContent;
    } else {
      header.textContent =
        e.target.textContent + ` (${todoObj.count.textContent})`;
    }
  });
});

let hasChanged;
let sum = 0;

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

  // Update the todo-count as it changes
  hasChanged = true;
  updateTodoCount();
}

function updateTodoCount() {
  if (hasChanged) {
    todoListArray.forEach((todoObj) => {
      todoObj.count.textContent = todoObj.list.length;
      sum += todoObj.list.length;
    });
    totalTodoCount.textContent = sum;
    document.getElementById('total-tasks').style.visibility = 'visible';
  }
}
