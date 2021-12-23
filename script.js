const options = document.querySelectorAll(".option-image");
const resultDiv = document.getElementById("result");
const roundResult = document.getElementById("round-result");
const counters = document.querySelectorAll(".counter");
const optionText = document.querySelectorAll(".options");
const gameResult = document.getElementById("game-result");
const roundAnnouncement = document.getElementsByClassName("round");

Array.from(options).forEach((option) => {
	option.addEventListener("click", () => playRound(option.alt));
});
Array.from(optionText).forEach((option) => {
	option.firstElementChild.lastElementChild.addEventListener("click", () =>
		playRound(option.firstElementChild.lastElementChild.textContent)
	);
});
function computerPlay() {
	let computerNumber = Math.floor(Math.random() * 3 + 1);
	let computerChoice;

	switch (computerNumber) {
		case 1:
			computerChoice = "Rock";
			break;
		case 2:
			computerChoice = "Paper";
			break;
		case 3:
			computerChoice = "Scissors";
			break;
	}

	return computerChoice;
}

function playRound(playerChoice) {
	const computerChoice = computerPlay();
	playerCounter = parseInt(counters[0].textContent);
	computerCounter = parseInt(counters[1].textContent);

	console.log(
		`player chose ${playerChoice} | computer chose ${computerChoice}`
	);
	roundAnnouncement[0].textContent = `player chose ${playerChoice} | computer chose ${computerChoice}`;

	if (playerChoice == computerChoice) {
		console.log("it's a tie!");
		roundResult.textContent = "it's a tie!";
	} else {
		switch (true) {
			case playerChoice == "Rock":
				if (computerChoice == "Scissors") {
					console.log("player wins!");
					roundResult.textContent = "player wins!";
					playerCounter += 1;
				} else {
					console.log("computer wins");
					roundResult.textContent = "computer wins";
					computerCounter += 1;
				}

				break;
			case playerChoice == "Paper":
				if (computerChoice == "Rock") {
					console.log("player wins!");
					roundResult.textContent = "player wins!";
					playerCounter += 1;
				} else {
					console.log("computer wins");
					roundResult.textContent = "computer wins";
					computerCounter += 1;
				}
				break;
			case playerChoice == "Scissors":
				if (computerChoice == "Paper") {
					console.log("player wins!");
					roundResult.textContent = "player wins!";
					playerCounter += 1;
				} else {
					console.log("computer wins");
					roundResult.textContent = "computer wins";
					computerCounter += 1;
				}
				break;
		}
		counters[0].textContent = playerCounter;
		counters[1].textContent = computerCounter;
	}
	results = document.querySelectorAll(".result");

	if (playerCounter < 5 && computerCounter < 5) {
		gameResult.textContent = "Currently Playing";
	}
	if (playerCounter === 5 || computerCounter === 5) {
		if (playerCounter === 5) {
			gameResult.textContent = "Player Wins the Game!!!!";
		} else {
			gameResult.textContent = "Computer Wins the Game!!!";
		}
		counters[0].textContent = 0;
		counters[1].textContent = 0;
		playerCounter = 0;
		computerCounter = 0;
		roundResult.textContent = "";
		roundAnnouncement.textContent = "";
	}
}
