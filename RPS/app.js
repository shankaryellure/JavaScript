let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game is draw, Play again";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin){
        userScore++;
        console.log("You won");
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lost");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${userChoice} beats your ${CompChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const playGame = (userChoice) => {
    //Generate computer choice
    const CompChoice = genCompChoice();
    if(userChoice === CompChoice) {
        //Draw choice
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
            userWin = CompChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            //rock, scissors
            userWin = CompChoice === " scissors" ? false : true;
        } else {
            //rock, scissors
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});