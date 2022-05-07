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
    if(!options.includes(choice)) return playerPlay()
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

const playerChoice = playerPlay()
console.log(playerChoice);