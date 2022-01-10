const gridcontainer = document.querySelector('.gridcontainer');
const n = 16;

for (let i = 0; i < n; i++) {
  gridcontainer.appendChild(document.createElement('div'));
}

gridcontainer.childNodes.forEach(rowcontainer => {
  for (let i = 0; i < n; i++) {
    rowcontainer.appendChild(document.createElement('div'));
  }  
});