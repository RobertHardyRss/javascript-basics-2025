//@ts-check

// 1. player picks a weapon
// 2. Computer pick random weapon
// 3. Determine winner
// 4. Display
// 5. Play again / keep playing

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
	console.log("Player picked", weapon);

	// get a random computer weapon and assign
	// it the the computerWeapon variable
	let computerWeapon = selectComputerWeapon();
	console.log("Computer picked", computerWeapon);
};

const selectComputerWeapon = function () {
	// this will give us a random number
	// between 0 and 3
	const rand = Math.floor(Math.random() * 3);

	if (rand == 0) {
		return ROCK;
	}

	if (rand == 1) {
		return PAPER;
	}

	if (rand == 2) {
		return SCISSORS;
	}

	// don't know what random number is choosing!
	throw "Unknown weapon";
};

function decideResults(player, computer) {
	// create a result object to hold the
	// default state of the outcome of the
	// battle
	let result = {
		isTie: false,
		playerWon: false,
		description: "",
	};

	// this is for a tie
	if (player == computer) {
		result.isTie = true;
		result.description = "It's a tie!";
		// return the tie result
		return result;
	}

	// rock beats scissors
	if (player == ROCK && computer == SCISSORS) {
		result.playerWon = true;
		result.description = "rock crushes scissors";
		return result;
	}

	// paper beats rock
	if (player == PAPER && computer == ROCK) {
		result.playerWon = true;
		result.description = "paper covers rock";
		return result;
	}

	// scissors beats paper
	if (player == SCISSORS && computer == PAPER) {
		result.playerWon = true;
		result.description = "scissors cuts paper";
		return result;
	}

	// computer wins
	// rock beats scissors
	if (computer == ROCK && player == SCISSORS) {
		result.description = "rock crushes scissors";
		return result;
	}

	// paper beats rock
	if (computer == PAPER && player == ROCK) {
		result.description = "paper covers rock";
		return result;
	}

	// scissors beats paper
	if (computer == SCISSORS && player == PAPER) {
		result.description = "scissors cuts paper";
		return result;
	}
}
