let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.getElementById("msg");

// 19:00 Tic Tac Toe
let turnO = true; // tracking player

//winning patterns | use 2D array, array of arrays
// eg
// arr = [
//   ["apple", "mango"],
//   ["potato", "mushrooms"],
//   ["pants", "shirts"],
// ];

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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(`${box} was clicked`);
    if (turnO) {
      box.innerText = "O";
      box.classList.add('text-sky-400')
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let patterns of winPatterns) {
    // console.log(patterns[0], patterns[1], patterns[2]);
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner is", pos1Val)

        showWinner(pos1Val);
        // msg.classList.add('bg-blue-400', 'text-2xl')
        // resetBtn.innerText = "Start Again!"
      }
    }
  }
};

let showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msg.classList.add("bg-blue-400", "text-2xl", "block");
  msg.classList.remove('hidden')
  resetBtn.innerText = "Start Again!";
  disableBox();
};

let resetFn = () => {
    turnO = true;
    enableBox();
    resetBtn.innerText = "Reset Button"
};

resetBtn.addEventListener("click", resetFn)

let disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msg.classList.remove("bg-blue-400", "text-2xl");
    box.classList.remove('text-sky-400')
    msg.classList.remove('block')
    msg.classList.add('hidden')
  }
};

// resetBtn.addEventListener("click", () =>{
//     console.log("Please refresh the page")
//     resetBtn.innerText = "Reset Button"
//     location.reload()
// })
