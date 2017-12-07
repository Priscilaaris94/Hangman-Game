//create an array of words
const word = ['pink floyd', 'blondie', 'heart', 'journey'];
//choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord= [];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
// main
console.log(chosenWord);
//create underscores basded on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');

    }
    return underScore;
}

//get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

// if users guess is right
  if(chosenWord.indexOf(keyword) > -1) {
    //   add to right words array
    rightWord.push(keyword);
    // replace underscore with the right letter
   underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
    // check to see if user word matches guesses
    if(underScore.join('') == chosenWord) {
        alert('You Win!');
    }
}
 
  else{
      wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
  }

});
//check if guess is right
 underScore[0].innerHTML = generateUnderscore().join(' ');
//if right push to right array
//if wrong push to wrong array