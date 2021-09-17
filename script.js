const DEFAULT_COLOR = '#333333';
const DEFAULT_GRID = 16;
const BUTTON = document.querySelector('#button')
const COLOR_PICKER = document.querySelector('#colorpicker')
const SLIDER_SELECTOR = document.querySelector('#sizeSlider')

let gridSizeText = document.querySelector('#sliderNumbers')
let currentColor = DEFAULT_COLOR;
let currentGrid = DEFAULT_GRID;
gridSizeText.textContent = `${currentGrid} X ${currentGrid}`;

function changeColor (e) {
    e.target.style.backgroundColor = currentColor;
}

function drawGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('div');
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
      }
}

function clearGridBackground () {
    grid.innerHTML = '';
    drawGrid(currentGrid);
}

function changeGrid() {
    currentGrid = SLIDER_SELECTOR.value;
    gridSizeText.textContent = `${currentGrid} X ${currentGrid}`
    clearGridBackground ();
}

SLIDER_SELECTOR.onchange = (e) => changeGrid();
COLOR_PICKER.onchange = (e) => currentColor = e.target.value;
BUTTON.onclick = () => clearGridBackground();

drawGrid (currentGrid);