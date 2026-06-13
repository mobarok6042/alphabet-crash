function continueGame() {
    const alphabet = getRandomAlphabet();
    const target = document.getElementById("current-alphabet");
    target.innerText = alphabet.toUpperCase();
    setBackgroundById(alphabet);
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('game-over-screen'); // make sure this element exists in your HTML
}

function handleKeyBoardKeyUpEvent(event) {
    const lifeElement = document.getElementById("life");
    const life = parseInt(lifeElement.innerText);

    // Stop handling input if game is already over
    if (life <= 0) return;

    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        removeBackgroundById(expectedAlphabet);
        continueGame();
        const scoreElement = document.getElementById("score");
        const score = parseInt(scoreElement.innerText);
        scoreElement.innerText = score + 1;
    } else {
        const newLife = life - 1;
        lifeElement.innerText = newLife;

        if (newLife <= 0) {
            gameOver();
            return;
        }
        continueGame();
    }
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        play();
    }
});