let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colordisplay");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("div > span");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easybtn = document.getElementById("easybtn");
let hardbtn = document.getElementById("hardbtn");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256)
    //pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256)
    //pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

easybtn.addEventListener("click", function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    messageDisplay.textContent = "";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});