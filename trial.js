// Initialize default values
let color = 'black';
let click = true;

// Function to populate the board with cells
function populateBoard(size) {
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    
    // Remove existing cells
    squares.forEach((div) => div.remove());

    // Set grid dimensions
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size;

    // Function to apply color to the cell
    function colorSquare() {
        if (click) {
            if (color === 'random') {
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            } else {
                this.style.backgroundColor = color;
            }
        }
    }

    // Create and append cells
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

// Initial setup with 16x16 grid
populateBoard(16);

// Function to handle board size changes
function changeSize(input) {
    if (input >= 2 && input <= 200) {
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }
}

// Function to change the drawing color
function changeColor(choice) {
    color = choice;
}

// Function to reset the board
function resetBoard() {
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

// Toggle drawing mode on body click
document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        click = !click;

        // Update drawing mode display
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        }
    }
});

