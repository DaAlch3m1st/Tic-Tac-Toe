const players = {
  player1: '',
  player2: '',
}

function createPlayer() {
  const addPlayersName = document.getElementById('addPlayersBtn');
  const player1Input = document.getElementById('player1Input');
  const player2Input = document.getElementById('player2Input');
      return {
        player1: function() {
          addPlayersName.addEventListener('click', function() {
          const playerValue = player1Input.value.trim();
          if (playerValue === '') {
            players.player1 = 'player 1';
            console.log(players.player1);
          } else {
            players.player1 = playerValue;
            console.log(players.player1);
          }
        })
        },
        player2: function() {
          addPlayersName.addEventListener('click', function() {
            const playerValue = player2Input.value.trim();
            if (playerValue === '') {
              players.player2 = 'player 2';
              console.log(players.player2);
            } else {
              players.player2 = playerValue;
              console.log(players.player2);
            }
          });  
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

function tie() {
  boxes.forEach(array => {
    const text = array.textContent;
    if (text.length > 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  })
}

function winningCombinations() {
  let content = false;
  const currentCombos = getCombos();
  currentCombos.combos.forEach((array) => {
    const valueX = array.every((subArray) => subArray.includes('X'));
    const valueO = array.every((subArray) => subArray.includes('O'));
      if (valueX) {
        document.getElementById('winnerPlayer').textContent = `Player "${players.player1}" won the game`
      } else if (valueO) {
        return document.getElementById('winnerPlayer').textContent = `Player "${players.player2}" won the game`
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