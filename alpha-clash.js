

function continueGame (){
    getRandomAlphabet ();
    const alphabet = getRandomAlphabet();
    const target = document.getElementById("current-alphabet");
target.innerText = alphabet.toUpperCase();

setBackgroundById (alphabet);
}

function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key ;
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText ;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPressed === expectedAlphabet){
        continueGame ();
        removeBackgroundById(expectedAlphabet);
        const scoreElement = document.getElementById("score");
        const score = parseInt(scoreElement.innerText);
        const newScore = score+1 ;
        scoreElement.innerText = newScore ;
    }
    else{
        continueGame ();
        const lifeElement = document.getElementById("life");
        const life = parseInt(lifeElement.innerText);
        const newLife = life-1 ;
        lifeElement.innerText = newLife ;
    };
}
document.addEventListener('keyup',handleKeyBoardKeyUpEvent);

function play(){
    addElementById('home-screen');
    hideElementById('play-ground');
    continueGame ();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      play();
    }
});

