// Getting variables from the HTML document using the DOM

var timer = document.getElementById('time'); 
var timerText = document.getElementById('Timer');
var startScreen = document.getElementById('start-screen');
var start = document.getElementById('start');
var endScreen = document.getElementById('end-screen');
var score = document.getElementById('final-score');
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var feedback = document.getElementById('feedback'); 
var questionsPage = document.getElementById('questions');
var questions = document.getElementById('question-title');
var choices = document.getElementById('choices');


// Initialize quiz timer
var timeLeft = 100; 
function countdown() {
    // Using 'setInterval()' method to count down every 1000ms
    var timeInterval = setInterval(function(){
        //conditional statement for counter for when the value reaches 0
        if (timeLeft > 0) {
            timer.textContent = timeLeft + 's';
            timeLeft--;
        } else {
            timer.textContent = 0 + 's';
            endGame();
        }
    }, 1000);
};