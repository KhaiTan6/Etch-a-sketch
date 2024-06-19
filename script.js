const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size){
    container.innerHTML = '';
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const itemSize = containerWidth / size ;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
    }
}

function resizeGrid(){
    let newSize = prompt('Enter the number of squares per side for new grid (e.g., 16 for 16x16 grid)', 16);
    newSize = parseInt(newSize);
    if (newSize === null) {
        return;
    }
    if (newSize < 1 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    createGrid(newSize);
}

createGrid(16);

resizeButton.addEventListener('click', resizeGrid);

window.addEventListener('resize', () => {
    const currentGridSize = Math.sqrt(container.children.length);
    createGrid(currentGridSize);
});