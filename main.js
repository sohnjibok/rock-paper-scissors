const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[getRandomInt(3)]
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