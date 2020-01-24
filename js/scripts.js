$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var potato = parseInt($("input#number"));

    if (potato === 1); {
      $("#response").text("beep"); 
    } if (potato === 2);
      $("#response").text("boop");




  });
});