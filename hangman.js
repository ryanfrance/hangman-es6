class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.lettersGuessed = []
        this.guesses = guesses
        this._status = 'playing'
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.lettersGuessed.includes(letter) || letter === ' ') {
                puzzle += letter
                return
            }
    
            puzzle += '*'
        })
    
        return puzzle
    }
    makeGuess(guess) {
        if (this._status !== 'playing') {
            return
        }
    
        guess = guess.toLowerCase()
        const isUniqueGuess = !this.lettersGuessed.includes(guess)
        const isIncorrectGuess = !this.word.includes(guess)
    
        if (isUniqueGuess) {
            this.lettersGuessed.push(guess)
        }
    
        if (isIncorrectGuess) {
            this.guesses--
        }
    
        this.calculateStatus()
    }
    calculateStatus() {
        if (!this.guesses) {
            this._status = 'failed'
            return
        }
    
        const cg = this.word.filter((letter) => this.lettersGuessed.includes(letter) || letter === ' ')
    
        if (cg.join('') === this.word.join('')) {
            this._status = 'finished'
        }
    }
    get status() {
        if (this._status === 'finished') {
            return `Great work! You guessed the word`
        }
    
        if (this._status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        }
    
        return `Guesses left: ${this.guesses}`
    }
}