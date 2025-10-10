window.onload = pageLoad;

function pageLoad() {
    let startBtn = document.getElementById("start");
    startBtn.onclick = startGame;
}

let timer = null;
let second = 0;

function startGame() {
    clearScreen();
    alert("Ready!");
    addBox();
    timeStart();
}

function timeStart() {
    const TIMER_TICK = 1000;
    let min = 0.5; 
    second = min * 60;
    let clock = document.getElementById("clock");

    if (timer != null) {
        clearInterval(timer);
    }

    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount() {
        let allbox = document.querySelectorAll("#layer div");
        second--;

        clock.innerHTML = second + " sec";

        if (allbox.length == 0 && second > 0) {
            clearInterval(timer);
            alert("You Win!");
            clearScreen();
        } else if (second <= 0 && allbox.length > 0) {
            clearInterval(timer);
            alert("Game Over!");
            clearScreen();
        }
    }
}

function addBox() {
    let numbox = document.getElementById("numbox").value;
    let gameLayer = document.getElementById("layer");
    let colorDrop = document.getElementById("color").value;

    for (let i = 0; i < numbox; i++) {
        let tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        box.parentNode.removeChild(box);
    };
}

function clearScreen() {
    let allbox = document.querySelectorAll("#layer div");
    for (let i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
