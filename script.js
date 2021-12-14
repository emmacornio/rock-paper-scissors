//declare player and computer choices as objects
//2 parameters choice and value
class choice {
    constructor(selection, value) {
        this.selection = selection;
        this.value = value;
    }
}


//make function for random selection
//function called computerPlay
let computerPlay=()=>{
    const computerChoice=new choice;
    //random number between 1 and 3
    computerChoice.value=Math.floor((Math.random()*3)+1);
    //1=rock, 2=paper, 3=scissor
    //stores choice
    switch(computerChoice.value){
        case(1):
        computerChoice.selection='Rock';
        break;
        case(2):
        computerChoice.selection='Paper';
        break;
        case(3):
        computerChoice.selection='Scissors';
        break;
    }
    //log computer result
    //console.log(computerChoice.selection);
    //return choice
    return computerChoice;
}
//
//make player selection function playerPlay
let playerPlay=()=>{
    const playerChoice=new choice;
    let str;
    let option=false;
//prompts to choose a choice
//rock, paper,  scissors
    while(option==false){
    str=prompt("Rock, Paper or Scissors?");
//has to be case insensitive
//stores choice
    playerChoice.selection=(str.charAt(0).toUpperCase()
            +str.slice(1).toLowerCase());
    switch(true){
        case(playerChoice.selection=='Rock'):
        playerChoice.value=1;
        option=true;
        break;
        case(playerChoice.selection=='Paper'):
        playerChoice.value=2;
        option=true;
        break;
        case(playerChoice.selection=='Scissors'):
        playerChoice.value=3;
        option=true;
        break;
        default:
            alert('Enter a valid option');
            option=false;
    }
}
    //returns choice
    //console.log(playerChoice.selection);
    return playerChoice;
}
//
//
//round function 
let playRound=()=>{
//calls for player and computer play
    let victory; 
    const computerChoice=computerPlay()
    const playerChoice=playerPlay();
    console.log(`player chose ${playerChoice.selection} | 
            computer chose ${computerChoice.selection}`);
//compare the values of the selections
//log the result of the round
switch(playerChoice.value){
    case 1:
        switch(computerChoice.value){
            case 1:
                console.log(`It's a tie! ${playerChoice.selection} 
                         matches ${computerChoice.selection}`);
                victory=0;
                break;
            case 2:
                console.log(` You lose! ${computerChoice.selection}
                         beats ${playerChoice.selection} `);
                victory=-1;
                break;
            case 3:
                console.log(`You win! ${playerChoice.selection} beats 
                        ${computerChoice.selection}`);
                victory=1;
                break;
        }
        break;
    case 2:
        switch(computerChoice.value){
            case 1:
                console.log(`You win! ${playerChoice.selection} 
                        beats ${computerChoice.selection}`);
                victory=1;
                break;
            case 2:
                console.log(`It's a  tie! ${playerChoice.selection} 
                         matches ${computerChoice.selection}`);
                victory=0;
                break;
            case 3:
                console.log(`You lose! ${computerChoice.selection} 
                        beats ${playerChoice.selection}`);
                victory=-1;
                break;
        }
        break;
    case 3:
        switch(computerChoice.value){
            case 1:
                console.log(`You lose! ${computerChoice.selection} 
                        beats ${playerChoice.selection}`);
                victory=-1;
                break;
            case 2:
                console.log(`You win! ${playerChoice.selection} 
                        beats ${computerChoice.selection}`);
                victory=1;
                break;
            case 3:
                console.log(`It's a tie!${playerChoice.selection} 
                        matches ${computerChoice.selection}`);
                victory=0;
                break;
        }
        break;
        
}
   // console.log(victory);   
    return victory;
}

//game function
let playGame=()=>{
    let victoryTally=0;
//plays 5 rounds
    for(let i=0;i<5;i++){
        victoryTally+=playRound();
        console.log('___________________________')
        //console.log(victoryTally);
//recieves victory value each round
    }
    switch(true){
//if at the end the value is positive the plaver wins
        case(victoryTally>0):
        console.log('Player Wins!');
        break;
//if is negative the player looses
        case(victoryTally<0):
        console.log('Player Loses');
        break;
//is is 0 is a match
        case(victoryTally===0):
        console.log('It\'s a match!');
        break;
    }
//at the end logs the winner
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//