const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[getRandomInt(3)]
}

const playerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    const choice = prompt('Enter your choice: ').toLowerCase()
    if (!options.includes(choice)) return playerPlay()
    return choice
}

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

const playGame = () => {
    let playerScore = 0
    let computerScore = 0
    let noWin = true
    while (noWin) {
        const playerChoice = playerPlay()
        const computerChoice = computerPlay()
        if (playerChoice === computerChoice) {
            console.log('tie')
            continue
        }
        if (playRound(playerChoice, computerChoice)) {
            playerScore++
            console.log(`player wins cause computer chose ${computerChoice}`, 'score:', playerScore, computerScore)
        } else {
            computerScore++
            console.log(`player lost cause computer chose ${computerChoice}`, 'score:', playerScore, computerScore)
        }
        if (playerScore === 5 || computerScore === 5) {
            noWin = false
            console.log(((playerScore === 5) ? 'Congrats you win!' : 'Sorry, you lost.'), 'final score:', playerScore, computerScore)
        }
    }
}

playGame()