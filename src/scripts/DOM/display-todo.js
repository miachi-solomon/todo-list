import importantLogo from '../../assets/images/Group-5.jpg';
import { todoListArray } from './assignTodoVar';
import { updateTodoCount } from './assignTodo';

let container = document.querySelector('#container');
let HTMLContent = '';

function createHTMl(todo) {
  if (todo.priority == 'High') {
    HTMLContent = `
    <div class="js" data-id=${todo.id}>
        <div class="js-contents">
          <button class="js-checkbox">Delete</button>
          <div class="js-big-box">
          <div class="flex-container">
            <img class="logo" src=${importantLogo} alt="important-logo"/>
            <div class="js-text margin-js-text">
              <p class="js-title">${todo.title}</p>
              <p class="js-description">${todo.description}</p>
            </div>
          </div>
            <div class="js-completed"><p>Not Completed</p></div>
          </div>
        </div>
      </div>
    `;
  } else {
    HTMLContent = `
    <div class="js" data-id=${todo.id}>
        <div class="js-contents">
          <button class="js-checkbox">Delete</button>
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
  }
  return HTMLContent;
}

function removeFromArray(array, object) {
  const i = array.indexOf(object);
  array.splice(i, 1);
}

export function displayToDOM(array) {
  container.innerHTML = '';

  array.forEach((obj) => {
    container.insertAdjacentHTML('beforeend', createHTMl(obj));

    const objElement = document.querySelector(`[data-id="${obj.id}"]`);
    const deleteBtn = objElement.querySelector('button');

    deleteBtn.addEventListener('click', () => {
      objElement.remove();

      todoListArray.forEach((todoListObj) => {
        todoListObj.list.forEach((todo) => {
          if (todo == obj) {
            removeFromArray(todoListObj.list, todo);
            updateTodoCount();
          }
        });
      });
    });
  });
}
