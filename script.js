const players = {
  player1: 'x',
  player2: 'o'
}

const gameboard = {
  array: 
    Array(9).fill('')
}

const boxes = document.querySelectorAll('.box-game');
const getCombos = () => {
  return {
      combos: [
          [boxes[0].textContent, boxes[1].textContent, boxes[2].textContent], // Row 1
          [boxes[3].textContent, boxes[4].textContent, boxes[5].textContent], // Row 2
          [boxes[6].textContent, boxes[7].textContent, boxes[8].textContent], // Row 3
          [boxes[0].textContent, boxes[3].textContent, boxes[6].textContent], // Column 1
          [boxes[1].textContent, boxes[4].textContent, boxes[7].textContent], // Column 2
          [boxes[2].textContent, boxes[5].textContent, boxes[8].textContent], // Column 3
          [boxes[0].textContent, boxes[4].textContent, boxes[8].textContent], // Diagonal 1
          [boxes[2].textContent, boxes[4].textContent, boxes[6].textContent]  // Diagonal 2
      ]
  };
}

function winningCombinations() {
  let winner = null;
  const currentCombos = getCombos();
  currentCombos.combos.forEach(array => {
    const valueX = array.every((subArray) => subArray.includes(players.player1));
    const valueO = array.every((subArray) => subArray.includes(players.player2));
    if (valueX) {
      winner = players.player1;
    } else if (valueO) {
      winner = players.player2;
    }
  });
  if (winner === players.player1) {
    console.log('Player "X" win');
  } else if (winner === players.player2) {
    console.log('Player "O" win');
  } else {
    console.log('Tie');
  }
}

function emptyBoard() {
  const resetBtn = document.getElementById('reset');
  boxes.forEach(arr => {
    resetBtn.addEventListener('click', function() {
      arr.textContent='';
    })
  })
}

emptyBoard();

function dom() {
  const boxes = document.querySelectorAll('.box-game')
  let toggle = false;

  boxes.forEach(box => {
    box.addEventListener('click', function handleToggle() {
      const currentCombos = getCombos();
      console.log(currentCombos.combos);
      if (!toggle) {
        box.textContent = players.player1;
      } else {
        box.textContent = players.player2;
      }
      toggle = !toggle;
      winningCombinations();
      box.removeEventListener('click', handleToggle);
    });
  })
}

dom();