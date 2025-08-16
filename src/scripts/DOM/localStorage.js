export function saveObjToLocalStorage(obj) {
  localStorage.setItem(obj.id, JSON.stringify(obj));
}

export function saveArrToLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
