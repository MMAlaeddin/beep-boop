$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#number").val();

    var numberInput = userInput.split("");
    console.log(numberInput);


    numberInput.find("1");
      return ("beep");
    
    
    



 







  });
});