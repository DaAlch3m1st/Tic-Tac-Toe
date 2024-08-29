const players = {
  player1: 'x',
  player2: 'o'
}

let gameboard = Array(9).fill('');

const winningCombinations = {
  combinations:
  [
    [gameboard[0], gameboard[1], gameboard[2]], // Row 1
    [gameboard[3], gameboard[4], gameboard[5]], // Row 2
    [gameboard[6], gameboard[7], gameboard[8]], // Row 3
    [gameboard[0], gameboard[3], gameboard[6]], // Column 1
    [gameboard[1], gameboard[4], gameboard[7]], // Column 2
    [gameboard[2], gameboard[5], gameboard[8]], // Column 3
    [gameboard[0], gameboard[4], gameboard[8]], // Diagonal 1
    [gameboard[2], gameboard[4], gameboard[6]]  // Diagonal 2
  ],
}

let winner = null;

function winningValidation() {
    winningCombinations.combinations.forEach(array => {
      const valueX = array.every((subArray) => subArray.includes('x'));
      const valueO = array.every((subArray) => subArray.includes('o'));
      if (valueX) {
        winner = 'x';
      } else if (valueO) {
        winner = 'o';
      }
    });
      if (winner === 'x') {
        console.log('Player "X" win');
      } else if (winner === 'o') {
        console.log('Player "O" win');
      } else {
        console.log('Tie');
      }
      return;
}
winningValidation();

function conseguirIndex() {
  const g = document.getElementById('gameboard');
  let toggleWin = false;
  for (let i = 0; i < g.children.length; i++) {
    (function(index) {
      g.children[i].onclick = function() {
        console.log(index);
        if (!toggleWin) {
          gameboard[index] = 'x';
          console.log(gameboard);
        } else {
          gameboard[index] = 'o';
          console.log(gameboard);
        }
        toggleWin = !toggleWin;
      }
    })(i);
  }

  handleBoxes();

  function handleBoxes() {
    const boxes = document.querySelectorAll('.box-game');
    let toggle = false;

    boxes.forEach(box => {
      box.addEventListener('click', function handleToggle() {
        if (toggle) {
          box.textContent = 'x';
        } else {
          box.textContent = 'o';
        }
        toggle = !toggle;
        console.log(toggle)
        console.log(gameboard[0], gameboard[1], gameboard[2]);
        console.log(gameboard[3], gameboard[4], gameboard[5]);
        console.log(gameboard[6], gameboard[7], gameboard[8]);
        box.removeEventListener('click', handleToggle);
      });
    });
  }
}

conseguirIndex();