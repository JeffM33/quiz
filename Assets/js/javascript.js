var timerEl = document.getElementById('countdown');
var startQuizEl = document.querySelector("#startStop");
var resetQuizEl = document.querySelector("#reset");
var timeLeft = 0;
var questions = [
    {
        prompt: "How do you turn on a computer?\n(a) Hit the power Button\n\ (b) Pour water on it\n (c) pull the plug out of the wall",
        answer: "a"
    },
    {
        prompt: "How do you turn on a computer?\n(a) Hit the power Button\n\ (b) Pour water on it\n (c) pull the plug out of the wall",
        answer: "a"
    }
];
var score = 0;

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
    startGame();
})

//calling reset button to set time to 0 and stop the quiz.
resetQuizEl.addEventListener("click", function(){
    timeLeft = 0
    countdown(timeLeft);

})


//Making a for loop to watch the questions, and make sure we don't run out
function startGame(){
for(var i = 0; i < questions.length; i++){
    // making if statement to watch for time element
    if(timeLeft > 0){
        var response = window.prompt(questions[i].prompt)
        if(response === questions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong");
        }
        
    } else {

    }

    
}
alert("Out of " + questions.length + " you got " + score + " right!");

}

// Need to make a correct/ incorrect score
// Need to store local high scores
// incorrect answers need to affect the timer negatively
// put condition in if timer =0 game over
// need additional condition to end game if all questions are answered.
// Need to save initials to high score kept in local storage 
// Need start over or finish game at the end
// Need alert box to start quiz