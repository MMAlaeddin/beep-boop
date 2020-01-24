$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number").val());

    var numberInput = [];

    for (var i = 0; i <= userInput; i ++) {
      numberInput.push(i);
      console.log(numberInput);

      if (userInput === 1) {
        $("#response").text("Beep");
      } else if (userInput === 2) {
        $("#response").text("Boop");
      } else if (userInput === 3) {
        $("#response").text("Sorry Dave, but you aint gettin' nothin'");
      } else if (numberInput.includes(3)) {
        $("#response").text("whatttt");
      }


    

    if (isNaN(userInput)) {
      alert("Enter a number!");
      

    }

    

  }

    
    
    



 





  });

  });
