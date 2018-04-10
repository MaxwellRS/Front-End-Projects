$(document).ready(function(){
  var randomQuote;
  var randomAuthor;
function findQuote(){
    
    var quotes = ["Saaaand.", "I pity the fool.", "Get busy living, or get busy dying.", "I'm a power bottom because I'm capable of generating a tremendous amount of force.", "Well if it isn't little...boy.", "Guests are like fish, they start to stink after three days.", "Come at the king, you best not miss."];
    var authors = ["-Anakin Skywalker", "-Mr. T", "-Andy Dufresne", "-Mac", "-Mr. Burns", "-Benjamin Franklin", "-Omar Little"];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $("#tweet").on("click", function(){
window.open("http://twitter.com/intent/tweet?text="+randomQuote);
    
    });
    
  $("#ThrowQuote").on("click", function(){
    findQuote();


               });

  });