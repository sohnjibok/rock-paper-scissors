let playerScore = document.querySelector('#player')
let computerScore = document.querySelector('#computer')

let pscore = 0
let cscore = 0

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

const playRound = (playerChoice) => {
    const computerChoice = computerPlay()

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            pscore++
            playerScore.textContent = pscore
        } else {
            cscore++
            computerScore.textContent = cscore
        }
    }
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            pscore++
            playerScore.textContent = pscore
        } else {
            cscore++
            computerScore.textContent = cscore
        }
    }
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            pscore++
            playerScore.textContent = pscore
        } else {
            cscore++
            computerScore.textContent = cscore
        }
    }
    console.log(playerChoice, computerChoice);
    if (pscore === 5) document.querySelector('#scoreboard').textContent = 'Player wins'
    if (cscore === 5) document.querySelector('#scoreboard').textContent = 'Computer wins'
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', event => {
    playRound(event.target.id)
}))
















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