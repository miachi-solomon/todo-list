import importantLogo from '../../assets/images/Group-5.jpg';

let container = document.querySelector('#container');
let HTMLContent = '';

export function displayToDOM(arr) {
  arr.forEach((todo) => {
    if (todo.priority == 'High') {
      HTMLContent = `
    <div class="js">
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
    <div class="js">
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
    container.insertAdjacentHTML('beforeend', HTMLContent);
  });
}
