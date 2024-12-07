

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
        console.log('that the right key')
        continueGame ();
        removeBackgroundById(expectedAlphabet);
    }
    else{
        console.log('Ooops,Wrong key')
    };
}
document.addEventListener('keyup',handleKeyBoardKeyUpEvent);

function play(){
    addElementById('home-screen');
    hideElementById('play-ground');
    continueGame ();
}

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       play();
//     }
// });

