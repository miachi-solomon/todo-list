export const addBtn = document.querySelector('#add-todo');
export const dialog = document.querySelector('dialog');
export const closeBtn = document.querySelector('#close-dialog');

export function addBtnHandler() {
  dialog.showModal();
}

export function closeBtnHandler() {
  dialog.close();
}
