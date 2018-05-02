// Call function on wrong answer
$(document).ready(function() {

    var index = 0;
    var correct = 0;
    var wrong = 0;

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

    // Call function for wrong answer
    function answerWrong() {
        wrong++;
        alert("Wrong");
        console.log("wrong");
    }

    // Call function for right answer
    function answerCorrect() {
        correct++;
        alert("This is correct");
        console.log("correct");
    }
                 
$(document).ready(function() {

    let quest = [
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
        }
    ];
    

    function takeQuiz() {
        // index = 0;
        $('.timer').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            
            event.preventDefault();

            countdownTimer.start();

            var selected = "";

            for (var i = 0; i < quest.length; i++) {
                
                $(".question").append("<h3>" + quest[i].question + "</h3>");
                console.log(quest[i].question);

                for (c = 0; c < 4; c++) {
                    // $(".question").append("<input type='radio' name='" + c + "' value='" + quest[i].answers[c] + "'/>" + quest[i].answers[c]);

                    $(".question").append("<input type='radio' id=radio_'" + c + "' name='" + c + "' value='" + quest[i].answers[c] + "'/>" + quest[i].answers[c]);

                    console.log('(' + i + ') ' + quest[i].answers[c]);
                }
                $(".question").append("<h3>" + quest[i].answer + "</h3>");
                console.log(quest[i].answer);

                console.log('Selected = ' + $(this.val));

            }

            $(document).ready(function () {    

                $('#radio_1').prop('checked', true);
                $('#radio_2').prop('checked', true);
                $('#radio_3').prop('checked', true);
                $('#radio_4').prop('checked', true);

            });

            $(document).ready(function () {    

                $("#radio_1, #radio_2", "#radio_3").change(function () {
                    if ($("#radio_1").is(":checked")) {
                        $(".answers").append('#radio_1').show();
                    }
                    else if ($("#radio_2").is(":checked")) {
                        $(".answers").append('#radio_2').show();
                    }
                    else 
                    $(".answers").append('#radio_3').show();
                });        
            });


            $('.done').append('<button id="doneButton">Done</button>');
            $('#doneButton').on('click', function() {

                event.preventDefault();

                countdownTimer.stop();
            });
        });
    }		

        // Validate if answer is correct
        takeQuiz();
        $('.answerchoice').on('click', function() {
        
            event.preventDefault();

            for (var i = 0; i < quest.length; i++) {

                var answerChecked = $('input[quest[i].this]:checked').val();
                console.log(answerChecked);

                $(".answers").append(answerChecked);
                
                console.log('quest.answer = ' + quest.answer);
                console.log($('THIS = ' + this));
    
                if(this.id == quest.answer) {
                    correct++;
                    console.log('correct = ' + correct);

                } else {
                    wrong++;
                    console.log('wrong = ' + wrong);
                }
            }

            showScore();
        
            // Show the final score
            function showScore() {
                $('.question').empty();
                $('.question').append("<h2><p>" + correct + " correct</p></h2>");
                $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
                countdownTimer.stop();
                $('.timer').empty();
            }
        });
    });
});
