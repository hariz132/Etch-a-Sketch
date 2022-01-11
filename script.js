const gridcontainer = document.querySelector('.gridcontainer');
const gridChangeButton = document.querySelector('.gridsize')
const clearGridButton = document.querySelector('.cleargrid');
let cells;
let isDrawing = false;

createGrid(16);

function createGrid(n){  
  for (let i = 0; i < n; i++) {
    gridcontainer.appendChild(document.createElement('div'));
  }
  gridcontainer.childNodes.forEach(rowcontainer => {
    for (let i = 0; i < n; i++) {
      rowcontainer.appendChild(document.createElement('div'));
    }
  });

  cells = document.querySelectorAll('.gridcontainer > div > div');
  cells.forEach(cell => {
    cell.addEventListener('mousedown', e => {
      e.target.style.backgroundColor = 'black';
      isDrawing = true;
    });
    cell.addEventListener('mouseenter', e => {
      if (isDrawing) {
        e.target.style.backgroundColor = 'black';
      }
    });
  });
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
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