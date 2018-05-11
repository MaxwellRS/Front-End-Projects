$(document).ready(function(){
  
  var choices = ["rock","paper","scissors"];
  var playerChoice;
  
  function computerTurn(){
    
    var randomNum = Math.floor((Math.random()*choices.length));
    var computerChoice = choices[randomNum];
    
    $('#compDisplay').html("computer: " + computerChoice);
    
    if (playerChoice==="rock" && computerChoice==="scissors"){
      $('#victoryCondition').html("Rock smashes scissors, you win!");
      $('#victoryImage').html('<img src="https://image.ibb.co/nzd7Oy/rock_beats_scissors_copy.jpg" class="victoryShot">');
    }
    if (playerChoice==="rock" && computerChoice==="paper"){
      $('#victoryCondition').html("Paper covers rock, the computer wins.");
      $('#victoryImage').html('<img src="https://image.ibb.co/drZ3wJ/paper_covers_rock_copy.jpg" class="victoryShot">');
    }
    if (playerChoice==="paper" && computerChoice==="rock"){
      $('#victoryCondition').html("Paper covers rock, you win!");
      $('#victoryImage').html('<img src="https://image.ibb.co/drZ3wJ/paper_covers_rock_copy.jpg" class="victoryShot">');
    }
    if (playerChoice==="paper" && computerChoice==="scissors"){
      $('#victoryCondition').html("Scissors cut through paper, the computer wins.");
      $('#victoryImage').html('<img src="https://image.ibb.co/jnHdVd/scissors_cut_paper_copy.jpg" class="victoryShot">');
    }
    if (playerChoice==="scissors" && computerChoice==="paper"){
      $('#victoryCondition').html("Scissors cut through paper, you win!");
      $('#victoryImage').html('<img src="https://image.ibb.co/jnHdVd/scissors_cut_paper_copy.jpg" class="victoryShot">');
    }
    if (playerChoice==="scissors" && computerChoice==="rock"){
      $('#victoryCondition').html("Rock smashes scissors, the computer wins.");
      $('#victoryImage').html('<img src="https://image.ibb.co/nzd7Oy/rock_beats_scissors_copy.jpg" class="victoryShot">');
    }
    if (playerChoice===computerChoice){
      $('#victoryCondition').html("Stalemate!");
      $('#victoryImage').html('<img src="https://image.ibb.co/mgfwiy/Untitled_1.jpg" class="victoryShot">');
    }
    
  }
  
  $('#rock').click(function(){
    $('#playerDisplay').html("player: " + choices[0]);
    playerChoice = "rock";
    $('#rock').addClass('active');
    $('#paper').removeClass('active');
    $('#scissors').removeClass('active');
    computerTurn();
  });
  
  $('#paper').click(function(){
    $('#playerDisplay').html("player: " + choices[1]);
    playerChoice = "paper";
    $('#paper').addClass('active');
    $('#rock').removeClass('active');
    $('#scissors').removeClass('active');
    computerTurn();
  });
  
  $('#scissors').click(function(){
    $('#playerDisplay').html("player: " + choices[2]);
    playerChoice = "scissors";
    $('#scissors').addClass('active');
    $('#rock').removeClass('active');
    $('#paper').removeClass('active');
    computerTurn();
  });
  
});