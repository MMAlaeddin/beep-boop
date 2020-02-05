function numbersToArray(userInput) {
  var numberArray = [];
  for (var i = 0; i <= userInput; i ++) {
      var string = (i).toString();

      if (string.includes("3")) {
          numberArray.push("sorry");
      } else if (string.includes("2")) {
          numberArray.push("Boop");
      } else if (string.includes("1")) {
          numberArray.push("Beep");
      } else {
        numberArray.push(i);
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