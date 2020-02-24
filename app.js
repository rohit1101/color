const divEl = document.querySelector('div');
const c = document.createElement('p');

const colorArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

function randomizeColor() {
  const arrLen = Math.floor(Math.random() * colorArr.length);
  return colorArr[arrLen];
}

const handleClick = event => {
  const color = `#${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}`;
  document.body.style.backgroundColor = color;
  c.classList.add('color');
  c.textContent = `${color}`;
  document.body.appendChild(c);
};

const handleKey = event => {
  console.log(event.keyCode);
  if (event.keyCode === 32) {
    const color = `#${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}${randomizeColor()}`;
    document.body.style.backgroundColor = color;
    c.classList.add('color');
    c.textContent = `${color}`;
    document.body.appendChild(c);
  }
};

// window.setTimeout(() => {
//   handleClick();
// }, 2000);

// window.setInterval(() => {
//   handleClick();
// }, 5000);

divEl.addEventListener('click', handleClick);
window.addEventListener('keydown', handleKey);
