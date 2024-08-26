function players() {
  const player = {
      player1 () {
          let mark = 'x';
          let combo = [1,2,3];
          return mark;
      },
      player2 () {
          let mark = 'o';
          let combo = [4,5];
          return combo;
      }
  }
  return player;
}

function game() {
  let gameboard = [
  ['o'],['x'],['o'],
  ['x'],['x'],['o'],
  ['o'],['o'],['']
                  ];
  let winner = null;
  return {
      winner() {
        console.log(gameboard[0],gameboard[1],gameboard[2]);
        console.log(gameboard[3], gameboard[4], gameboard[5]);
        console.log(gameboard[6], gameboard[7], gameboard[8])
      const winningCombinations = [
          [gameboard[0], gameboard[1], gameboard[2]], // Row 1
          [gameboard[3], gameboard[4], gameboard[5]], // Row 2
          [gameboard[6], gameboard[7], gameboard[8]], // Row 3
          [gameboard[0], gameboard[3], gameboard[6]], // Column 1
          [gameboard[1], gameboard[4], gameboard[7]], // Column 2
          [gameboard[2], gameboard[5], gameboard[8]], // Column 3
          [gameboard[0], gameboard[4], gameboard[8]], // Diagonal 1
          [gameboard[2], gameboard[4], gameboard[6]]  // Diagonal 2
      ];
          winningCombinations.forEach(array => {
            const valueX = array.every((subArray) => subArray.includes('x'));
            const valueO = array.every((subArray) => subArray.includes('o'))
            if (valueX) {
              winner = 'x';
            } else if (valueO) {
              winner = 'o';
            }
          })
        if (winner === 'x') {
          console.log('Player "X" win');
        } else if (winner === 'gano o') {
          console.log('Player "O" win');
        } else {
          console.log('Tie');
        }
      },
  }
}

const testing = game().winner;
testing();