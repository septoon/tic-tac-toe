const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    e.target.innerHTML = currentPlayer;
    // e.target.style.background = currentPlayer === 'X' ? 'red' : 'blue';
    checkForWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
}

function checkForWin() {
  // Winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check for winning combinations
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].innerHTML === currentPlayer && squares[b].innerHTML === currentPlayer && squares[c].innerHTML === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame()
      return;
    }
  }
  // Check for draw
  let draw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '') {
      draw = false;
      break;
    }
  }
  if (draw) {
    alert('Draw!');
  }
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  currentPlayer = 'X';
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].style.background = '';
  }
}

