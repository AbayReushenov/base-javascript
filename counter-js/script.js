const count = document.querySelector('#count');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

const initialCount = 0;
let counter = initialCount;

function updateHTMLCounter(newcount){
  count.innerHTML = newcount;
}

updateHTMLCounter(counter);

plus.addEventListener('click', function(){
  counter++;
  updateHTMLCounter(counter);
});

minus.addEventListener('click', function(){
  counter--;
  updateHTMLCounter(counter);
});

reset.addEventListener('click', function(){
  counter = initialCount;
  updateHTMLCounter(counter);
});
