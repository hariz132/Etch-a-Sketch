const gridcontainer = document.querySelector('.gridcontainer');
const gridChangeButton = document.querySelector('.gridsize')
const clearGridButton = document.querySelector('.cleargrid');
let cells;
let isDrawing = false;
let drawingMode = 'color';
let activeColor = 'black'

createGrid(16);

function createGrid(n){  
  for (let i = 0; i < n; i++) {
    let rowcontainer = gridcontainer.appendChild(document.createElement('div'));
    for (let i = 0; i < n; i++) {
      rowcontainer.appendChild(document.createElement('div'));
    }
  }
  setupDrawingEventHandlers('color');
}

function setupDrawingEventHandlers() {
  cells = document.querySelectorAll('.gridcontainer > div > div');
  cells.forEach(cell => {
    cell.addEventListener('mousedown', e => {
      startDrawing(e);
      isDrawing = true;
    });
    cell.addEventListener('mouseenter', e => {
      if (isDrawing) startDrawing(e);
    });
  });
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
}

function startDrawing(e) {
  switch (drawingMode) {
    case 'rgb':
      e.target.style.backgroundColor = randomRGB();
      const currentCellColor = e.target.style.backgroundColor;
      console.log(currentCellColor);
      break;
    case 'color':
      e.target.style.backgroundColor = activeColor;
      break;
    case 'inc-blackness':
      if (e.target.style.filter) {
        let x = +e.target.style.filter.slice(11,-1) - 0.1;
        e.target.style.filter = `brightness(${x})`;
      } else {
        e.target.style.filter = 'brightness(0.9)';
      }
  }
}

function randomRGB() {
  return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
}

function randomNum(num) { 
  return Math.floor(Math.random() * num);
}

gridChangeButton.addEventListener('click', () => {
  let n;
  while (true) {
    n = window.prompt('Enter a number for the n x n grid you want:', 16);
    if (n === null) break;
    else if (Number.isInteger(+n)) {
      if (+n > 100) {
        window.alert('Number cannot be more than 100')
      }
      else {
        gridcontainer.innerHTML = ''; // remove current grid
        createGrid(n);
        break;
      }
    } 
  }
});

clearGridButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.style.removeProperty('background-color');
    cell.style.removeProperty('filter');
  });
});