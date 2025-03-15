//TIC-TAC-TOE GAME

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
            }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Consgratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}


const checkWinner = () => {
    for (let pattern of winPatterns) {
    
/*    console.log(pattern);
    console.log(boxes[pattern[0]], boxes[pattern[1]],boxes[pattern[2]]); */

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "", pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);












