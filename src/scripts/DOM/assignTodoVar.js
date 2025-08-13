import {
  allProjects,
  todayTodos,
  upcomingTodos,
  importantTodos,
} from '../todo/todo-lists.js';

let header = document.querySelector('#current-header');
let projectsCount = document.querySelector('#project-count');
let todayCount = document.querySelector('#today-count');
let upcomingCount = document.querySelector('#upcoming-count');
let importantCount = document.querySelector('#important-count');

const projects = document.querySelector('#projects');
const today = document.querySelector('#today');
const upcoming = document.querySelector('#upcoming');
const important = document.querySelector('#important');
const todoCounts = document.querySelectorAll('.todo-count');
const totalTodoCount = document.querySelector('#total-tasks');

const todoListArray = [
  { name: projects, list: allProjects, count: projectsCount },
  { name: today, list: todayTodos, count: todayCount },
  { name: upcoming, list: upcomingTodos, count: upcomingCount },
  { name: important, list: importantTodos, count: importantCount },
];

export { header, todoCounts, totalTodoCount, todoListArray };
