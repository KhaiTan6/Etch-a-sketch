const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');
const resetButton = document.getElementById('resetButton');
let currentGridSize = 16;
let isMouseDown = false;

function createGrid(size){
    container.innerHTML = '';
    const containerWidth = container.clientWidth;
    //const containerHeight = container.clientHeight;
    const itemSize = containerWidth / size ;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;

        gridItem.addEventListener('mousedown', () => {
            if (event.button === 0) {
                gridItem.style.backgroundColor = 'black';
                isMouseDown = true;
            }
        });

        gridItem.addEventListener('mouseover', () => {
            if (isMouseDown) { // Color the square only if the mouse button is pressed
                gridItem.style.backgroundColor = 'black';
            }
        });

        gridItem.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Prevent the context menu from appearing
            gridItem.style.backgroundColor = ''; // Reset the background color on right click
        });

        container.appendChild(gridItem);
    }

    // Add event listeners to track mouse up and down events
    container.addEventListener('mouseup', () => {
        isMouseDown = false; // Set isMouseDown to false when mouse button is released
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false; // Ensure isMouseDown is false when mouse button is released anywhere on the document
    });
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
    currentGridSize = newSize;
    createGrid(newSize);
}

function resetGrid(){
    createGrid(currentGridSize);
}

createGrid(currentGridSize);

resizeButton.addEventListener('click', resizeGrid);
resetButton.addEventListener('click', resetGrid);

window.addEventListener('resize', () => {
    const currentGridSize = Math.sqrt(container.children.length);
    createGrid(currentGridSize);
});