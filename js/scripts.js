//Business logic
function ContactForm(First name, Last name) {
    this.firstName = First name;
    this.lastName = Last name;
    this.High = High;
    this.Moderate = Moderate;
    this.Low = Low;
//User interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var firstName =$("input#firstName").val();
    var lastName =$("input#lastName").val();
    var priority =$("input#priority").val();
    var subject =$("input#subject");

    });
  });
function myFunction () {
  var formOutPut = document.getElementById("contactForm");
    var outPut = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        outPut += x.elements[i].value + "<br>";
    }
    document.getElementById("summary").innerHTML = outPut;
}
