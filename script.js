let game_items = ["rock", "paper", "scissors"]
const computerPlay = () => {
    let random_items = game_items[Math.floor(Math.random() * 3)]
    return random_items;
}

const playRound = (playerSelection, computerSelction) => {
    if (playerSelection == computerSelction) {
        console.log(`Both players selected ${playerSelection}. It's a tie!`)
        return;
    }
    else if (playerSelection == 'rock') {
        if (computerSelction == 'paper') {
            console.log('Rock smashes scissors! You win!')
            return 'player';
        } else {
            console.log('Paper covers rock! You lose.')
            return 'computer';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelction == 'paper') {
            console.log('Scissors cuts paper! You win!')
            return 'player';
        } else {
            console.log('Rock smashes scissors! You lose.')
            return 'computer';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelction == 'rock') {
            console.log("Paper covers rock! You win!")
            return 'player';
        } else {
            console.log('Scissors cuts paper! You lose.')
            return 'computer';
        }
    } else if (!playerSelection) {
        console.log('please enter valid value from rock/paper/scissor')
        return
    } else if (!game_items.includes(playerSelection)) {
        console.log('please pick valid value from rock/paper/scissor')
        return
    }
}


const game = () => {
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelction = computerPlay();
        let playerSelection = window.prompt(`Rock,Paper& Scissors game Round${i + 1}`).toLowerCase();
        let winner = playRound(playerSelection, computerSelction)
        if (winner == 'player') player++;
        else if (winner == 'computer') computer++;
    }
    if (player == computer) {
        console.log("it's a Tie!")
    } else if (player > computer) {
        console.log('you Won the game')
    } else {
        console.log('you lost the game')
    }
}

game()