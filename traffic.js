let round1El = document.getElementById("round1");
let round2El = document.getElementById("round2");
let round3El = document.getElementById("round3");

let stopEl = document.getElementById("stop");
let readyEl = document.getElementById("ready");
let goEl = document.getElementById("go");

function onReset(){
    round1El.style.backgroundColor = "lightgrey";
    stopEl.style.backgroundColor = "blue";
    round2El.style.backgroundColor = "lightgrey";
    readyEl.style.backgroundColor = "blue";
    round3El.style.backgroundColor = "lightgrey";
    goEl.style.backgroundColor = "blue";
}

function stopBtn(){
   round1El.style.backgroundColor = "red";
   stopEl.style.backgroundColor = "red";
   round2El.style.backgroundColor = "lightgrey";
   readyEl.style.backgroundColor = "blue";
   round3El.style.backgroundColor = "lightgrey";
   goEl.style.backgroundColor = "blue";
    
}
function readyBtn(){
    round1El.style.backgroundColor = "lightgrey";
    stopEl.style.backgroundColor = "blue";
    round2El.style.backgroundColor = "orange";
    readyEl.style.backgroundColor = "orange";
    round3El.style.backgroundColor = "lightgrey";
    goEl.style.backgroundColor = "blue";
}
function goBtn(){
    round1El.style.backgroundColor = "lightgrey";
    stopEl.style.backgroundColor = "blue";
    round2El.style.backgroundColor = "lightgrey";
    readyEl.style.backgroundColor = "blue";
    round3El.style.backgroundColor = "green";
    goEl.style.backgroundColor = "green";
}
