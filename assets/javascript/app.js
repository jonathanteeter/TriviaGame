// Call function on wrong answer
$(document).ready(function() {

    var index = 0;
    var correct = 0;
    var wrong = 0;

    var countdownTimer = {
        time: 30,
        reset: function() {
            // Set timer back to 30 when reset function is called
            this.time = 30;
            $('.timer').html('<h3>'+ this.time + ' seconds remaining</h3>');
        },

        start: function() {
            // Set timer count at 1 second interval
            counter = setInterval(countdownTimer.count, 1000);
        },

        stop: function() {
            clearInterval(counter);
        },

        count: function() {
            // decrement timer from 'time' set
            countdownTimer.time--;
            console.log(countdownTimer.time);
            $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
                
            else {
                countdownTimer.reset();
            }
        }
    }

    // Increment counter for wrong answer
    function answerWrong() {
        wrong++;
    }

    // Increment counter for right answer
    function answerCorrect() {
        correct++;
    }
                 
// Setup quiz questions in an array
$(document).ready(function() {

    let quest = [
        {
            question: 'Who commanded the invasion of Britain in the year 55 BC ?',
            answers: ['Napoleon', 'Alexander the Great', 'Julius Ceasar', 'Hannibal'],
            answer: 'Julius Ceasar'
        },
        {
            question: 'What was Johann Gutenberg\'s revolutionary invention in AD 1439 ?',
            answers: ['Cotton Gin', 'Printing Press', 'Guns', 'Compass'],
            answer: 'Printing Press'
        },
        {
            question: 'What country became a world-class power after defeating the Spanish Armada in AD 1588 ?',
            answers: ['England', 'Denmark', 'Portugal', 'France'],
            answer: 'England'
        },
        {
            question: 'Genghis Khan begins his conquest of what continent in AD 1206 ?',
            answers: ['Africa', 'Europe', 'Asia', 'Australia'],
            answer: 'Asia'
        },
        {
            question: 'What empire fell in the year AD 476 ?',
            answers: ['First Persian Empire', 'Caliphate', 'Mongol Empire', 'Roman Empire'],
            answer: 'Roman Empire'
        },
        {
            question: 'The Battle of Hastings occured in AD 1066 and is part of what aggression ?',
            answers: ['The Norman conquest of England', 'Muslim invasion of Spain', 'Mongols overrun eastern Europe', 'Jerusalem falls to First Crusade'],
            answer: 'The Norman conquest of England'
        },
        {
            question: 'What event led to the Protestant Reformation in AD 1517 ?',
            answers: ['Napolean crowned Emperor of France', 'Dutch declares independance from Spain', 'Martin Luthers 95 theses', 'Ottoman Turks conquer Hungary'],
            answer: 'Martin Luthers 95 theses'
        },
        {
            question: 'The first permanent European settlement is built in the Americas in AD 1496 where ?',
            answers: ['Veracruz', 'Saint Augustine', 'Jamestown', 'Santo Domingo'],
            answer: 'Santo Domingo'
        }
    ];
    
    var total = quest.length;

    function takeQuiz() {
        // Create a Start button and post the quiz to both the web page and DOM
        $('.timer').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            
            event.preventDefault();

            countdownTimer.start();

            var selected = "";

            for (var i = 0; i < total; i++) {
                
                // Questions posted to the DOM
                $(".question").append("<h3>" + quest[i].question + "</h3>");
                console.log(quest[i].question);

                // Questions posted to the web page as radio buttons
                for (c = 0; c < 4; c++) {

                    $(".question").append("<input type='radio' id=radio_'" + c + "' name ='" + "type-" + i + 
                    "' value='" + quest[i].answers[c] + "'/>" + quest[i].answers[c]);

                    console.log('(' + i + ') ' + quest[i].answers[c]);
                }
                // $(".question").append("<h3>" + quest[i].answer + "</h3>");
                // console.log(quest[i].answer);

                console.log('Selected = ' + $(this.val));

            }

            // Function to Show the final score
            function showScore() {

                var answered = correct + wrong;
                var correctPcnt = Math.round((correct / total) * 100);
                var wrongPcnt = Math.round((wrong / total) * 100);

                $('.question').empty();
                $('.question').append("<h2><p>" + correct + " Correct ( " + correctPcnt + "% )</p></h2>");
                $('.question').append("<h2><p>" + wrong + " Incorrect ( " + wrongPcnt + "% )</p></h2>");
                $('.question').append("<h2><p>" + answered + " Answered of " + total + " Questions</p></h2>");
                countdownTimer.stop();
                $('.timer').empty();
            }
            
            // Create a Done button and determine which questions were answered right or wrong
            // NEED TO REFACTOR THE '.each' CODE
            $('.done').append('<button id="doneButton">Done</button>');
            $('#doneButton').on('click', function() {

                event.preventDefault();

                countdownTimer.stop();

                $.each($("input[name='type-0']:checked"), function() {
                    console.log($(this).val());
                    
                    if ($(this).val() === quest[0].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-1']:checked"), function() {
                    console.log($(this).val());
                    
                    if ($(this).val() === quest[1].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-2']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[2].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-3']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[3].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-4']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[4].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-5']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[5].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-6']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[6].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                $.each($("input[name='type-7']:checked"), function() {

                    console.log($(this).val());
                    
                    if ($(this).val() === quest[7].answer) {
                        answerCorrect();
                    } else {
                        console.log($(this).val());
                        answerWrong();
                    }
                });

                showScore();
                                
                $(".done").hide();
            });
        });
    }		

    takeQuiz();
    });
});
