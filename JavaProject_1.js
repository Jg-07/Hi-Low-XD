// DOM useage time.
var i = 0;
var c = 0;
var Ln;
var Lscore = 20;
var HLscore = 0;
var score = [];
var Lnum;
var dis;
var stat = document.querySelector(".acg5");
stat.innerHTML =
  '<span class="acgA2" style="font-size:20px;">Start Guessing...</span>';
var myScore = document.querySelector(".acg6");
var myHscore = document.querySelector(".acg7");
myScore.innerHTML = "🏅 Score : " + Lscore;
myHscore.innerHTML = "🥇 HighScore : " + HLscore;
//Assigning the Lucky Number.
function checkSco(score) {
  if (score == 0) {
    document.querySelector(".acg5").innerHTML =
      '<span class="acgA2" style="font-size:20px;">❌ You Lost the game...</span>';
    document.querySelector(
      ".click"
    ) = '<input type="button"  name=""  value="Again!"  class="click"  id="ag3"  onclick="rel()" />';
  }
}
function rel() {
  window.location.reload();
  c = 0;
}
function rel2() {
  var Luckynum = Math.floor(Math.random() * Math.floor(20)) + 1;
  return Luckynum;
}
function exfunc() {
  Lnum = 0;
  myScore = document.querySelector(".acg6");
  myHscore = document.querySelector(".acg7");
  var ans = document.querySelector(".acgA1");
  var clickvalue = document.querySelector("#ag4");
  stat = document.querySelector(".acg5");
  clickvalue.value = "Click!";
  var value1 = document.querySelector("#ag2");
  var backBody = document.body;
  if (dis == 1) {
    Ln = rel2();
    dis = 0;
    ans.innerHTML = "?";
    value1.value = "";
    backBody.style.background = "black";
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">Start Guessing...</span>';
    Lnum++;
  }
  if (c == 0) {
    Ln = rel2();
    c++;
  }
  console.log(Ln);
  if (i == 0) {
    Lscore = 20;
    HLscore = 0;
    myScore.innerHTML = "🏅 Score : " + Lscore;
    myHscore.innerHTML = "🥇 HighScore : " + HLscore;
    i++;
  }
  var getvalue = document.querySelector("#ag2");
  var myNum = getvalue.value;
  if (!myNum) {
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">⛔ No Number</span>';
    if (Lnum == 1) {
      stat.innerHTML =
        '<span class="acgA2" style="font-size:20px;">Start Guessing...</span>';
    }
  } else if (Ln == myNum) {
    dis = 0;
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">🎉Correct Number!</span>';
    backBody.style.background = "#38e065";
    ans.innerHTML = Ln;
    if (Lscore != 20) {
      Lscore++;
    }
    if (HLscore <= Lscore) {
      HLscore = Lscore;
    }
    myScore.innerHTML = "🏅 Score : " + Lscore;
    myHscore.innerHTML = "🥇 HighScore : " + HLscore;
    clickvalue.value = "Again!!";
    dis++;
  } else if (
    myNum == Ln - 1 ||
    myNum == Ln - 2 ||
    myNum == Ln + 1 ||
    myNum == Ln + 2
  ) {
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">Too close</span>';
    backBody.style.background = "orange";
    myScore.innerHTML = "🏅 Score : " + --Lscore;
    myHscore.innerHTML = "🥇 HighScore : " + HLscore;
    checkSco(Lscore);
  } else if (myNum > Ln + 2) {
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">📈 To high...</span>';
    backBody.style.background = "black";
    myScore.innerHTML = "🏅 Score : " + --Lscore;
    myHscore.innerHTML = "🥇 HighScore : " + HLscore;
    checkSco(Lscore);
  } else if (myNum < Ln - 2) {
    stat.innerHTML =
      '<span class="acgA2" style="font-size:20px;">📉 To Low...</span>';
    backBody.style.background = "black";
    myScore.innerHTML = "🏅 Score : " + --Lscore;
    myHscore.innerHTML = "🥇 HighScore : " + HLscore;
    checkSco(Lscore);
  }
}
