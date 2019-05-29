/*window.onload = function()*/
var wins = 0;
var losses = 0;
var remaining = 10;
var resetArray = [];
var pickLetter = "";
var letters = "abcdefghijklmnopqrstuvwxyz";

pickLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(pickLetter);

document.onkeyup = function(event) {
  var userChoice = event.key;
  console.log(userChoice);
  if (userChoice === pickLetter) {
    wins++;
    console.log(wins);
  } else {
    remaining--;
  }

  if (remaining === 0) {
    losses++;
    console.log(losses);
    remaining = 10;
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
