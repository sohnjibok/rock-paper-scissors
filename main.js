const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[getRandomInt(3)]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) return `Draw. Both chose ${playerSelection}`
    if(playerSelection === 'rock') {
        if(computerSelection === 'paper') return `You lose. Computer chose ${computerSelection} whilst you chose ${playerSelection}`
        return `You win! Computer chose ${computerSelection} whilst you chose ${playerSelection}`
    }
    if(playerSelection === 'paper') {
        if(computerSelection === 'rock') return `You lose. Computer chose ${computerSelection} whilst you chose ${playerSelection}`
        return `You win! Computer chose ${computerSelection} whilst you chose ${playerSelection}`
    }
    if(playerSelection === 'scissors') {
        if(computerSelection === 'paper') return `You lose. Computer chose ${computerSelection} whilst you chose ${playerSelection}`
        return `You win! Computer chose ${computerSelection} whilst you chose ${playerSelection}`
    }
}


