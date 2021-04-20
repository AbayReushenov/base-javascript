/* eslint-disable no-useless-return */
const addForm = document.querySelector('.add');

const ulTodos = document.querySelector('.todos');

const searchInput = document.querySelector('.search input'); // class search , then input

const generateTemlate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
  `;
  ulTodos.innerHTML += html;
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemlate(todo);
  }
  addForm.reset();
});

// delete todos
ulTodos.addEventListener('click', (event) => {
  if (!event.target.classList.contains('delete')) return;
  event.target.parentElement.remove();
});

// search & filter
function filterTodo(target) {
  Array.from(ulTodos.children)
    .filter((item) => !item.textContent.toLowerCase().includes(target))
    .forEach((item) => {
      item.classList.add('filtered');
    });

  Array.from(ulTodos.children)
    .filter((item) => item.textContent.toLowerCase().includes(target))
    .forEach((item) => {
      item.classList.remove('filtered');
    });
}

searchInput.addEventListener('keyup', () => {
  const target = searchInput.value.trim().toLowerCase();
  filterTodo(target);
});
