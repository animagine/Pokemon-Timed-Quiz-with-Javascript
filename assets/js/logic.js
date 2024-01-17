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

//Defiining audio variables
var correctsound = new Audio('./assets/sfx/correct.wav');
var incorrectsound = new Audio('./assets/sfx/incorrect.wav');

// Initialising quiz timer
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

//Setting up quiz funtionality
function Quiz() {
   
    let currentQuestionIndex = 0;

    // Function to display the current question and options
    function displayQuestion() {
        if (currentQuestionIndex < Quiz.length) {
            // Get the current question and options
            const currentQuestion = Quiz[currentQuestionIndex];
            const questionOutput = currentQuestion.question;
            const answerChoices = currentQuestion.answers;
            const correctChoice = currentQuestion.correctAnswer;

            // Display the question
            questions.textContent = questionOutput;

            // Render a list of buttons for the options
            choices.innerHTML = "";
            for (let i = 0; i < answerChoices.length; i++) {
                const li = document.createElement("li");
                const choiceBtn = document.createElement("button");
                choiceBtn.textContent = answerChoices[i];

                // Add a click event listener to the button to move to next question
                choiceBtn.addEventListener('click', function () {
                    // Register user's choice
                    var userChoice = choiceBtn.textContent;
                    if(userChoice === correctChoice) {
                        //feedback correct
                        feedback.setAttribute("class","feedback start");
                        feedback.textContent = "Correct!"
                        //Play correct audio
                        correctsound.play();
                    } else {
                        //feedback wrong!
                        feedback.setAttribute("class","feedback start");
                        feedback.textContent = "Wrong!"
                        //cut time by 10s
                        timeLeft = timeLeft - 10;
                        //Play incorrect audio
                        incorrectsound.play();
                    };

                    
                    setTimeout(function(){
                        feedback.setAttribute("class","feedback hide");
                    }, 1000); 

                    currentQuestionIndex++;
                    displayQuestion();
                });

                li.appendChild(choiceBtn);
                choices.appendChild(li);
            }
        } else {
            // Quiz end
            finalScore = timeLeft;
            console.log("Quiz finished");
            console.log("The final score is "+ finalScore);
            endGame();
        }
    }

    displayQuestion();
}

//Event listener to trigger quiz start and timer
start.addEventListener("click",function() {
    countdown();    //When clicked start the countdown
    startScreen.setAttribute("class","hide"); //Hide start-screen
    questionsPage.setAttribute("class","start"); //Move on to the questions in questions.js
    Quiz();
});

