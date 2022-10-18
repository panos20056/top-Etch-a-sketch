const grid = document.querySelector('#grid');
const gridDimensions = 800;
const sizeButton = document.querySelector('#size-button');
grid.style.cssText = `width: ${gridDimensions}px; height: ${gridDimensions}px`;
let newSize = 0;
sizeButton.addEventListener('click', () => {
    newSize = prompt();
    while (newSize > 100) newSize = prompt();
    if(newSize == undefined) return;
    createGrid(newSize);
})


let isMouseDown = false;
grid.addEventListener('mousedown', () => isMouseDown = true);
grid.addEventListener('mouseup', () => isMouseDown = false);



function createGrid(gridSize) {
    grid.innerHTML = '';
    for (let i = 1; i <= Math.pow(gridSize, 2) ; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('draggable', 'false');
        grid.appendChild(cell) ;
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.cssText = `border-top: 1px solid black; border-right: 1px solid black; width: ${gridDimensions/gridSize}px; height: ${gridDimensions/gridSize}px;`);
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {if(isMouseDown) { e.target.style.cssText += `background-color: black;`} } ));
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        if ( (i+1) % gridSize == 0 ) { cells[i].style.borderRight = '0'};
        if(i < gridSize) {cells[i].style.cssText += 'border-top: 0'};
        
    }
    grid.style.cssText += 'border: 2px solid black;'
}
