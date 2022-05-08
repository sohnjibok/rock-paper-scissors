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

    if(playerChoice === computerChoice) {
        console.log('tie: ', playerChoice, computerChoice)
        return

    }
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