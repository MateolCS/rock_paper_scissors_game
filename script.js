let playerPickRock = document.querySelector('#player-pick-rock')

let playerPickPaper = document.querySelector('#player-pick-paper')

let playerPickScissors = document.querySelector('#player-pick-scissors')

let displayResult = document.querySelector('#display-result > h2')

let displayPlayerScore = document.querySelector('#player-score')

let displayComputerScore = document.querySelector('#computer-score')

console.log(displayResult)

let playerPick
let min
let max
let playerScore = 0
let computerScore = 0

playerPickRock.addEventListener('click', () =>{
    playerPick = 'rock'
    min = 0
    max = 2
    round(min, max, playerPick, playerScore, computerScore)

    displayPlayerScore.innerText = playerScore
    displayComputerScore.innerText = computerScore

    winnner(playerScore, computerScore)

})

playerPickPaper.addEventListener('click', () =>{
    playerPick = 'paper'
    min = 0
    max = 2
    round(min, max, playerPick, playerScore, computerScore)

    displayPlayerScore.innerText = playerScore
    displayComputerScore.innerText = computerScore
    
    winnner(playerScore, computerScore)

})

playerPickScissors.addEventListener('click', () =>{
    playerPick = 'scissors'
    min = 0
    max = 2
    round(min, max, playerPick, playerScore, computerScore)

    displayPlayerScore.innerText = playerScore
    displayComputerScore.innerText = computerScore

    winnner(playerScore, computerScore)
    
})


function winnner(playerScore, computerScore){
    if(playerScore == 5){
        displayResult.innerText = 'You win!!'
        setTimeout(function () { location.reload(true); }, 5000)
        return 
    }else if(computerScore == 5){
        displayResult.innerText = 'You lost!!'
        setTimeout(function () { location.reload(true); }, 5000)
        return 
    }
    
    
}


min = 0
max = 2
function computerPlay(min, max){
    const options = ['rock', 'paper', 'scissors']

    min = Math.ceil(min);
    max = Math.floor(max)

    let placeholder = Math.floor(Math.random() * (max - min + 1)) + min

    let computerPick = options[placeholder]
    
    return computerPick
}

function round(min, max, playerPick){
    computerPick = computerPlay(min, max)

    if(computerPick === playerPick){
        return displayResult.innerText = 'Draw'
    }else if(computerPick == 'rock' && playerPick == 'paper'){
        playerScore += 1
        return displayResult.innerText = 'You win! Paper beats rock'
    }else if(computerPick == 'paper' && playerPick == 'scissors'){
        playerScore += 1
        return displayResult.innerText = 'You win! Scissors beat paper'
    }else if(computerPick == 'scissors' && playerPick == 'rock'){
        playerScore += 1
        return displayResult.innerText = 'You win! Rock beats paper'
    }else if(computerPick == 'rock' && playerPick == 'scissors'){
        computerScore += 1
        return displayResult.innerText = 'You lost! Scissors beat rock'
    }else if(computerPick == 'scissors' && playerPick == 'paper'){
        computerScore += 1
        return displayResult.innerText = 'You lost! Scissors beat paper'
    }else if(computerPick == 'paper' && playerPick == 'rock'){
        computerScore += 1
        return displayResult.innerText = 'You lost! Paper beats rock'
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    
    for(let i = 0; i<5; i++){
        round(min, max, playerScore, computerScore)
    }

    if(computerScore > playerScore){
        return alert('You lost')
    }else if(playerScore > computerScore){
        return alert('You won')
    }else{
        return alert('Draw')
    }
}

