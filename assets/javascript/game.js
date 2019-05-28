var wins = 0;
var losses = 0;
var remaining = 0;
var resetArray = [];
var pickLetter = pickLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";

pickletter = letters[Math.floor(Math.random() * letters.length)];
console.log(pickletter);

function guess() {
  pickLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(pickLetter);
}

document.onkeyup = function(event) {
  var userChoice = event.key;
  if (userChoice === pickLetter) {
    win++;
    guessesLeft = 10;
    resetArray = [];
  }

  guess();
  if (userChoice !== pickLetter) {
    remaining--;
  }

  if (remaining == 0) {
    loss++;
    resetArray = [];
    guessesLeft = 10;
  }

  if (resetArray.indexOf(userChoice) >= 0) {
  } else {
    resetArray.push(userChoice);
    document.getElementById("userChoice").innerHTML = resetArray;
    console.log(resetArray);
  }

  document.getElementById("win").innerHTML = wins;
  document.getElementById("loss").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = remaining;
};
