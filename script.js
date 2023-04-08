const button = document.getElementById('button');
const screen = document.body;

const colors = ['red', 'green', 'blue', 'pink', 'brown'];

button.addEventListener('click', () => {
  console.log('Button has been clicked!');

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  screen.style.backgroundColor = randomColor;
});
