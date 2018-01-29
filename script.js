var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var levelButtons = document.querySelectorAll('.level');

init();

function setupLevelButtons() {
  for (var i = 0; i < levelButtons.length; i++) {
    levelButtons[i].addEventListener('click', function() {
      levelButtons[0].classList.remove('selected');
      levelButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
};

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial color
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener ('click', function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again";
      }
    });
  }
};

function init() {
  setupLevelButtons();
  setupSquares();
  reset();
};

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "Get New Colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = "steelblue";
};

resetButton.addEventListener('click', function() {
  reset();
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return ("rgb(" + red + ", " + green + ", " + blue + ")");
};
