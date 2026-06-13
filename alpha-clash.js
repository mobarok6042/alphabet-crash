const STARTING_LIVES = 5;
let gameActive = false;
let currentAlphabet = '';

// Clear orange highlight from every key on the keyboard
function clearAllHighlights() {
    const allKeys = 'abcdefghijklmnopqrstuvwxyz'.split('');
    allKeys.forEach(key => removeBackgroundById(key));
}

function continueGame() {
    // Remove highlight from previous key
    removeBackgroundById(currentAlphabet);

    currentAlphabet = getRandomAlphabet();
    const target = document.getElementById('current-alphabet');
    target.innerText = currentAlphabet.toUpperCase();
    setBackgroundById(currentAlphabet);
}

function gameOver() {
    gameActive = false;

    // Pass the final score to the game-over screen
    const score = document.getElementById('score').innerText;
    document.getElementById('final-score').innerText = score;

    // Remove any lingering key highlight
    removeBackgroundById(currentAlphabet);

    hideElementById('play-ground');
    showElementById('game-over-screen');
}

function playAgain() {
    // Clear any leftover key highlights from previous game
    clearAllHighlights();
    currentAlphabet = '';

    // Reset life, score and display letter
    document.getElementById('life').innerText = STARTING_LIVES;
    document.getElementById('score').innerText = 0;
    document.getElementById('current-alphabet').innerText = '?';

    hideElementById('game-over-screen');
    showElementById('play-ground');

    gameActive = true;
    continueGame();
}

function handleKeyBoardKeyUpEvent(event) {
    if (!gameActive) return;

    // Ignore modifier / non-character keys
    if (event.key.length !== 1) return;

    const lifeElement = document.getElementById('life');
    const life = parseInt(lifeElement.innerText);

    const playerPressed = event.key.toLowerCase();

    if (playerPressed === currentAlphabet) {
        // Correct key
        continueGame();
        const scoreElement = document.getElementById('score');
        scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
    } else {
        // Wrong key
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
    // Reset life and score each time play starts from home
    document.getElementById('life').innerText = STARTING_LIVES;
    document.getElementById('score').innerText = 0;

    hideElementById('home-screen');
    showElementById('play-ground');

    gameActive = true;
    continueGame();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !gameActive) {
        play();
    }
});