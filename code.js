// Task: Prompt the user if they would like to play the game with two characters - the user and the Almighty Grant. 
// If yes, prompt the user to name their character. 
// Run a while loop that will iterate until either the character has beat Grant 
// three times or the character has been defeated.

// What does the application do?
// 1. The user is prompted to play a game. If the user chooses yes, the user is prompted to enter his or
// her name, and the battle begins. Otherwise, nothing else happens.
// 2. The game will use a while loop to simulate a turn-based fight between the user and Grant.
// 3. The user starts with 40 “health points.” Grant starts with 10 “health points.”
// 4. Each iteration of the while loop will remove random numbers of health points (either 1 or 2)
// from both the user and Grant.
// 5. Each time Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.” But Grant’s
// health points are reset to 10. Note: the user’s health points never reset.
// 6. The game ends when either a) Grant has been defeated three times (i.e.,, the user has three wins)
// or b) the user has been defeated (hit 0 health points).
// 7. When the game is over, the application logs the winner.

// Build Specifications:
// 1. The application must prompt the user for his or her name and use it throughout the game.
// 2. The application logs the progress of the fight after each iteration of the loop.
// 3. Hint: Save asking the user if they want to play for the last part of the code you write. This way
// you won’t have to type “yes” every time you test your program.

const start = prompt("Do you want to play?");
if (start === 'y' || start === 'yes' || start === 'Yes' || start === 'Y') {

    const player = prompt("What is your name?");
    let playerPoints = 40;
    let grantPoints = 10;
    let playerWins = 0;

    while (playerPoints > 0 && playerWins < 3) {
        // console.log('true');
        if (grantPoints <= 0) {
            playerWins += 1;
            grantPoints = 10;
        }

        playerPoints -= (Math.floor(Math.random() * 2) + 1);
        grantPoints -= (Math.floor(Math.random() * 2) + 1);
        console.log(`${player}'s points: ${playerPoints}`);
        console.log(`Grant's points: ${grantPoints}`);
        console.log(`playerWins: ${playerWins}`);
        //  playerWins += 1;

    }
    if (playerPoints === 0) {
        console.log("Grant the Almight wins!");
    }

    if (playerWins === 3) {
        console.log("YOU WIN!!");
    }
}
// }
    // while (playerPoints>0 || playerWins<3) {
    //     // game play
    //     playerPoints = 40;
    //     playerWins = 0;
    //     grantPoints = 10;

    //     if grantPoints===0 {
    //         playerWins += 1;
    //         grantPoints = 10;
    //         if playerWins===3 {
    //             console.log("YOU WIN");
    //             break;
    //         }
    //     }

    //     // health point deduction each iteration
    //     playerPoints -= Math.floor(Math.random() * 2) + 1
    //     grantPoints -= Math.floor(Math.random() * 2) + 1 

    //     if playerPoints===0 {
    //         console.log("GAME OVER");
    //         console.log("the winner is: Grant the Almighty!");
    //         break;
    //     }

    //     console.log(`${player} has ${playerPoints} left`);
    //     console.log(`Grant the Almighty has ${grantPoints} left`);
    // } 




// b=5
// a=b*2
// alert(a)


// function printAmount() {
//     console.log( amount.toFixed( 2 ) );
//    }
// var amount = 199.99;
// printAmount(); // "99.99"