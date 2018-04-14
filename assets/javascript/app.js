$(document).ready(function() {
	setTimeout(countDown,1000);

	function countDown() {
	   timeLeft--;
	   if (timeLeft > 0) {
	      setTimeout(countDown,1000);
	   }
	   $('#timer').html('Time remaining: ' + timeLeft + ' seconds');
	   if (timeLeft < 1) {
	   	endQuiz();
	   }
	}

	var timeLeft = 90;
	var answersCorrect = 0;

	var q0 = {
		question: 'What is Dwight Schrute\'s middle name?',
		answers: ['Kurt', 'Mose', 'Leslie', 'Joseph'],
		correctAnswer: 'Kurt'
	};
	var q1 = {
		question: 'Where did Andy Bernard go to college?',
		answers: ['Dartmouth College', 'The University of Scranton', 'Cornell University', 'UC Berkeley'],
		correctAnswer: 'Cornell University'
	};
	var q2 = {
		question: 'What county in Pennsylvania is the Dunder Mifflin Scranton branch located?',
		answers: ['Muskingum County', 'Lackawanna County', 'Creek County', 'River County'],
		correctAnswer: 'Lackawanna County'
	};
	var q3 = {
		question: 'In S2E12 \"The Injury\": How is Michael injured?',
		answers: ['Burnt his foot on a George Foreman Grill', 'He\'s run over by a co-worker', 'Crashes his car into a telephone pole', 'Dwight kicks him in the head'],
		correctAnswer: 'Burnt his foot on a George Foreman Grill'
	};
	var q4 = {
		question: 'What is Andy\'s nickname for Jim?',
		answers: ['Jimbo', 'Fat Halpert', 'Big Tuna', 'Jimothy'],
		correctAnswer: 'Big Tuna'
	};
	var q5 = {
		question: 'What is Creed\'s job at Dunder Mifflin?',
		answers: ['Quality Assurance', 'Accountant', 'Customer Service', 'Sales'],
		correctAnswer: 'Quality Assurance'
	};
	var q6 = {
		question: 'Where does Pam move to when she goes to art school?',
		answers: ['New York', 'Philadelphia', 'Austin', 'Seattle'],
		correctAnswer: 'New York'
	};
	var q7 = {
		question: 'In S2E17 \"Dwight\'s Speech\": What infamous dictator\'s speech does Jim trick Dwight into giving at the sales conference?',
		answers: ['Adolf Hitler', 'Kim Jong Il', 'Joseph Stalin', 'Benito Mussolini'],
		correctAnswer: 'Benito Mussolini'
	};
	var q8 = {
		question: 'What band was Creed a member of in the 60\'s?',
		answers: ['The Who', 'Three Dog Night', 'The Turtles', 'The Grass Roots'],
		correctAnswer: 'The Grass Roots'
	};
	var q9 = {
		question: 'Where does Dwight work when he is fired from Dunder Mifflin?',
		answers: ['OfficeMax', 'Comp USA', 'Office Depot', 'Staples'],
		correctAnswer: 'Staples'
	};

	var questions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];

	var i = 0;

	function endQuiz() {
		$('#button-div').empty();
		$('#questionDiv').html('Game Over! You answered ' + 
			answersCorrect + ' out of ' + questions.length + 
			' questions correctly.').attr('id', 'end');

	};
	function renderQuestion() {
		$('#question').html(questions[i].question)
		for (j = 0; j < questions[i].answers.length; j++) {
			$('#btn'+j).html(questions[i].answers[j])
			$('#btn'+j).attr('data-answer', questions[i].correctAnswer);
			$('#btn'+j).attr('btn-guess', questions[i].answers[j]);

		}
	};

	renderQuestion();

	$('button').on('click', function() {
		var answer = $(this).attr('data-answer');
		var guess = $(this).attr('btn-guess');
		console.log(answer + ' ' + guess);
		if (answer == guess) {
			answersCorrect++;
		};
		i++;
		if (i < questions.length) {
			renderQuestion();
		} else {
			endQuiz();
		};	
	});
});

