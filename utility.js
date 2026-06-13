// Hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// Show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// Get a random alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.floor(Math.random() * alphabets.length);
    return alphabets[index];
}

// Highlight keyboard key
function setBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    if (element) element.classList.add('bg-orange-400');
}

// Remove highlight from keyboard key
function removeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    if (element) element.classList.remove('bg-orange-400');
}