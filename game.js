function game() {
    const choices = ["rock", "paper", "scissors"]; // Define choices within the game function

    // Get user choice
    let userChoice = prompt("Please choose rock, paper, or scissors").toLowerCase();

    // Validate user input
    if (!choices.includes(userChoice)) {
        console.log("You entered an invalid choice. Please choose a valid option.");
        return; // Exit the function if the choice is invalid
    }

    // Generate random choice for the computer
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Determine the winner
    if (computerChoice === userChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("Congrats, you win!");
    } else {
        console.log("Sorry, you lose. Try again!");
    }
}


game();
