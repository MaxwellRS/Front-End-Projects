
//FIX THE OPERATION AFTER EQUALS IS USED

$(document).ready(function(){
  //stores inputs from user to calculate later
  var inputs = [""];
  //String in store current input string
  var totalString;
  //operators array for validation without the .
  var operators1 = ["+", "-", "/", "X"];
  //operators array for validation with the .
  var operators2 = ["."]
  //numbers for validation
  var nums = [0,1,2,3,4,5,6,7,8,9];
  
  function getValue(input) {
    if (operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicate '.' ");
    } else if (input.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    } else if (operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    } else if (nums.includes(Number(input))){
               inputs.push(input);
    }

    update();
    
  }
    
  
  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }
  
  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  
  $(".btn").on("click", function(){
    if(this.id==="deleteAll"){
      inputs=[""];
      update();
    }
     else if (this.id==="backOne") {
      inputs.pop();
       update();
     }
      else if(this.id==="equals") {
        getTotal();
      }
      else {
        if(inputs[inputs.length-1].indexOf("+", "-", "/","X", ".")===-1){
           getValue(this.id);
           } else {
           getValue(this.id);
           }
      }
    
    
    
  });
  
});