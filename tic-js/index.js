
//finish messageBox class

//change button colors

//style font, etc.


$(document).ready(function(){
  
  var turn = "X";
  
  var turns = [" "," "," "," "," "," "," "," "," "];
  
  var computersTurn = "O";
  
  var gameOn = false;
  
  var count = 0;
  
 
  $("#turnX").click(function(){
    turn = "O";
    computersTurn = "X";
    $("#turnX").removeClass("btn-X");
    $("#turnO").addClass("btn-O");
    reset();
    $("#message").html("You are O! O yeah!");
  });
  
    $("#turnO").click(function(){
    turn = "X";
    computersTurn = "O";
    $("#turnO").removeClass("btn-O");
    $("#turnX").addClass("btn-X");
    reset();
    $("#message").html("You are X! X out the competition!"); 
  });
  
  function computerTurn(){
    
    //break the while loop
    var taken=false;
    while(taken==false && count !==5){
      //generate computer's turn
      var computerMove= (Math.random()*10).toFixed();
      var move= $("#"+computerMove).text();
      
      if(move===" "){
        $("#"+computerMove).text(computersTurn);
        taken=true;
        turns[computerMove] = computersTurn;
      }
      
    }
    
  }
  
  function playerTurn(turn, id){
    
    var spotTaken= $("#"+id).text();
    
    if(spotTaken===" "){
      count++;
      turns[id]= turn;
      
      $("#"+id).text(turn);
      
      winCondition(turns, turn);
      
      if(gameOn === false){
        
        computerTurn();
        winCondition(turns, computersTurn);
      } 
      
    }   
    
  }
  
  function winCondition(turnArray, currentTurn){
    
    if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html(currentTurn);
      $("#win1").html(currentTurn);
      $("#win2").html(currentTurn);
      $("#win3").html("&middot;");
      $("#win4").html("&middot;");
      $("#win5").html("&middot;");
      $("#win6").html("&middot;");
      $("#win7").html("&middot;");
      $("#win8").html("&middot;");
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html("&middot;");
      $("#win2").html(currentTurn);
      $("#win3").html("&middot;");
      $("#win4").html(currentTurn);
      $("#win5").html("&middot;");
      $("#win6").html(currentTurn);
      $("#win7").html("&middot;");
      $("#win8").html("&middot;");
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html(currentTurn);
      $("#win1").html("&middot;");
      $("#win2").html("&middot;");
      $("#win3").html(currentTurn);
      $("#win4").html("&middot;");
      $("#win5").html("&middot;");
      $("#win6").html(currentTurn);
      $("#win7").html("&middot;");
      $("#win8").html("&middot;");
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html(currentTurn);
      $("#win1").html("&middot;");
      $("#win2").html("&middot;");
      $("#win3").html("&middot;");
      $("#win4").html(currentTurn);
      $("#win5").html("&middot;");
      $("#win6").html("&middot;");
      $("#win7").html("&middot;");
      $("#win8").html(currentTurn);
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html(currentTurn);
      $("#win2").html("&middot;");
      $("#win3").html("&middot;");
      $("#win4").html(currentTurn);
      $("#win5").html("&middot;");
      $("#win6").html("&middot;");
      $("#win7").html(currentTurn);
      $("#win8").html("&middot;");
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html("&middot;");
      $("#win2").html(currentTurn);
      $("#win3").html("&middot;");
      $("#win4").html("&middot;");
      $("#win5").html(currentTurn);
      $("#win6").html("&middot;");
      $("#win7").html("&middot;");
      $("#win8").html(currentTurn);
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html("&middot;");
      $("#win2").html("&middot;");
      $("#win3").html(currentTurn);
      $("#win4").html(currentTurn);
      $("#win5").html(currentTurn);
      $("#win6").html("&middot;");
      $("#win7").html("&middot;");
      $("#win8").html("&middot;");
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html("&middot;");
      $("#win2").html("&middot;");
      $("#win3").html("&middot;");
      $("#win4").html("&middot;");
      $("#win5").html("&middot;");
      $("#win6").html(currentTurn);
      $("#win7").html(currentTurn);
      $("#win8").html(currentTurn);
      $("#message").html("Player " + currentTurn + " wins:");
      $("html, body").animate({ scrollTop: 0 }, 0);
      
    } else if (turns.includes(" ") === false) {
      gameOn = true;
      reset();
      $("#win0").html("&middot;");
      $("#win1").html("&middot;");
      $("#win2").html("&middot;");
      $("#win3").html("&middot;");
      $("#win4").html("&middot;");
      $("#win5").html("&middot;");
      $("#win6").html("&middot;");
      $("#win7").html("&middot;");
      $("#win8").html("&middot;");
      $("#message").html("Draw. New game was initialized.");
      $("html, body").animate({ scrollTop: 0 }, 0);
    }
    
    else {
      
      gameOn = false;
      
    }
    
  }
  
  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
    
  });
  
  function reset(){
    
    turns= [" "," "," "," "," "," "," ","#","#"];
    count=0;
    $(".tic").text(" ");
    gameOn = false;
  }
  
});