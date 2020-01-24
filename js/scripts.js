$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number").val());

    var numberInput = [];

    for (var i = 0; i <= userInput; i ++) {
      numberInput.push(i);
      console.log(numberInput);


    

    if (isNaN(userInput)) {
      alert("Enter a number!");
      

    }

    

  }

    
    
    



 





  });

  });
