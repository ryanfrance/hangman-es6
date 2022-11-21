let gameOne
const hangmanWordEl = document.querySelector('#hangman-word')
const remainingGuessesEl = document.querySelector('#hangman-guesses-remaining')

window.addEventListener('keypress', (e) => {
    const guess = e.key
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    hangmanWordEl.textContent = gameOne.puzzle
    remainingGuessesEl.textContent = gameOne.status
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    gameOne = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()