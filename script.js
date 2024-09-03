const players = {
  player1: '',
  player2: '',
}

function createPlayer() {
  const addPlayersName = document.getElementById('addPlayersBtn');
  return {
    player1: function(value="player 1") {
      addPlayersName.addEventListener('click', function() {
      return players.player1 = value;
    })
    },
    player2: function(value="player 2") {
      addPlayersName.addEventListener('click', function() {
        return players.player2 = value;
      })    
    },
  }
}

const x = createPlayer();
x.player1();
x.player2();

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
  const currentCombos = getCombos();
  currentCombos.combos.forEach((array, player1Name, player2Name) => {
    player1Name = player1Name;
    player2Name = player2Name;
    const valueX = array.every((subArray) => subArray.includes('X'));
    const valueO = array.every((subArray) => subArray.includes('O'));
      if (valueX) {
        console.log(`Player "${players.player1}" won the game`);
      } else if (valueO) {
        console.log(`Player "${players.player2}" won the game`);
      } else if (!valueX || !valueO) {
        console.log('Tie');
      }
  });
} 
//ANCHOR - POSIBLEMENTE VER CUANDO TODOS LOS VALORES SON TRUE OR FALSE Y AHI DETERMINAR EL EMPATE COMO SI TODA LA GAMEBOARD ESTE LLENA

function emptyBoard() {
  const resetBtn = document.getElementById('reset');
  boxes.forEach(arr => {
    resetBtn.addEventListener('click', function() {
      arr.textContent='';
    })
  })
}


function dom() {
  const boxes = document.querySelectorAll('.box-game')
  let toggle = false;

  boxes.forEach(box => {
    box.addEventListener('click', function handleToggle() {
        if (!toggle) {
          box.textContent = 'X';
        } else {
          box.textContent = 'O';
        }
      toggle = !toggle;
      winningCombinations();
      box.removeEventListener('click', handleToggle);
    });
  })
}

dom();