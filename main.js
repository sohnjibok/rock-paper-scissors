// GRAB HTML ELEMENTS
const button = document.querySelectorAll('.game-button')
const playerScoreBoard = document.getElementById('player')
const computerScoreBoard = document.getElementById('computer')

console.log(button, playerScoreBoard, computerScoreBoard)

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[getRandomInt(3)]
}

const playerPlay = (event) => {
    return event.id.toString()
}

button.forEach(button => button.addEventListener('click', event => {
    let playerChoice = playerPlay(event.target)
    let computerChoice = computerPlay()
    if(playerChoice === computerChoice) console.log(`both chose ${playerChoice}`)
    if(playRound(playerChoice, computerChoice)) {
        console.log(`player won because player chose ${playerChoice} and computer chose ${computerChoice}`)
    } else {
        console.log(`player lost since player chose ${playerChoice} and computer chose ${computerChoice}`);
    }
}))


const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') return true
        return false
    }
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') return true
        return false
    }
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') return true
        return false
    }
}


















    // const playGame = () => {
    //     let playerScore = 0
    //     let computerScore = 0
    //     let noWin = true
    //     while (noWin) {
    //         const playerChoice = playerPlay()
    //         const computerChoice = computerPlay()
    //         if (playerChoice === computerChoice) {
    //             console.log('tie')
    //             continue
    //         }
    //         if (playRound(playerChoice, computerChoice)) {
    //             playerScore++
    //             console.log(`player wins cause computer chose ${computerChoice}`, 'score:', playerScore, computerScore)
    //         } else {
    //             computerScore++
    //             console.log(`player lost cause computer chose ${computerChoice}`, 'score:', playerScore, computerScore)
    //         }
    //         if (playerScore === 5 || computerScore === 5) {
    //             noWin = false
    //             console.log(((playerScore === 5) ? 'Congrats you win!' : 'Sorry, you lost.'), 'final score:', playerScore, computerScore)
    //         }
    //     }
    // }