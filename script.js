/*
Goals:

1. On button click launch prompt popup asking for the number
of squares in the grid
 - Limit the number of squares user can input to 100
2. On mouse over the color of the squares should change
  - Write a function that generates random number 0-255 to use it for random rgb colors
3. Write a loop that creates divs and appends them to the container div
*/

// Event listeners and loops for drawing cells

let cellNumber = 0;

const container = document.getElementsByClassName("container")[0];
const button = document.querySelector('button');
button.addEventListener('click', () => {
  removeNodes(container);
  gridPrompt();
  for (let i = 0; i < cellNumber; i++) {
    for (let j = 0; j < cellNumber; j++) {
    let div = document.createElement('div');
    let cellSize = (container.offsetWidth / cellNumber) + "px";
    div.style.width = cellSize;
    div.style.height = cellSize;
    div.classList.add('cell');
    div.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${cellDarken()} )`;
    })
    container.appendChild(div);
    }
  }
});

// Prompt for getting the number of cells per grid

function gridPrompt() {
  cellNumber = +prompt("Please enter the size of the grid");
  if (cellNumber > 100 || isNaN(cellNumber)) {
    gridPrompt();
  } else {
    return cellNumber;
  }
}

// Generate random RGB value

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

// Function that changes opacity in RGBa

let cellOpacity = 0.1;

  function cellDarken() {
    cellOpacity += 0.1;
    if (cellOpacity > 1.0) {
      cellOpacity = 0.1;
    }
    console.log(cellOpacity);
    return cellOpacity;
  }