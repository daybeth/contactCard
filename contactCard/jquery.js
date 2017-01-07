$(document).ready(function(){
  $("form").submit(function(){
    $("#contactCardBox").append("<div class='card'>" +
       "<h1>" + $("#name").val() + " " + $("#lastname").val() +
       "</h1>" + "<h3>Click here for Description!</h3>" + "</div>");
    return false
  });
  
  $(document).on("click", "h3", function(){
    $(this).hide( function(){
      $(this).replaceWith("<div class='aboutThis'>" + $("#description").val() + "</div>");
    });
  });
});