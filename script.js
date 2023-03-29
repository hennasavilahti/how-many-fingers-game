const theGuess = document.getElementById("theGuess");
const submitButton = document.getElementById("submitButton");
const comment = document.getElementById("comment");
const colored = document.getElementById("colored");

function getRandomInt() {
    return Math.trunc(Math.random() * (11 - 1) + 1);
  }

const correctNumber = getRandomInt();
console.log(correctNumber);


const checkNumber = function () {
    const guess = Number(theGuess.value);
    if (guess === correctNumber){
        console.log(correctNumber);
        comment.textContent = "The number is CORRECT!";
    }
    else if(guess < correctNumber){
        comment.textContent = "The number was INCORRECT. Correct number is bigger!"
    }
    else{
        comment.textContent = "The number was INCORRECT. Correct number is lower!"
    }
}

submitButton.addEventListener("click", checkNumber);