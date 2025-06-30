//generate a random number from 1 t0 10
//take user input, if random number == user input say YOU WON 
function guessGame() {
    let randomNr = Math.random()
    let roundedNr = Math.floor(randomNr * 11)
    let guess;
    do {
        guess = prompt('tell a number between 0 to 10');
        if (guess < roundedNr) {
            console.log('you guessed too low');
        } else if (guess > roundedNr) {
            console.log('you guessed too high');
        }
    } while (guess != roundedNr)
    console.log('YOU WON', guess, roundedNr);
}
guessGame()