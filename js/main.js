/*The following function generates a random number from
one to three and assigns it a value of either rock, paper
or scissors.*/

const generateNumber = () => {
	return Math.floor(Math.random() * 3);
}

const computerChooseThrow = () => {
    let numberKey = generateNumber();
    //The following line is for testing that the random number generation worked.
	console.log(numberKey);
    if(numberKey === 0){
        return "rock";
    } else if(numberKey === 1){
        return "paper";
    } else if(numberKey === 2){
        return "scissors";
    }
}

const compareComputerAndPlayer = () => {

}