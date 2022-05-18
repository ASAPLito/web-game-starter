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
	} else if(computerChoice == "paper"){
		lose();
	} else if(computerChoice == "scissors"){
		win();
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
	} else if(computerChoice == "paper"){
		draw();
	} else if(computerChoice == "scissors"){
		lose();
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
	} else if(computerChoice == "paper"){
		win();
	} else if(computerChoice == "scissors"){
		draw();
	}
});

const draw = () => {

};

const lose = () => {
	scoreCounter = 0;
	document.getElementById("score-board").textContent = scoreCounter;
};

const win = () => {
	scoreCounter++;
	document.getElementById("score-board").textContent = scoreCounter;
};