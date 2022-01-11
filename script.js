const gridcontainer = document.querySelector('.gridcontainer');
const gridChangeButton = document.querySelector('.gridsize')
const clearGridButton = document.querySelector('.cleargrid');
let cells;
let isDrawing = false;

createGrid(16);

function createGrid(n){  
  for (let i = 0; i < n; i++) {
    let rowcontainer = gridcontainer.appendChild(document.createElement('div'));
    for (let i = 0; i < n; i++) {
      rowcontainer.appendChild(document.createElement('div'));
    }
  }
  dwgEventListener('rgb');
}

function dwgEventListener(colorMode) {
  cells = document.querySelectorAll('.gridcontainer > div > div');
  cells.forEach(cell => {
    cell.addEventListener('mousedown', e => {
      switch (colorMode) {
        case 'rgb':
          e.target.style.backgroundColor = randomRGB();
          break;
        case 'black':
          e.target.style.backgroundColor = 'black';
      }
      isDrawing = true;
    });
    cell.addEventListener('mouseenter', e => {
      if (isDrawing) {
        switch (colorMode) {
          case 'rgb':
            e.target.style.backgroundColor = randomRGB();
            break;
          case 'black':
            e.target.style.backgroundColor = 'black';
        }
      }
    });
  });
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
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

clearGridButton.addEventListener('click', e => {
  cells.forEach(cell => {
    cell.style.removeProperty('background-color');
  });
});