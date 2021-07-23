function decrement1(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement1"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
};

function increment1(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement1"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
};

const decrementButtons1 = document.querySelectorAll(`button[data-action="decrement1"]`);    
const incrementButtons1 = document.querySelectorAll(`button[data-action="increment1"]`);        
decrementButtons1.forEach(btn => {btn.addEventListener("click", decrement1);});   
incrementButtons1.forEach(btn => {btn.addEventListener("click", increment1);});


function decrement2(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement2"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
};
     
function increment2(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement2"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
};  
   
const decrementButtons2 = document.querySelectorAll(`button[data-action="decrement2"]`);    
const incrementButtons2 = document.querySelectorAll(`button[data-action="increment2"]`);        
decrementButtons2.forEach(btn => {btn.addEventListener("click", decrement2);});   
incrementButtons2.forEach(btn => {btn.addEventListener("click", increment2);});


function decrement3(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement3"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
};

function increment(e) {
  const btn = e.target.parentNode.parentElement.querySelector('button[data-action="decrement3"]');
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
};       
const decrementButtons3 = document.querySelectorAll(`button[data-action="decrement3"]`);    
const incrementButtons3 = document.querySelectorAll(`button[data-action="increment3"]`);        
decrementButtons3.forEach(btn => {btn.addEventListener("click", decrement3);});   
incrementButtons3.forEach(btn => {btn.addEventListener("click", increment3);});
