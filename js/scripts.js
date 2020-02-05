function numbersToArray(number) {
  var numberArray = [];
  for (var i = 0; i <= number; i ++) {
      var string = (i).toString();

      if (string.includes("3")) {
          numberArray.push("sorry");
      } else if (string.includes("2")) {
          numberArray.push("Boop");
      } else if (string.includes("1")) {
          numberArray.push("Beep");
      } else {
          
      }
  }
  return numberArray
}




//front end
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#number").val());

    var responseOutput = numbersToArray(userInput);

    $("#response").text(responseOutput);
      
  })
})    