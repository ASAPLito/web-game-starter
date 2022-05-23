//The following is a global variable used to track the player's score.
let scoreCounter = 0;

//The following block of code plays a hidden animation that is made visible
//when the player wins the game.
const winAnimation = document.createElement("img");
winAnimation.src = "Assets/confetti.gif";
winAnimation.className = "win-animation";
winAnimation.style.position = "fixed";
winAnimation.style.top = "0";
winAnimation.style.left = "0";
winAnimation.style.width = "100%";
winAnimation.style.height = "100vh";
winAnimation.style.objectFit = "cover";
winAnimation.style.zIndex = "1";
winAnimation.style.display = "none";
document.body.append(winAnimation);

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
		displayRock();
		draw();
	} else if(computerChoice == "paper"){
		displayPaper();
		lose();
	} else if(computerChoice == "scissors"){
		displayScissors();
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
		displayRock();
		win();
	} else if(computerChoice == "paper"){
		displayPaper();
		draw();
	} else if(computerChoice == "scissors"){
		displayScissors();
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
		displayRock();
		lose();
	} else if(computerChoice == "paper"){
		displayPaper();
		win();
	} else if(computerChoice == "scissors"){
		displayScissors();
		draw();
	}
});

const draw = () => {
	const section = document.getElementById("display-area");
	const newLine = document.createElement("br");
	section.append(newLine);
	section.append("It's a draw!");
};

//The following function resets the scoreCounter variable to zero displays the new score.
const lose = () => {
	scoreCounter = 0;
	document.getElementById("score-board").textContent = scoreCounter;
	const section = document.getElementById("display-area");
	const newLine = document.createElement("br");
	section.append(newLine);
	section.append("You lost!");
};

//The following function increments the scoreCounter variable and displays the new score.
const win = () => {
	scoreCounter++;
	document.getElementById("score-board").textContent = scoreCounter;
	const section = document.getElementById("display-area");
	const newLine = document.createElement("br");
	section.append(newLine);
	section.append("You won!");
	winAnimation.style.display = "block";
	setTimeout(() => winAnimation.style.display = "none", 1500);
};

const displayRock = () => {
	const section = document.getElementById("display-area");
	section.textContent = "Computer has chosen rock! ✊";
};

const displayPaper = () => {
	const section = document.getElementById("display-area");
	section.textContent = "Computer has chosen paper! 🤚";
};

const displayScissors = () => {
	const section = document.getElementById("display-area");
	section.textContent = "Computer has chosen scissors! ✌️";
};
