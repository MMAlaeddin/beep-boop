$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number").val());

    var numberInput = ("" + userInput).split("");

    console.log(numberInput);

    if (isNaN(userInput)) {
      alert("Enter a number!");
      // console.log(userInput);


    // } else {
    //   var inputArray = [];
    //   for (var i = 0; i <= userInput; i ++) {
    //     inputArray.push(i);
    //     console.log(inputArray);
    //   }
    // }
    // if(inputArray.includes(3)) {
    //   $("#response").text("beep");
    var blah = [];
    } else {
      for(var index = 0; index <= userInput; index ++) {
        blah.push(i);
        console.log(blah);
      }
    }

    if (blah.includes(1)) {
      ("#response").text("beep");
    }


    
    
    



 





  });

  });
