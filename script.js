// function logicGame() {
//   let gameboard = [];
//   let winner = null;

//   return {   
//       winner(player1,player2) {
//         gameboard = [
//           [player2],[player1],[player2],
//           [player1],[player2],[player2],
//           [player1],[player1],[player1]
//         ];

//       console.log(gameboard[0], gameboard[1], gameboard[2]);
//       console.log(gameboard[3], gameboard[4], gameboard[5]);
//       console.log(gameboard[6], gameboard[7], gameboard[8]);
          
//       const winningCombinations = [
//           [gameboard[0], gameboard[1], gameboard[2]], // Row 1
//           [gameboard[3], gameboard[4], gameboard[5]], // Row 2
//           [gameboard[6], gameboard[7], gameboard[8]], // Row 3
//           [gameboard[0], gameboard[3], gameboard[6]], // Column 1
//           [gameboard[1], gameboard[4], gameboard[7]], // Column 2
//           [gameboard[2], gameboard[5], gameboard[8]], // Column 3
//           [gameboard[0], gameboard[4], gameboard[8]], // Diagonal 1
//           [gameboard[2], gameboard[4], gameboard[6]]  // Diagonal 2
//       ];
//           winningCombinations.forEach(array => {
//             const valueX = array.every((subArray) => subArray.includes('x'));
//             const valueO = array.every((subArray) => subArray.includes('o'));
//             if (valueX) {
//               winner = 'x';
//             } else if (valueO) {
//               winner = 'o';
//             }
//           });
//         if (winner === 'x') {
//           console.log('Player "X" win');
//         } else if (winner === 'o') {
//           console.log('Player "O" win');
//         } else {
//           console.log('Tie');
//         }
//       }
//   }
// }

const players = {
  player1: 'x',
  player2: 'o',
}

function addMark() {
  const boxGame = document.querySelectorAll('.box-game');
  toggle = false;
  
  boxGame.forEach(box => {
    box.addEventListener('click', function handleToggle() {
 
      if (toggle) {
        box.textContent = players.player1;
      } else {
        box.textContent = players.player2;
      }
      toggle = !toggle
      
      box.removeEventListener('click', handleToggle)
    })
  })
}

addMark();

const gameBoard = {
  gameboard: [
    [players.player2],[players.player1],[players.player2],
    [players.player1],[players.player2],[players.player2],
    [players.player1],[players.player1],[players.player1]
  ],  
}

const winningCombinations = {
  combinations:
  [
    [gameBoard.gameboard[0], gameBoard.gameboard[1], gameBoard.gameboard[2]], // Row 1
    [gameBoard.gameboard[3], gameBoard.gameboard[4], gameBoard.gameboard[5]], // Row 2
    [gameBoard.gameboard[6], gameBoard.gameboard[7], gameBoard.gameboard[8]], // Row 3
    [gameBoard.gameboard[0], gameBoard.gameboard[3], gameBoard.gameboard[6]], // Column 1
    [gameBoard.gameboard[1], gameBoard.gameboard[4], gameBoard.gameboard[7]], // Column 2
    [gameBoard.gameboard[2], gameBoard.gameboard[5], gameBoard.gameboard[8]], // Column 3
    [gameBoard.gameboard[0], gameBoard.gameboard[4], gameBoard.gameboard[8]], // Diagonal 1
    [gameBoard.gameboard[2], gameBoard.gameboard[4], gameBoard.gameboard[6]]  // Diagonal 2
  ]
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
}

console.log(gameBoard.gameboard[0], gameBoard.gameboard[1], gameBoard.gameboard[2]);
console.log(gameBoard.gameboard[3], gameBoard.gameboard[4], gameBoard.gameboard[5]);
console.log(gameBoard.gameboard[6], gameBoard.gameboard[7], gameBoard.gameboard[8]);