var n = 0;
var score = 10000;


function lowscore() {
  score=score+200;
  document.getElementById("score").innerHTML=score;
    document.getElementById("airplaneimg").style.transform = "rotate(-15deg)";

}

function highscore() {
  score=score-2000;
  document.getElementById("score").innerHTML=score;
  document.getElementById("airplaneimg").style.transform = "rotate(15deg)";
  if (score===0){
  document.getElementById("runway").style.display = "block";
  document.getElementById("explosionimg").style.display = "block";
  }
}

function low() {
  var obj = document.getElementById("cloud");
  n++;

  obj.style.top = parseInt(obj.style.top) + 1 + "px";
  // obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"

  if (n === 30) {
    n = 0;
    timeStop();
  }
}

function lowStart() {
  t = setInterval("low()", 10);
//   document.getElementById("airplaneimg").style.transform = "rotate(15deg)";
}

function timeStop() {
  clearInterval(t);
}

function high() {
  var obj = document.getElementById("cloud");
  n++;

obj.style.top = parseInt(obj.style.top) - 1 + "px";
// obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"
  if (n === 30) {
    n = 0;
    timeStop();
  }
}

function highStart() {
  t = setInterval("high()", 10);
//   document.getElementById("airplaneimg").style.transform = "rotate(-15deg)";
}

function timeStop() {
  clearInterval(t);
}

function q1e() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q1a").style.display = "none";
    document.getElementById("q1e").style.display = "block";
}

function q2() {
    document.getElementById("q1e").style.display = "none";
    document.getElementById("q2").style.display = "block";
    document.getElementById("q2a").style.display = "block";
}

function q2e() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q2a").style.display = "none";
    document.getElementById("q2e").style.display = "block";
}

function q3() {
    document.getElementById("q2e").style.display = "none";
    document.getElementById("q3").style.display = "block";
    document.getElementById("q3a").style.display = "block";
}

function q3e() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q3a").style.display = "none";
    document.getElementById("q3e").style.display = "block";
}

function q4() {
    document.getElementById("q3e").style.display = "none";
    document.getElementById("q4").style.display = "block";
    document.getElementById("q4a").style.display = "block";
}

function q4e() {
    document.getElementById("q4").style.display = "none";
    document.getElementById("q4a").style.display = "none";
    document.getElementById("q4e").style.display = "block";
}

function q5() {
    document.getElementById("q4e").style.display = "none";
    document.getElementById("q5").style.display = "block";
    document.getElementById("q5a").style.display = "block";
}

function q5e() {
    document.getElementById("q5").style.display = "none";
    document.getElementById("q5a").style.display = "none";
    document.getElementById("q5e").style.display = "block";
}

function theend() {
    document.getElementById("q5e").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("again").style.display = "block";
}


function again(){
     document.getElementById("cloud").style.top = "0px";
    document.getElementById("airplaneimg").style.transform = "rotate(0deg)";
    document.getElementById("q1").style.display = "block";
    document.getElementById("q1a").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("again").style.display = "none";
    document.getElementById("explosionimg").style.display = "none";
    document.getElementById("runway").style.display = "none";
    score=10000;
    document.getElementById("score").innerHTML=score;
//     score.innerHTML="(" + score + ")";
}
