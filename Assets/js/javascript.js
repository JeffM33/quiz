var timerEl = document.getElementById('countdown');

// Timer countdown Function
function countdown() {
    var timeLeft = 90; 

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


//Calling countdown function on page to start when page is loaded  
countdown();

// Need to make a correct/ incorrect score
// Need to store local high scores
// incorrect answers need to affect the timer negatively
// put condition in if timer =0 game over
// need additional condition to end game if all questions are answered.
// Need to save initials to high score kept in local storage 
// Need start over or finish game at the end
// Need alert box to start quiz