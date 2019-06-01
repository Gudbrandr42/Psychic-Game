/*window.onload = function()*/
var wins = 0;
var losses = 0;
var remaining = 10;
var pickedAlphabet;
var previousGuess = [];
var letters = "abcdefghijklmnopqrstuvwxyz";
var someArray = [];

// the computer's generation of a random letter.
pickedAlphabet = letters[Math.floor(Math.random() * letters.length)];
console.log(pickedAlphabet);

//this listens for the user's keying and logs right/wrong answers.
//also to change reamaining chances for wrong answers.
//supposed to list letters used and prevent the resuse of letters.
document.onkeyup = function(event) {
  var userChoice = event.key;
  if (previousGuess.includes(userChoice)) {
    return;
  }
  previousGuess.push(userChoice);
  console.log(userChoice);
  someArray.push(userChoice);
  document.getElementById("letters").innerHTML = someArray;
  console.log(someArray.indexOf(userChoice));
  //console.log(someArray);

  if (userChoice === pickedAlphabet) {
    wins++;
    console.log(wins);
    pickedAlphabet = letters[Math.floor(Math.random() * letters.length)];
    console.log(pickedAlphabet);
  } else {
    remaining--;
  }

  if (remaining === 0) {
    losses++;
    console.log(losses);
    remaining = 10;
    someArray = [];
    alert("Ha! Loser, game over! Try again!");
  }

  // if (resetArray.indexOf(userChoice) >= 0) {
  // } else {
  //   resetArray.push(userChoice);
  //   document.getElementById("userChoice").innerHTML = resetArray;
  //   console.log(resetArray);
  // }

  document.getElementById("win").innerHTML = wins;
  document.getElementById("loss").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = remaining;
};
