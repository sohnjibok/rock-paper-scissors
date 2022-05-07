const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors']
    return options[getRandomInt(3)]
}

const computerChoice = computerPlay()

console.log(computerChoice);

