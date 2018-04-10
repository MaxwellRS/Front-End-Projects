playerSeq = [];
simonSeq = [];
const levelNum = 20;
var id, color, level = 0;
var strict = false;
var error = false;
var loseSound = "https://clyp.it/3olcfnyd.mp3"
var boardSound = [
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", 
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"    
];

$(document).ready(function() {
  $(".display").text("00");
  $(".start").click(function() {
    strict = false;
    error = false;
    level = 0;
    level++;
    simonSeq = []
    playerSeq = [];
    simonSequence();
  })
  $(".simon-button").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    playerSequence();
  });
  $(".strict").click(function() {
    level = 0;
    level++;
    simonSeq = []
    playerSeq = [];
    strict = true;    
    simonSequence();
  })
})
function playerSequence() {
  playerSeq.push(id);
    addClassSound(id, color);
    if(!checkPlayerSeq()) {
      if(strict) {
        simonSeq = [];
        level = 1;
      }   
      error = true;   
      displayError();
      playerSeq = [];      
      simonSequence();
    }
    else if(playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
      level++;
      playerSeq = [];
      error = false;
      simonSequence();
    }
    if(playerSeq.length == levelNum) {
      displayWinner();
      resetGame();
    }     
}
function simonSequence() {
  $(".display").text(level);
  if(!error) {
    getRandomNum();
  }
  if(error && strict) {
    getRandomNum();
  }  
  var i = 0;
  var myInterval = setInterval(function() {
    id = simonSeq[i];
    color = $("#"+id).attr("class");
    color = color.split(" ")[1];
    addClassSound(id, color);
    i++;
    if(i == simonSeq.length) {
      clearInterval(myInterval);
    } 
  }, 1000);  
}
function getRandomNum() {
  var random = Math.floor(Math.random() * 4);
  simonSeq.push(random);
}
function addClassSound(id, color) {
  $("#"+id).addClass(color+"-active");
  playSound(id)
  setTimeout(function(){
    $("#"+id).removeClass(color+"-active");
  }, 500);
}
function checkPlayerSeq() {
  for(var i = 0; i < playerSeq.length; i++) {
    if(playerSeq[i] != simonSeq[i]) {      
      return false;
    }
  }
  return true;
}
//error
function displayError() {
  var counter = 0;
  var myError = setInterval(function() {
    $(".display").text("XX");
    counter++;
    if(counter == 3) {
      $(".display").text(level);
      clearInterval(myError);
      playerSeq = [];
      counter = 0;
    }
  }, 500);
}
//winner
function displayWinner() {
  var count = 0;
  var winInterval = setInterval(function() { 
    count++;
    $(".display").text("Win");
    if(count == 5) {
      clearInterval(winInterval);
      $(".display").text("00");
      count = 0;
    }
  }, 500);
}
function playSound(id) {
  var sound = new Audio(boardSound[id]);
  sound.play();
}
function resetGame() {
  playerSeq = [];
  simonSeq = [];
  level = 0;
  $(".display").text("00");
}