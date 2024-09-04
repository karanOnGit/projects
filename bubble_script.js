var timer = 30;
var score = -10;
var hitRn;

function incrScore() {
    score += 10;
    document.querySelector("#incSc").textContent = score;
}

function makeHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#incHit").textContent = hitRn;
}

function makeBubble() {
  var catter = "";
  for (var i = 0; i <= 179; i++) {
    let sc = Math.floor(Math.random() * 10);
    catter += `<div class="bubble">${sc}</div>`;
  }

  var a = (document.querySelector("#pbtm").innerHTML = catter);
}

function runTime() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerCount").textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER:) <br> 
            Your Final Score is ${score} </h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clicNum = Number(dets.target.textContent);
    if(clicNum === hitRn) {
        makeHit();
        incrScore();
        makeBubble();
    }
})

runTime();
makeHit();
incrScore();
makeBubble();