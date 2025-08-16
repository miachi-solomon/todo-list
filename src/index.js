import './styles.css';
import {
  addBtn,
  addBtnHandler,
  closeBtn,
  closeBtnHandler,
} from './scripts/DOM/button';
import { newTodo, newTodoHandler } from './scripts/DOM/new-todo';
import './scripts/DOM/display-todo';
import './scripts/DOM/assignTodo';
import { displayToDOM } from './scripts/DOM/display-todo';
import { updateTodoCount } from './scripts/DOM/assignTodo';
import { getFromLocalStorage } from './scripts/DOM/localStorage';

addBtn.addEventListener('mouseover', () => (addBtn.textContent = '+ Add'));

addBtn.addEventListener('mouseout', () => (addBtn.textContent = '+'));

addBtn.addEventListener('click', addBtnHandler);

closeBtn.addEventListener('click', closeBtnHandler);

newTodo.addEventListener('click', newTodoHandler);

document.querySelector('#current-header').textContent = 'Projects';
displayToDOM(getFromLocalStorage('projects'));
updateTodoCount();
