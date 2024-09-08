let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winPatterns=
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame =()=>
{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if (turnO==true)
        {
            box.innerText="O";
            box.style.color="black";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if (count===9 && !isWinner)
        {
            drawGame();
        }
    });
});
const enableBoxes=()=>
    {
        for (let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };
const disableBoxes=()=>
{
    for (let box of boxes)
    {
        box.disabled=true;
    }
};
const showWinner= (winner) =>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const drawGame=()=>
{
    msg.innerText="Game is draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>
{
    for (let pattern of winPatterns)
    {
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if (pos1!="" && pos2!="" && pos3!="")
        {
            if (pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);