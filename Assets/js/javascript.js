var timerEl = document.getElementById('countdown');
var startQuizEl = document.querySelector("#startStop");
var resetQuizEl = document.querySelector("#reset");
var timeLeft = 0;

// Timer countdown Function
function countdown(timeLeft) { 

    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = " "+ timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = " "+ timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = ' Out of Time ';
        clearInterval(timeInterval);
      }
    }, 1000);
  }


//Calling start button adding event listener to start countdown on timer.  
startQuizEl.addEventListener("click", function(){
    timeLeft = 90
    countdown(timeLeft);

})

//calling reset button to set time to 0 and stop the quiz.
resetQuizEl.addEventListener("click", function(){
    timeLeft = 0
    countdown(timeLeft);

})

// Need to make a correct/ incorrect score
// Need to store local high scores
// incorrect answers need to affect the timer negatively
// put condition in if timer =0 game over
// need additional condition to end game if all questions are answered.
// Need to save initials to high score kept in local storage 
// Need start over or finish game at the end
// Need alert box to start quiz