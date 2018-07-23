$(document).ready(function() {
  $("form").click(function(event) {
    event.preventDefault();
    var firstName =$("input#firstName").val();
    var lastName =$("input#lastName").val();
    var priority =$("input#priority").val();
    var subject =$("input#subject");
    var result = parseInt(number);
    
    });
  });
});



// $(document).ready(function() {
//   $("form").click(function(event) {
//     event.preventDefault();
//     var number =$("input#number").val();
//     var result = parseInt(number);
//     map(result);
//     sam.forEach(function(result) {
//       $("#ordered-list").append("<li>" + result + "</li>");
//     });
//   });
// });
//
// var sam= [];
//
// function map(result) {
//   for (index = 1; index <= result; index++) {
//     if (index % 3 === 0){
//     sam.push("Ping");
//   } else if (index % 5 === 0){
//   sam.push("Pong");
// } else if (index % 15 === 0){
//   sam.push("Ping Pong");
// } else {
//   sam.push(index);
// }
// }
// }
