import { getFromLocalStorage } from './localStorage.js';

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
  {
    name: projects,
    list: getFromLocalStorage('projects'),
    count: projectsCount,
    store: 'projects',
  },
  {
    name: today,
    list: getFromLocalStorage('today'),
    count: todayCount,
    store: 'today',
  },
  {
    name: upcoming,
    list: getFromLocalStorage('upcoming'),
    count: upcomingCount,
    store: 'upcoming',
  },
  {
    name: important,
    list: getFromLocalStorage('important'),
    count: importantCount,
    store: 'important',
  },
];

export { header, projects, todoCounts, totalTodoCount, todoListArray };
