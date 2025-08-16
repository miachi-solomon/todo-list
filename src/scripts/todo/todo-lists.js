import { saveArrToLocalStorage } from '../DOM/localStorage';

export const allProjects = [];
export const todayTodos = [];
export const upcomingTodos = [];
export const importantTodos = [];

saveArrToLocalStorage('projects', allProjects);
saveArrToLocalStorage('today', todayTodos);
saveArrToLocalStorage('upcoming', upcomingTodos);
saveArrToLocalStorage('important', importantTodos);
