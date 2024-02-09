// const rps = (p1, p2) => {
//     if(p1 === p2){return 'Draw!'}
//     return((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) ?  "Player 1 won!" : "Player 2 won!"
// };

const rps = (p1,p2) => {
    const rules = {
        'paper' : 'rock',
        'scissors' : 'paper',
        'rock' : 'scissors',
    };
    return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`
}

console.log(rps('rock','scissors'))
console.log(rps('rock','paper'))