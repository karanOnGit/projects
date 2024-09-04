var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

var numberSelected = null;
var tileSelected = null;
var errorCount = 0;
var blankCount = 0;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 1; i < 10; i++) {
    // create div with unique id using for loop
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let tile = document.createElement("div");
      tile.id = i.toString() + "-" + j.toString();
      if (board[i][j] != "-") {
        tile.innerText = board[i][j];
        tile.classList.add("tile-start");
      } else {
        blankCount += 1;
        tile.innerText = "";
      }
      if (i == 2 || i == 5) {
        tile.classList.add("horizontal-line");
      }
      if (j == 2 || j == 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("container").appendChild(tile);
    }
  }
}

function selectNumber() {
  if (numberSelected != null) {
    numberSelected.classList.remove("number-selected");
  }

  numberSelected = this;
  numberSelected.classList.add("number-selected");
}

function selectTile() {
  if (numberSelected) {
    if (this.innerText != "") {
      return;
    }

    // this.innerText = numberSelected.id;
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numberSelected.id) {
      this.innerText = numberSelected.id;
    } else {
      errorCount += 1;
      document.getElementById("errors").innerText = errorCount;
    }
  }
}
