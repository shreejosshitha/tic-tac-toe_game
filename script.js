const cells = document.querySelectorAll('.cell');
const turnInfo = document.getElementById('turn-info');
const resultInfo = document.getElementById('result-info');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(cell) {
  if (cell.textContent === '' && gameActive) {
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = 'none';

    if (checkWin()) {
      resultInfo.textContent = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      resultInfo.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turnInfo.textContent = `Turn: ${currentPlayer}`;
    }
  }
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => cells[index].textContent === currentPlayer);
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function restartGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.pointerEvents = 'auto';
  });
  currentPlayer = 'X';
  turnInfo.textContent = `Turn: ${currentPlayer}`;
  resultInfo.textContent = '';
  gameActive = true;
}

cells.forEach(cell => {
  cell.addEventListener('click', () => handleCellClick(cell));
});

restartButton.addEventListener('click', restartGame);
function highlightWinningLine(winningCells) {
    const line = document.createElement('div');
    line.classList.add('winning-line');
  
    // Determine the line's position and rotation based on the winning cells
    // ...
  
    document.querySelector('.game-board').appendChild(line);
  }