//coding function to add and remove hidden property
function addElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function hideElementById (elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet (){
    const alphabetString = 'abcdefghikjlmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25 ;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet ;
}
//adding or removing background color according to alphabet//

function setBackgroundById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
};

function removeBackgroundById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
};
