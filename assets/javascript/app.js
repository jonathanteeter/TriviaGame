// Call function on wrong answer
$(document).ready(function() {

    var index = 0;
    var correct = 0;
    var wrong = 0;

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
        return;
    }

    // Call function or right answer
    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    // Show the final score
    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    }

    var countdownTimer = {
        time: 30,
        reset: function() {
            this.time = 10;
            $('.timer').html('<h3>'+ this.time + ' seconds remaining</h3>');
        },

        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },

        stop: function() {
            clearInterval(counter);
        },

        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }

            else {
                index++;
                //answerCorrect();
                answerWrong();
                countdownTimer.reset();
                // if (index < questionArray.length) {
                //     loadQuestion(index);
                // }
                // else {
                //     $(".answerchoice").hide();
                showScore();
                // }
            }
        }
    }
                 
$(document).ready(function() {

    // var Question = function(config) {
    //     this.question = config.question;
    //     this.answers = config.answers;
    //     this.answer = config.answer;
    // }
        
    var quest = [
        {
        question: 'Who commanded the invasion of Britain in the year 55 BC ?',
        answers: ['Napoleon', 'Alexander the Great', 'Julius Ceasar', 'Hannibal'],
        answer: 'Julius Caesar'
        },
        {
        question: 'What was Johann Gutenberg\'s revolutionary invention in AD 1439 ?',
        answers: ['Cotton Gin', 'Printing Press', 'Guns', 'Compass'],
        answer: 'Printing Press'
        },
        quest3 = {
        question: 'What country became a world-class power after defeating the Spanish Armada in AD 1588 ?',
        answers: ['England', 'Denmark', 'Portugal', 'France'],
        answer: 'England'
        },
        quest4 = {
        question: 'Genghis Khan begins his conquest of what continent in AD 1206 ?',
        answers: ['Africa', 'Europe', 'Asia', 'Australia'],
        answer: 'Asia'
        },
        quest5 = {
        question: 'What empire fell in the year AD 476 ?',
        answers: ['First Persian Empire', 'Caliphate', 'Mongol Empire', 'Roman Empire'],
        answer: 'Roman Empire'
        }
    ];
    

    // var oneQuestion = new Question(quest1);
    // var twoQuestion = new Question(quest2);
    // var threeQuestion = new Question(quest3);
    // var fourQuestion = new Question(quest4);
    // var fiveQuestion = new Question(quest5);

    // var questionArray = [quest1, quest2, quest3, quest4, quest5];
        
    // function loadQuestion(questionSelection) {

    //     countdownTimer.reset();

    //     for(var i = 0; i < questionArray.length; i++) {

    //         $(".question").append("<h3>" + questionArray[questionSelection].question + "</h3>");
    //         $("#buttonA").append(questionArray[i].answers[0]).show();
    //         $("#buttonB").append(questionArray[i].answers[1]).show();
    //         $("#buttonC").append(questionArray[i].answers[2]).show();
    //         $("#buttonD").append(questionArray[i].answers[3]).show();

    //     }
    // does this work?
        // getAnswer();  
        // nextQuestion(index);
    // }

    // function nextQuestion() {
    //     index = index++;
    //     console.log(index);
    // }

    function setup() {
        // index = 0;
        $('.timer').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            
            event.preventDefault();

            countdownTimer.start();

            for(var i = 0; i < quest.length; i++) {
                
                $(".question").append("<h3>" + quest[i].question + "</h3>");
                console.log(quest[i].question);

                for(c = 0; c < 4; c++) {
                    $(".question").append("<input type='radio' name='answers' value='quest1.answers[i]'/>" + quest[i].answers[c]);
                    console.log('(' + i + ') ' + quest[i].answers[c]);
                }
                $(".question").append("<h3>" + quest[i].answer + "</h3>");
                console.log(quest[i].answer);

            }
            $('.done').append('<button id="doneButton">Done</button>');
            $('#doneButton').on('click', function() {

                event.preventDefault();

                countdownTimer.stop();
            });
        });
    }		

    function getAnswer() {

        nextQuestion();
        $('.answerchoice').on('click', function() {

            console.log('alert', index);

            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            // loadQuestion(index);
        })
    }

        // Validate if answer is correct
        setup();
        $('.answerchoice').on('click', function() {
        
            // event.preventDefault();
            console.log($('THIS = ' + this));

            if(this.id == 'buttonA') {
                var answerChosen = 'A';
            } else if(this.id == 'buttonB') {
                answerChosen = 'B';
            } else if (this.id == 'buttonC') {
                answerChosen = 'C';
            } else if (this.id == 'buttonD') {
                answerChosen = 'D';
            } 
            
            if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
                answerCorrect();
            } else if (answerChosen == 'A') {
                answerWrong();
            }
            if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
                answerCorrect();
            } else if (answerChosen == 'B') {
                answerWrong();
            }
            if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
                answerCorrect();
            } else if (answerChosen == 'C') {
                answerWrong();
            }
            if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
                answerCorrect();
            } else if (answerChosen == 'D') {
                answerWrong();
            }

            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            index++;

            if (index < questionArray.length) {
                // loadQuestion(index);

            } else {
                $(".answerchoice").hide();
                showScore();
            }
        });
    });
});
