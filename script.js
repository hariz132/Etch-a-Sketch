const gridcontainer = document.querySelector('.gridcontainer');
let isDrawing = false;
const n = 30;

for (let i = 0; i < n; i++) {
  gridcontainer.appendChild(document.createElement('div'));
}

gridcontainer.childNodes.forEach(rowcontainer => {
  for (let i = 0; i < n; i++) {
    rowcontainer.appendChild(document.createElement('div'));
  }
});

const cells = document.querySelectorAll('.gridcontainer > div > div');
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