var button = document.querySelectorAll(".btns");
var turnCircle = "circle";
var turnCross = "cross";
var turn = turnCircle;
var circle = [];
var cross = [];
var draw = [];
var winnerBoard = document.querySelector(".winner");
var winRestart = document.querySelectorAll('#restart');
var reset = document.querySelector('#reset');
var score_x = 00;
var score_o = 00;
var board_x = document.getElementById("score_x");
var board_o = document.getElementById("score_o");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var winner = document.getElementById("win");

//Resart Button
for(var k=0;k<winRestart.length;k++)
winRestart[k].addEventListener("click",function(){
  winnerBoard.style.display = "none";
  for(var j=0;j<button.length;j++){
    button[j].classList.remove("cross");
    button[j].classList.remove("circle");
    circle = [];
    cross = [];
    draw =[];
  }
});

//Reset Button
reset.addEventListener("click",function(){
  score_o = '00';
  score_x = '00';
  draw =[];
  board_o.innerHTML = score_o;
  board_x.innerHTML = score_x;
});

for(var i = 0;i<button.length;i++){

  button[i].addEventListener("click",function(e){
    if(turn == turnCircle){
      score1.classList.remove("glow");
      score2.classList.add("glow");
      this.classList.add(turn);
      score2.classList.add("gloo");
      turn = turnCross;
      circle.push(e.target.id)
      draw.push(e.target.id)
      if(draw.includes("btn1")  && draw.includes("btn2")  && draw.includes("btn3")  && 
      draw.includes("btn4")  && draw.includes("btn5")  && draw.includes("btn6")  && 
      draw.includes("btn7")  && draw.includes("btn8")  && draw.includes("btn9")){
        winnerBoard.style.display = "flex";
        winner.innerHTML = "Draw!!!"
      }
      if(circle.includes("btn1") && circle.includes("btn2") && circle.includes("btn3") ||
      circle.includes("btn4") && circle.includes("btn5") && circle.includes("btn6") ||
      circle.includes("btn7") && circle.includes("btn8") && circle.includes("btn9") ||
      circle.includes("btn1") && circle.includes("btn4") && circle.includes("btn7") ||
      circle.includes("btn2") && circle.includes("btn5") && circle.includes("btn8") ||
      circle.includes("btn3") && circle.includes("btn6") && circle.includes("btn9") ||
      circle.includes("btn1") && circle.includes("btn5") && circle.includes("btn9") ||
      circle.includes("btn3") && circle.includes("btn5") && circle.includes("btn7") ){
        winnerBoard.style.display = "flex";
        winner.innerHTML = "O Won!!!"
        score_o++;
        if(score_o<10){
          board_o.innerHTML = '0'+score_o;
        }else{
          board_o.innerHTML = score_o;
        }
      }
      return turn;
    }else(turn == turnCross);{
      score2.classList.remove("glow");
      score1.classList.add("glow");
      this.classList.add(turn);
      turn = turnCircle;
      cross.push(e.target.id)
      draw.push(e.target.id)
      if(draw.includes("btn1")  && draw.includes("btn2")  && draw.includes("btn3")  && 
      draw.includes("btn4")  && draw.includes("btn5")  && draw.includes("btn6")  && 
      draw.includes("btn7")  && draw.includes("btn8")  && draw.includes("btn9")){
        winnerBoard.style.display = "flex";
        winner.innerHTML = "Draw!!!"
      }
      if(cross.includes("btn1") && cross.includes("btn2") && cross.includes("btn3") ||
      cross.includes("btn4") && cross.includes("btn5") && cross.includes("btn6") ||
      cross.includes("btn7") && cross.includes("btn8") && cross.includes("btn9") ||
      cross.includes("btn1") && cross.includes("btn4") && cross.includes("btn7") ||
      cross.includes("btn2") && cross.includes("btn5") && cross.includes("btn8") ||
      cross.includes("btn3") && cross.includes("btn6") && cross.includes("btn9") ||
      cross.includes("btn1") && cross.includes("btn5") && cross.includes("btn9") ||
      cross.includes("btn3") && cross.includes("btn5") && cross.includes("btn7") ){
        winnerBoard.style.display = "flex";
        winner.innerHTML = "X Won!!!"
        score_x++;
        if(score_x<10){
          board_x.innerHTML = '0'+score_x;
        }else{
          board_x.innerHTML = score_x;
        }
      }
    }
  });
}

