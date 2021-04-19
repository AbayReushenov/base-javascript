/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
const correctAnswer = ['A', 'B', 'A', 'B', 'A'];
const formthis = document.querySelector('form');
const resultDiv = document.querySelector('#result');
const spanResult = document.querySelector('span.result');

formthis.addEventListener('submit', (event) => {
  event.preventDefault();
  let result = 0;
  const answers = [
    formthis.q1.value,
    formthis.q2.value,
    formthis.q3.value,
    formthis.q4.value,
    formthis.q5.value,
  ];
  answers.forEach((item, index) => {
    if (item === correctAnswer[index]) result += 20;
  });
  scrollTo(0, 0);
  resultDiv.style.visibility = 'visible';

  let output = 0;
  const timer = setInterval(() => {
    spanResult.textContent = `${output}%`;
    if (output === result) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 25);
});
