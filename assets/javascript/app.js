// global variables

  $(document).ready(function() {

    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function() {
            this.time = 30;
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
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                }
                else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    }
                 
$(document).ready(function() {

    var Question = function(config) {
        this.question = config.question;
        this.choices = config.answers;
        this.answer = config.answer;
        }
        
        var quest1;
        var quest2;
        var quest3;
        var quest4;
        var quest5;
        
        quest1 = {
        question: 'Who commanded the invasion of Britain in the year 55 BC ?',
        answers: ['Napoleon', 'Julius Caesar', 'Hannibal', 'Alexander the Great'],
        answer: 'Julius Caesar'
        }
        
        quest2 = {
        question: 'What was Johann Gutenberg\'s revolutionary invention in AD 1439 ?',
        answers: ['Cotton Gin', 'Printing Press', 'Guns', 'Compass'],
        answer: 'Printing Press'
        }
        
        quest3 = {
        question: 'What country became a world-class power after defeating the Spanish Armada in AD 1588 ?',
        answers: ['England', 'Germany', 'Portugal', 'France'],
        answer: 'England'
        }
        
        quest4 = {
        question: 'Genghis Khan begins his conquest of what continent in AD 1206 ?',
        answers: ['Africa', 'Europe', 'Asia', 'Australia'],
        answer: 'Asia'
        }
        
        quest5 = {
        question: 'What empire fell in the year AD 476 ?',
        answers: ['First Persian Empire', 'Caliphate', 'Mongol Empire', 'Roman Empire'],
        answer: 'Roman Empire'
        }

        $(".question").html("<h3>" + quest1.question + "</h3>");
        console.log(quest1.question);
        for(i = 0; i < 4; i++) {
            $(".question").html("<h4>" + quest1.answers[i] + "</h4>");
            console.log('(' + i + ') ' + quest1.answers[i]);
        }
        $(".question").html("<h3>" + quest1.answers + "</h3>");
        console.log(quest1.answer);

        $(".question").html("<h3>" + quest2.question + "</h3>");
        console.log(quest2.question);
        for(i = 0; i < 4; i++) {
            $(".question").html("<h4>" + quest2.answers[i] + "</h4>");
            console.log('(' + i + ') ' + quest2.answers[i]);
        }
        $(".question").html("<h3>" + quest2.answer + "</h3>");
        console.log(quest2.answer);

        $(".question").html("<h3>" + quest3.question + "</h3>");
        console.log(quest3.question);
        for(i = 0; i < 4; i++) {
            $(".question").html("<h4>" + quest3.answers[i] + "</h4>");
            console.log('(' + i + ') ' + quest3.answers[i]);
        }
        $(".question").html("<h3>" + quest3.answer + "</h3>");
        console.log(quest3.answer);

        $(".question").html("<h3>" + quest4.question + "</h3>");
        console.log(quest4.question);
        for(i = 0; i < 4; i++) {
            $(".question").html("<h4>" + quest4.answers[i] + "</h4>");
            console.log('(' + i + ') ' + quest4.answers[i]);
        }
        $(".question").html("<h3>" + quest4.answer + "</h3>");
        console.log(quest4.answer);

        $(".question").html("<h3>" + quest5.question + "</h3>");
        console.log(quest5.question);
        for(i = 0; i < 4; i++) {
            $(".question").html("<h4>" + quest5.answers[i] + "</h4>");
            console.log('(' + i + ') ' + quest5.answers[i]);
        }
        $(".question").html("<h3>" + quest5.answer + "</h3>");
        console.log(quest5.answer);

        var oneQuestion = new Question(quest1);
        var twoQuestion = new Question(quest2);
        var threeQuestion = new Question(quest3);
        var fourQuestion = new Question(quest4);
        var fiveQuestion = new Question(quest5);

        var questionArray = [oneQuestion, twoQuestion, threeQuestion, fourQuestion, fiveQuestion];
          
        function loadQuestion(questionSelection) {
            console.log(Question);
            countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[Question].answers[0]).show();
        $("#buttonB").text(questionArray[Question].answers[1]).show();
        $("#buttonC").text(questionArray[Question].answers[2]).show();
        $("#buttonD").text(questionArray[Question].answers[3]).show();

        // does this work?
         getAnswer();  
         nextQuestion(index);
        }

        function nextQuestion() {
        	index = index++;
        	console.log(index);
        }
        // End does this work

        function setup() {
            index = 0;
            $('.question').append('<button id="startButton">Start</button>');
            $('#startButton').on('click', function() {
                $(this).hide();
                countdownTimer.start();
                loadQuestion(index);
            });
        }		

        function getAnswer() {

        //  nextQuestion();
            $('.answerchoice').on('click', function() {
            console.log('alert', index);
                index++;
                console.log('click', index);
                $(".question").text('');
                $("#buttonA").text('');
                $("#buttonB").text('');
                $("#buttonC").text('');
                $("#buttonD").text('');
                loadQuestion();
            })
        }

        function answerCorrect() {
            correct++;
            alert("Correct!");
            console.log("correct");
        }

        function answerWrong() {
            wrong++;
            alert("Incorrect!");
            console.log("wrong");
        }

        function showScore() {
            $('.question').empty();
            $('.question').append("<h2><p>" + correct + " correct</p></h2>");
            $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
            countdownTimer.stop();
            $('.timer').empty();
        }

        setup();
        $('.answerchoice').on('click', function() {
        console.log($(this));
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
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
        });

    });
});


