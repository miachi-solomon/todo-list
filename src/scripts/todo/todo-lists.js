import { saveArrToLocalStorage } from '../DOM/localStorage';

const allProjects = [];
const todayTodos = [];
const upcomingTodos = [];
const importantTodos = [];

saveArrToLocalStorage('projects', allProjects);
saveArrToLocalStorage('today', todayTodos);
saveArrToLocalStorage('upcoming', upcomingTodos);
saveArrToLocalStorage('important', importantTodos);
