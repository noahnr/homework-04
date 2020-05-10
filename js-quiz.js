//timer
	var count = 100;
	var interval = setInterval(function(){
	  document.getElementById('count').innerHTML=count;
	  count--;
	  if (count === 0){
		clearInterval(interval);
		document.getElementById('count').innerHTML='Done';
		// or...
		//alert("You're out of time!");
		document.getElementById("test").innerHTML = window.addEventListener("load", renderQuestion, false);
	  }
	}, 1000);










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