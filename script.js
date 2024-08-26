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

// function gameBoard() {
//     const boardDOM = document.getElementById('gameboard');
//     const game = {
//         board() {
//             console.log(boardDOM.childNodes);
//         }
//     }

//     return game;
// }

function game() {
    let gameboard = [['x'],['o'],['o'],['x'],[''],[''],['x'],[''],['']];
    //NOTE - el array almacenara dos combinaciones, la del primer jugador y la del segundo, esto quiere decir que dependiendo de la combinacion se dara el ganador
    let targets = [1,2,3];
    return {
        winner() {
            const cols1 = [gameboard[0], gameboard[1], gameboard[2]];
            const cols2 = [gameboard[3], gameboard[4],gameboard[5]];
            const cols3 = [gameboard[6], gameboard[7],gameboard[8]];
            console.log(cols1[0], cols1[1], cols1[2]);
            console.log(cols2[0], cols2[1], cols2[2]);
            console.log(cols3[0], cols3[1], cols3[2]);
            gameboard.forEach(array => {
                // console.log(array[0], array[1], array[2]);
            })
        },
        tie() {
        },
        loser() {
        }
    }
}

const testing = game().winner;
testing();