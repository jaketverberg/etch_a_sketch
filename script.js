const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;
const GRID_SIZE_TEXT = document.createElement('p')

let currentColor = DEFAULT_COLOR;
let currentGrid = DEFAULT_GRID;

grid.style.gridTemplateColumns = `repeat ${currentGrid}, 1fr`;
grid.style.gridTemplateRows = `repeat ${currentGrid}, 1fr`;

function changeColor () {
    let newColor = document.getElementsById('this');
    currentColor = newColor;
}

const buttons = document.querySelectorAll('.grid');
buttons.forEach((button) => {
  button.addEventListener('hover', () => {
    playerGuess = `${button.id}`;
    playRound();
  });
});