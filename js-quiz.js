//timer
var total_seconds =30*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);
var quizetime = document.createAttribute("quiz-time-left")
var test = document.createAttribute("test")

function CheckTime(){
    document.getElementById("quize-time-left").innerHTML
    ='Time Left: ' + c_minutes + 'minutes' + c_seconds + 'seconds' ;
    if(total_seconds <=0) {
        setTimeout('test', 1);
    }
    else{
        total_seconds = total_seconds -1;
        c_minutes = parseInt(total_seconds/60);
        c_seconds = parseInt(total_seconds%60);
		setTimeout("CheckTime()", 1000);

    }
}
setTimeout("CheckTime()", 1000);





//Test starts here
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is the method you use to add an on click event?", ".addEventListener", "Click", ".onclick", "C" ],
	[ "What is the HTML tag under which one can write the JavaScript code??", "javascript", "script", "js", "B" ],
	[ "What is the correct syntax for referring to an external script called “geek.js”?", "script src='geek.js'", "script href='geek.js'", "script ref='geek.js'", "A" ],
	[ "What kid of language is javascript?", "scripting", "programmign", "dynamic", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
        alert("That's Correct")
		correct++;
    }
    
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
