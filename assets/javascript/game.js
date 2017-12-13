// var bank
//=======================================================

// array of book titles 
var wordBank = ["THECATINTHEHAT", "GREENEGGSANDHAM", "THELORAX", "THEFOOTBOOK", "IFIRANAZOO", "ONBEYONDZEBRA", "TENAPPLESUPONTOP", "HOPONPOP", "HORTONHEARSAWHO", "HORTONHATCHESTHEEGG"]

// wrong guesses
var wrongArray = [];

// current book title the user is trying to guess
var currentWord;

// number of guesses left until gameover
var guessesLeft =10;

// underscores replacing letters in book title
var underScores = []; 

// remaining letters not choosen by user
var remainingLetters = 0;

// the alphabet
var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

// wins
var wins =0;

// losses
var losses =0;


// starting the game chooses a book title
//======================================================

function startGame(){ 
	
 underScores = []; 
 guessesLeft = 10;
 wrongArray = [];
	currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
	remainingLetters = currentWord.length;


// for loop used to change currenWord into underscores 
//=======================================================
	// document.querySelector("#title").innerHTML = "Book Title: ";

	for (var i = 0; i < currentWord.length; i++){
	underScores.push("_");

	// document.querySelector("#title").append(underScores[i]);
	// document.querySelector("#title").append(" ");

	}

document.getElementById("wordBank");



console.log("first currentword is " ,currentWord);




	document.querySelector("#title").innerHTML = "Book Title: " + underScores + "<br><br><br><br>";
	document.querySelector("#guesses").innerHTML = "Remaining Guesses: " + guessesLeft + "<br><br><br><br>";
	document.querySelector("#wins").innerHTML = "Wins: " + wins + "<br><br><br><br>";
	document.querySelector("#losses").innerHTML = "Losses: " + losses + "<br><br><br><br>";
	document.querySelector("#letters").innerHTML = "Letters Guessed: " +  wrongArray + "<br><br><br><br>";
	document.querySelector("#button").value = "Play again" + " ";

console.log("remaining letters is", remainingLetters);
console.log("guesses left is",guessesLeft);
console.log("underScores",underScores);

}
//========================================================

	document.onkeyup = function(event) {
	var keycode = event.keyCode;
	var letter = String.fromCharCode(keycode);
	console.log(letter)
	var correct;
	// position of letter guessed by user
	var rightArray = [];

	for(var i=0; i < currentWord.length;i++) {
    	if (currentWord[i] === letter) {
    		rightArray.push(i);
    		correct = "Y";
    	}
    }
    	//got it correct
    	console.log("right array is ", rightArray);
		if (correct === "Y"){
			remainingLetters = remainingLetters - rightArray.length;
			for(var j=0; j< rightArray.length;j++){
				underScores[rightArray[j]] = letter;
				if (remainingLetters === 0 ) {
					wins++;


					// if (wins === 3) {
					// 	alert("Congraulations You are the Best!");
							
					// }
					
		}
	} 
		// incorrect guesses
			console.log("remaining letters ", remainingLetters);
		}else{
			guessesLeft--;
			wrongArray.push(letter);
			if (guessesLeft === 0){
				losses++;
				startGame();
			}
			console.log("guesses should minus", guessesLeft);
		}

		
	document.querySelector("#title").innerHTML = "Book Title: " + underScores + "<br><br><br><br>";
	document.querySelector("#guesses").innerHTML = "Remaining Guesses: " + guessesLeft + "<br><br><br><br>";
	document.querySelector("#wins").innerHTML = "Wins: " + wins + "<br><br><br><br>";
	document.querySelector("#losses").innerHTML = "Losses: " + losses + "<br><br><br><br>";
	document.querySelector("#letters").innerHTML = "Letters Guessed: " +  wrongArray + "<br><br><br><br>";


}

	  




 

//stuff left to do 
//===================
// create a prompt for users to guess full book title 
// remove commas inbetween underscores 
//========================================================
//bonus objectives 
//============================
// create a reset game function 
// create an animation to let user know they guessed book title correctly 
// create a sound responce for users wins and losses  