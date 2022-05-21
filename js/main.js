//The following is a global variable used to track the player's score.
let scoreCounter = 0;

/*The following function generates a random number from
one to three and assigns it a value of either rock, paper
or scissors.*/

const generateNumber = () => {
	return Math.floor(Math.random() * 3);
};

const computerChooseThrow = () => {
	const numberKey = generateNumber();
	//The following line is for testing that the random number generation worked.
	console.log(numberKey);
	switch(numberKey){
	case 0:
		return "rock";
	case 1:
		return "paper";
	case 2:
		return "scissors";
	default:
		throw new Error("Invalid number provided.");
	}
};

console.log(computerChooseThrow());

//The following block of code receives user input of rock.
const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", e => {
	e.preventDefault();
	console.log("Rock button was pushed.");
	const computerChoice = computerChooseThrow();
	if(computerChoice == "rock"){
		draw();
		displayRock();
	} else if(computerChoice == "paper"){
		lose();
		displayPaper();
	} else if(computerChoice == "scissors"){
		win();
		displayScissors();
	}
});

//The following block of code receives user input of paper.
const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", e => {
	e.preventDefault();
	console.log("Paper button was pushed.");
	const computerChoice = computerChooseThrow();
	if(computerChoice == "rock"){
		win();
		displayRock();
	} else if(computerChoice == "paper"){
		draw();
		displayPaper();
	} else if(computerChoice == "scissors"){
		lose();
		displayScissors();
	}
});

//The following block of code receives user input of scissors.
const scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click", e => {
	e.preventDefault();
	console.log("Scissors button was pushed.");
	const computerChoice = computerChooseThrow();
	if(computerChoice == "rock"){
		lose();
		displayRock();
	} else if(computerChoice == "paper"){
		win();
		displayPaper();
	} else if(computerChoice == "scissors"){
		draw();
		displayScissors();
	}
});

const draw = () => {

};

//The following function resets the scoreCounter variable to zero displays the new score.
const lose = () => {
	scoreCounter = 0;
	document.getElementById("score-board").textContent = scoreCounter;
};

//The following function increments the scoreCounter variable and displays the new score.
const win = () => {
	scoreCounter++;
	document.getElementById("score-board").textContent = scoreCounter;
};

const displayRock = () => {
	const section = document.querySelector(".display-area");
	section.textContent = "Computer has chosen rock! ✊";
};

const displayPaper = () => {
	const section = document.querySelector(".display-area");
	section.textContent = "Computer has chosen paper! 🤚";
};

const displayScissors = () => {
	const section = document.querySelector(".display-area");
	section.textContent = "Computer has chosen scissors! ✌️";
};

//displayRock();
//displayPaper();
//displayScissors();
