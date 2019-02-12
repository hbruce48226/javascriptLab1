const start = prompt("Do you want to play?");
if (start === 'y' || start === 'yes' || start === 'Yes' || start === 'Y') {

    const player = prompt("What is your name?");
    let playerPoints = 40;
    let grantPoints = 10;
    let playerWins = 0;

    while (playerPoints > 0 && playerWins < 3) {
        if (grantPoints <= 0) {
            playerWins += 1;
            grantPoints = 10;
        }

        playerPoints -= (Math.floor(Math.random() * 2) + 1);
        grantPoints -= (Math.floor(Math.random() * 2) + 1);
        console.log(`${player}'s points: ${playerPoints}`);
        console.log(`Grant's points: ${grantPoints}`);
        console.log(`playerWins: ${playerWins}`);

    }
    if (playerPoints === 0) {
        console.log("Grant the Almight wins!");
    }

    if (playerWins === 3) {
        console.log("YOU WIN!!");
    }
}