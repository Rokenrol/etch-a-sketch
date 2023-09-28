/*
Goals:

1. On button click launch prompt popup asking for the number
of squares in the grid
 - Limit the number of squares user can input to 100
2. On mouse over the color of the squares should change
  - Write a function that generates a random number from 0-255 and use it for random RGB colors
3. Write a loop that creates divs and appends them to the container div
*/

// Select grid container and the button that makes the grid

const container = document.getElementsByClassName("container")[0];
const button = document.querySelector('button');

// Create default grid of 16 x 16 cells

createGrid(16);

/* Event listener that listens for the button click,
   on click clears the existing grid and creates a new grid */

button.addEventListener('click', () => {
  removeNodes(container);
  createGrid(gridPrompt());
});

// Prompt box for getting the number of cells per grid

function gridPrompt() {
  cells = +prompt("Please enter the size of the grid");
  if (cells > 100 || isNaN(cells)) {
    gridPrompt();
  } else {
    return cells;
  }
}

// Function that creates a new grid 

function createGrid(cellNumber) {
  for (let i = 0; i < cellNumber; i++) {
    for (let j = 0; j < cellNumber; j++) {
      let div = document.createElement('div');
      let cellSize = (container.offsetWidth / cellNumber) + "px";
      div.style.width = cellSize;
      div.style.height = cellSize;
      div.classList.add('cell');
      div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${cellDarken()})`;
      });
      container.appendChild(div);
    }
  }
}

// Generate a random RGB value

function randomNumber() {
  let randomRGBNumber = Math.floor(Math.random() * 256);
  return randomRGBNumber;
}

// Function to remove all cells of a grid

function removeNodes(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

// Function that changes the opacity (alpha channel in RGBa)

let cellOpacity = 0.1;

function cellDarken() {
  cellOpacity += 0.1;
  if (cellOpacity > 1.0) {
    cellOpacity = 0.1;
  }
  return cellOpacity;
}