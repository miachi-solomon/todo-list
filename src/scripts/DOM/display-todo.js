let container = document.querySelector('#container');

import { importantTodos } from '../todo-lists/important';
import { allProjects } from '../todo-lists/projects';
import { todayTodos } from '../todo-lists/today';
import { upcomingTodos } from '../todo-lists/upcoming';

const projects = document.querySelector('#projects');
const today = document.querySelector('#today');
const upcoming = document.querySelector('#upcoming');
const important = document.querySelector('#important');

const todoListArray = [
  { name: projects, associate: allProjects },
  { name: today, associate: todayTodos },
  { name: upcoming, associate: upcomingTodos },
  { name: important, associate: importantTodos },
];

let HTMLContent = '';

function displayToDOM(arr) {
  arr.forEach((todo) => {
    HTMLContent = `
    <div class="js">
        <div class="js-contents">
          <input type="checkbox" class="js-checkbox" />
          <div class="js-big-box">
            <div class="js-text">
              <p class="js-title">${todo.title}</p>
              <p class="js-description">${todo.description}</p>
            </div>
            <p class="js-completed">Not Completed</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += HTMLContent;
  });
}

todoListArray.forEach((todoList) => {
  todoList.name.addEventListener('click', (e) => {
    container.innerHTML = '';
    container.innerHTML += `<h1>${e.target.textContent}</h1>`;
    displayToDOM(todoList.associate);
  });
});
