const panels = document.querySelectorAll('.panel');

function removeAllclassesActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeAllclassesActive();
    panel.classList.add('active');
  });
});
